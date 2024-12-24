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

## Project Structure
```
crypto-price-tracking-bot/
├── bot.js          # Main bot file with all functionality
├── .env            # Environment variables configuration
├── package.json    # Project dependencies
└── README.md       # Project documentation
```

## Technical Stack
- Node.js
- Telegram Bot API
- DexScreener API
- Dependencies:
  - `node-telegram-bot-api`: Telegram Bot API integration
  - `node-fetch`: HTTP requests handling
  - `dotenv`: Environment variables management

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
1. Create a `.env` file in the project root:
```bash
# Create and edit the .env file
touch .env
```

2. Configure your environment variables in the `.env` file:
```bash
# Telegram Bot Configuration
TELEGRAM_BOT_TOKEN=your_bot_token_here

# Update Configuration
UPDATE_INTERVAL=300000  # 5 minutes in milliseconds
```

3. Get your Telegram bot token:
   - Talk to [@BotFather](https://t.me/BotFather) on Telegram
   - Use the `/newbot` command to create a new bot
   - Copy the provided token and paste it in `TELEGRAM_BOT_TOKEN`

⚠️ **Important**: 
- Never share your bot token
- Don't commit the `.env` file to Git (it's already in .gitignore)
- Keep a secure backup of your token

## Usage
Start the bot with:
```bash
npm start
```

## Available Commands
- `/start` - Get started with the bot
- `/tokens` - List all active tokens
- `/price <ticker>` - Get price information for a specific token
- `/info <ticker>` - Get detailed information about a token

## How It Works
1. The bot connects to Telegram and listens for user commands
2. When a command is received, it fetches data from DexScreener API
3. The data is processed and formatted for user-friendly display
4. Information is sent back to the user through Telegram

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