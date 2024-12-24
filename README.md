# Daos World Price Bot 🤖💰

## Overview
A Telegram bot created for tracking cryptocurrency token prices from the Daos World platform. This tool helps users monitor token prices, market caps, and liquidity across different DEXes, providing real-time information through Telegram. The bot is specifically designed to track tokens listed on Daos World.

## Key Features
- **Real-time Token Monitoring**: Track Daos World cryptocurrency prices from DexScreener
- **Market Data Analysis**: Get detailed information about market cap, liquidity, and 24h volume
- **Telegram Integration**: Receive updates and notifications directly in Telegram
- **Multi-Token Support**: Monitor multiple Daos World tokens simultaneously
- **DEX Integration**: Support for various decentralized exchanges
- **Automated Updates**: Continuous price and market data monitoring for Daos World tokens

## Project Structure
```
daos-world-price-bot/
├── bot.js          # Main bot file with all functionality
├── .env            # Environment variables configuration
├── package.json    # Project dependencies
└── README.md       # Project documentation
```

## Technical Stack
- Node.js
- Telegram Bot API
- DexScreener API
- Daos World API Integration
- Dependencies:
  - `node-telegram-bot-api`: Telegram Bot API integration
  - `node-fetch`: HTTP requests handling
  - `dotenv`: Environment variables management

## Installation
1. Clone the repository:
```bash
git clone https://github.com/aqsashlux/Daosworldprice.git
cd Daosworldprice
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
- `/start` - Get started with the bot and see available commands
- `/tokens` - List all active Daos World tokens
- `/price <ticker>` - Get price information for a specific Daos World token
- `/info <ticker>` - Get detailed information about a token including contract and social links

## How It Works
1. The bot connects to Telegram and listens for user commands
2. When a command is received, it fetches token data from Daos World API
3. Additional market data is fetched from DexScreener API
4. The data is processed and formatted for user-friendly display
5. Information is sent back to the user through Telegram

## Features in Detail
- Price tracking for Daos World tokens
- Market cap monitoring
- Liquidity analysis
- 24-hour volume tracking
- Custom price alerts
- Token information lookup including:
  - Contract addresses
  - Pool information
  - Creator details
  - Social media links

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
Project Link: [https://github.com/aqsashlux/Daosworldprice](https://github.com/aqsashlux/Daosworldprice)

*Note: This is an independent bot created for tracking tokens on the Daos World platform. It is not officially affiliated with or endorsed by Daos World.*