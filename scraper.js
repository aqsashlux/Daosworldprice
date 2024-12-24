const fetch = require('node-fetch');

async function getDexScreenerInfo(address) {
    try {
        const url = `https://api.dexscreener.com/latest/dex/pairs/base/${address}`;
        console.log('\nConsultando DexScreener:', url);
        
        const response = await fetch(url);
        console.log('Status de la respuesta:', response.status);
        
        const data = await response.json();
        console.log(`\nDatos crudos de DexScreener para ${address}:`, JSON.stringify(data, null, 2));

        if (!data.pairs) {
            console.log('No se encontraron pares');
            return null;
        }

        if (data.pairs.length === 0) {
            console.log('Array de pares está vacío');
            return null;
        }

        const mainPair = data.pairs[0];
        console.log('\nPar principal encontrado:', {
            dexId: mainPair.dexId,
            baseToken: mainPair.baseToken?.symbol,
            quoteToken: mainPair.quoteToken?.symbol,
            price: mainPair.priceUsd,
            marketCap: mainPair.marketCap || mainPair.fdv
        });

        return {
            marketCap: mainPair.marketCap || mainPair.fdv,
            price: mainPair.priceUsd,
            liquidity: mainPair.liquidity?.usd,
            volume24h: mainPair.volume?.h24,
            priceChange24h: mainPair.priceChange?.h24,
            baseToken: mainPair.baseToken,
            quoteToken: mainPair.quoteToken,
            pairAddress: mainPair.pairAddress,
            dexId: mainPair.dexId,
            pairCreatedAt: mainPair.pairCreatedAt
        };
    } catch (error) {
        console.error(`Error obteniendo información de DexScreener para ${address}:`, error.message);
        console.error('Stack:', error.stack);
        return null;
    }
}

async function scrapeDaosWorld() {
    try {
        console.log('Consultando API de daos.world...');
        const response = await fetch('https://daos.pockethost.io/api/collections/Fund/records?filter=upcoming!=true');
        const data = await response.json();
        
        const visibleFunds = data.items.filter(fund => fund.visible);
        console.log(`\nFondos visibles encontrados: ${visibleFunds.length}`);
        
        const tokens = [];
        
        for (const fund of visibleFunds) {
            console.log(`\n=== Procesando ${fund.name} ===`);
            console.log('Dirección del contrato:', fund.address);
            console.log('Pool de Uniswap:', fund.uniswapv3pool);
            
            const tokenInfo = {
                name: fund.name,
                address: fund.address,
                poolAddress: fund.uniswapv3pool,
                ticker: fund.ticker,
                startDate: fund.startDate,
                expiry: fund.fundExpiry,
                creator: fund.creatorTwitter,
                telegram: fund.telegram,
                owner: fund.owner
            };

            console.log('\nObteniendo información de DexScreener...');
            const dexInfo = await getDexScreenerInfo(fund.uniswapv3pool); // Usamos la dirección del pool
            
            if (dexInfo) {
                tokenInfo.dex = dexInfo;
                
                console.log('\nInformación de Mercado encontrada:');
                console.log('Token:', `${dexInfo.baseToken.symbol} (${dexInfo.baseToken.name})`);
                console.log('Market Cap:', dexInfo.marketCap ? `$${formatNumber(dexInfo.marketCap)}` : 'No disponible');
                console.log('Precio:', dexInfo.price ? `$${dexInfo.price}` : 'No disponible');
                console.log('Liquidez:', dexInfo.liquidity ? `$${formatNumber(dexInfo.liquidity)}` : 'No disponible');
                console.log('DEX:', dexInfo.dexId);
                console.log('Par creado:', new Date(dexInfo.pairCreatedAt * 1000).toLocaleString());
            } else {
                console.log('No se pudo obtener información de DexScreener');
            }

            tokens.push(tokenInfo);
            console.log('------------------------');
        }

        return tokens;

    } catch (error) {
        console.error('Error en scrapeDaosWorld:', error.message);
        console.error('Stack:', error.stack);
        return [];
    }
}

function formatNumber(num) {
    if (!num) return 'N/A';
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
    return num.toFixed(2);
}

module.exports = { scrapeDaosWorld }; 