const { scrapeDaosWorld } = require('./scraper');

// Función auxiliar para formatear números
function formatNumber(num) {
    if (!num) return 'N/A';
    if (num >= 1e9) {
        return (num / 1e9).toFixed(2) + 'B';
    }
    if (num >= 1e6) {
        return (num / 1e6).toFixed(2) + 'M';
    }
    if (num >= 1e3) {
        return (num / 1e3).toFixed(2) + 'K';
    }
    return num.toFixed(2);
}

async function main() {
    const tokens = await scrapeDaosWorld();
    console.log('\nResumen de tokens encontrados:');
    tokens.forEach(token => {
        console.log(`\n${token.name}:`);
        if (token.dex) {
            console.log(`Market Cap: $${formatNumber(token.dex.marketCap)}`);
            console.log(`Precio: $${token.dex.price || 'N/A'}`);
            console.log(`Liquidez: $${formatNumber(token.dex.liquidity)}`);
            console.log(`Volumen 24h: $${formatNumber(token.dex.volume24h)}`);
        } else {
            console.log('No hay información disponible en DexScreener');
        }
    });
}

main().catch(console.error); 