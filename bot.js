require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const fetch = require('node-fetch');

// Bot Token from environment variable
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, {polling: true});

// Get DexScreener data
async function getDexInfo(poolAddress) {
    try {
        const response = await fetch(`https://api.dexscreener.com/latest/dex/pairs/base/${poolAddress}`);
        const data = await response.json();
        
        if (!data.pairs?.length) return null;
        
        const pair = data.pairs[0];
        return {
            price: pair.priceUsd,
            marketCap: pair.marketCap || pair.fdv,
            liquidity: pair.liquidity?.usd,
            volume24h: pair.volume?.h24,
            dexId: pair.dexId
        };
    } catch (error) {
        console.error('DexScreener Error:', error.message);
        return null;
    }
}

// Get tokens data
async function getTokens() {
    try {
        const response = await fetch('https://daos.pockethost.io/api/collections/Fund/records?filter=upcoming!=true');
        const data = await response.json();
        const tokens = [];

        for (const fund of data.items.filter(f => f.visible)) {
            const dexInfo = await getDexInfo(fund.uniswapv3pool);
            tokens.push({
                name: fund.name,
                ticker: fund.ticker,
                address: fund.address,
                poolAddress: fund.uniswapv3pool,
                creator: fund.creatorTwitter,
                telegram: fund.telegram,
                dex: dexInfo
            });
        }
        
        return tokens;
    } catch (error) {
        console.error('Error fetching tokens:', error.message);
        return [];
    }
}

// Number formatting
function formatNumber(num) {
    if (!num) return 'N/A';
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
    return num.toFixed(2);
}

// /start command
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 
        '🚀 *DAOs World Bot*\n\n' +
        '*Commands:*\n' +
        '/tokens - List active tokens\n' +
        '/price <ticker> - Token price\n' +
        '/info <ticker> - Detailed info',
        {parse_mode: 'Markdown'}
    );
});

// /tokens command
bot.onText(/\/tokens/, async (msg) => {
    try {
        const statusMsg = await bot.sendMessage(msg.chat.id, '⏳ Loading tokens...');
        const tokens = await getTokens();
        
        let message = '📊 *Active Tokens*:\n\n';
        tokens.forEach(token => {
            message += `*${token.name}* (${token.ticker})\n`;
            if (token.dex) {
                message += `💰 $${token.dex.price || 'N/A'}\n`;
                message += `💎 MC: $${formatNumber(token.dex.marketCap)}\n`;
                message += `💧 Liq: $${formatNumber(token.dex.liquidity)}\n`;
            }
            message += '\n';
        });
        
        await bot.editMessageText(message, {
            chat_id: msg.chat.id,
            message_id: statusMsg.message_id,
            parse_mode: 'Markdown'
        });
    } catch (error) {
        bot.sendMessage(msg.chat.id, '❌ Error loading tokens');
    }
});

// /price command
bot.onText(/\/price (.+)/, async (msg, match) => {
    try {
        const tokens = await getTokens();
        const token = tokens.find(t => t.ticker.toUpperCase() === match[1].toUpperCase());
        
        if (!token) {
            bot.sendMessage(msg.chat.id, `❌ Token not found: ${match[1]}`);
            return;
        }
        
        let message = `💰 *${token.name}* (${token.ticker})\n\n`;
        if (token.dex) {
            message += `Price: $${token.dex.price || 'N/A'}\n`;
            message += `MC: $${formatNumber(token.dex.marketCap)}\n`;
            message += `Liquidity: $${formatNumber(token.dex.liquidity)}`;
        } else {
            message += 'No data available';
        }
        
        bot.sendMessage(msg.chat.id, message, {parse_mode: 'Markdown'});
    } catch (error) {
        bot.sendMessage(msg.chat.id, '❌ Error fetching price');
    }
});

// /info command
bot.onText(/\/info (.+)/, async (msg, match) => {
    try {
        const tokens = await getTokens();
        const token = tokens.find(t => t.ticker.toUpperCase() === match[1].toUpperCase());
        
        if (!token) {
            bot.sendMessage(msg.chat.id, `❌ Token not found: ${match[1]}`);
            return;
        }
        
        let message = `📊 *${token.name}* (${token.ticker})\n\n`;
        message += `*Contract:* \`${token.address}\`\n`;
        message += `*Pool:* \`${token.poolAddress}\`\n`;
        message += `*Creator:* @${token.creator}\n`;
        if (token.telegram) message += `*TG:* @${token.telegram}\n\n`;
        
        if (token.dex) {
            message += `💰 *Market*\n`;
            message += `Price: $${token.dex.price || 'N/A'}\n`;
            message += `MC: $${formatNumber(token.dex.marketCap)}\n`;
            message += `Liquidity: $${formatNumber(token.dex.liquidity)}\n`;
            message += `DEX: ${token.dex.dexId}`;
        }
        
        bot.sendMessage(msg.chat.id, message, {
            parse_mode: 'Markdown',
            disable_web_page_preview: true
        });
    } catch (error) {
        bot.sendMessage(msg.chat.id, '❌ Error fetching info');
    }
});

console.log('🚀 Bot started'); 