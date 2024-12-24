const axios = require('axios');

async function analyzeTokesWithDexscreener(tokens) {
    for (const token of tokens) {
        try {
            const response = await axios.get(
                `https://api.dexscreener.com/latest/dex/search?q=${token.symbol}`
            );
            
            const pairs = response.data.pairs;
            if (pairs && pairs.length > 0) {
                console.log(`\nAnálisis para ${token.name}:`);
                console.log('Contract:', pairs[0].baseToken.address);
                console.log('Precio:', pairs[0].priceUsd);
                console.log('Liquidez:', pairs[0].liquidity?.usd);
                console.log('Volumen 24h:', pairs[0].volume?.h24);
            }
            
            // Esperamos un poco entre llamadas para respetar el rate limit
            await new Promise(resolve => setTimeout(resolve, 500));
            
        } catch (error) {
            console.error(`Error analizando ${token.symbol}:`, error.message);
        }
    }
}

module.exports = { analyzeTokesWithDexscreener }; 