# Crypto Price Tracking Bot 🤖💰

## Overview
A Telegram bot designed to monitor and analyze cryptocurrency token prices on DexScreener. This powerful tool helps users track token prices, market caps, and liquidity across different DEXes, providing real-time information through Telegram.

## Key Features
- **Real-time Token Monitoring**: Track cryptocurrency prices from DexScreener
- **Market Data Analysis**: Get detailed information about market cap, liquidity, and 24h volume
- **Telegram Integration**: Receive updates and notifications directly in Telegram
- **Multi-Token Support**: Monitor multiple tokens simultaneously
- **DEX Integration**: Support for various decentralized exchanges
- **Automated Updates**: Continuous price and market data monitoring

## Technical Stack
- Node.js
- Telegram Bot API
- DexScreener API
- PocketHost Database
- Dependencies:
  - node-telegram-bot-api
  - axios
  - puppeteer
  - node-fetch

## Installation
1. Clone the repository:
```bash
git clone https://github.com/aqsashlux/daosworldmkcap.git
cd daosworldmkcap
```

2. Install dependencies:
```bash
npm install
```

## Configuration
1. Crea un archivo `.env` en la raíz del proyecto:
```bash
# Crea y edita el archivo .env
cp .env.example .env
```

2. Configura tus variables de entorno en el archivo `.env`:
```bash
# Telegram Bot Configuration
TELEGRAM_BOT_TOKEN=your_bot_token_here

# API Configuration
DEXSCREENER_API_URL=https://api.dexscreener.com/latest/dex
POCKETHOST_API_URL=https://daos.pockethost.io/api

# Update Configuration
UPDATE_INTERVAL=300000  # 5 minutes in milliseconds
```

3. Obtén tu token de bot de Telegram:
   - Habla con [@BotFather](https://t.me/BotFather) en Telegram
   - Usa el comando `/newbot` para crear un nuevo bot
   - Copia el token proporcionado y colócalo en `TELEGRAM_BOT_TOKEN`

⚠️ **Importante**: 
- Nunca compartas tu token de bot
- No subas el archivo `.env` a Git (ya está en .gitignore)
- Mantén una copia de respaldo segura de tu token

## Usage
1. Start the bot:
```bash
node main.js
```

## How It Works
1. The bot connects to Telegram and listens for user commands
2. Periodically fetches token data from DexScreener API
3. Processes and formats market data for user-friendly display
4. Sends updates and notifications through Telegram
5. Stores historical data in PocketHost database

## Features in Detail
- Price tracking for multiple tokens
- Market cap monitoring
- Liquidity analysis
- 24-hour volume tracking
- Custom price alerts
- Token information lookup

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
Daniel - [@Daniel9696r](https://x.com/Daniel9696r)
Project Link: [https://github.com/aqsashlux/daosworldmkcap](https://github.com/aqsashlux/daosworldmkcap)