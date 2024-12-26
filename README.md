# DAOs World Bot 🤖

[English](#english) | [Español](#español) | [中文](#中文)

---

## English

### Overview
DAOs World Bot is a Telegram bot designed to track and monitor token prices and statistics on the Base network. It provides real-time price updates, historical data analysis, and comprehensive market information for various tokens.

### Features
- Real-time token price tracking
- Historical price analysis
- Market statistics (Market Cap, Liquidity, Volume)
- Configurable update intervals
- Dual storage system (Supabase/Local Memory)
- Interactive UI with buttons/text modes
- Admin management system
- Multi-page token listing

### Commands
- `/tokens` - List active tokens
- `/price [ticker]` - Detailed token information
- `/history [ticker]` - Token price history analysis
- `/admin` - Access admin panel (admin only)

### Admin Commands
- `/setinterval [seconds]` - Change update interval
- `/stats` - View bot statistics
- `/clearhistory [ticker]` - Clear token history
- `/setcriteria` - Change exposure criteria
- `/setmode` - Change storage mode
- `/setui` - Change interface mode

### Technical Requirements
- Node.js v14+
- Supabase account (optional)
- Telegram Bot Token

### Installation
1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Configure environment variables in `.env`:
```env
TELEGRAM_BOT_TOKEN=your_bot_token
ADMIN_CHAT_ID=your_admin_id
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
```

### Supabase Setup
Required tables:
```sql
-- Token prices table
CREATE TABLE token_prices (
    id BIGSERIAL PRIMARY KEY,
    address TEXT NOT NULL,
    pool_address TEXT NOT NULL,
    ticker TEXT NOT NULL,
    name TEXT NOT NULL,
    price DECIMAL,
    market_cap DECIMAL,
    liquidity DECIMAL,
    volume_24h DECIMAL,
    dex_id TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Bot configuration table
CREATE TABLE bot_config (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Secondary admins table
CREATE TABLE secondary_admins (
    user_id TEXT PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);
```

### Project Structure
```
├── bot.js                 # Main bot file
├── services/
│   ├── storage.js         # Storage service manager
│   ├── memoryStorage.js   # Local memory storage
│   ├── supabase.js       # Supabase integration
│   └── queues/
│       └── priceQueue.js  # Price update queue
├── data/                  # Local data storage
└── .env                   # Environment variables
```

### Credits
- Twitter: [@DanAQbull](https://x.com/DanAQbull)
- Created for [daos.world](https://daos.world)
- Independent developer, not affiliated with daos.world

---

## Español

### Descripción General
DAOs World Bot es un bot de Telegram diseñado para rastrear y monitorear precios de tokens y estadísticas en la red Base. Proporciona actualizaciones de precios en tiempo real, análisis de datos históricos e información completa del mercado para varios tokens.

### Características
- Seguimiento de precios de tokens en tiempo real
- Análisis de precios históricos
- Estadísticas de mercado (Cap. de Mercado, Liquidez, Volumen)
- Intervalos de actualización configurables
- Sistema de almacenamiento dual (Supabase/Memoria Local)
- Interfaz interactiva con modos botones/texto
- Sistema de gestión de administradores
- Listado de tokens con paginación

### Comandos
- `/tokens` - Lista de tokens activos
- `/price [ticker]` - Información detallada del token
- `/history [ticker]` - Análisis del historial de precios
- `/admin` - Acceso al panel de administración (solo admin)

### Comandos de Administrador
- `/setinterval [segundos]` - Cambiar intervalo de actualización
- `/stats` - Ver estadísticas del bot
- `/clearhistory [ticker]` - Limpiar historial de un token
- `/setcriteria` - Cambiar criterios de exposición
- `/setmode` - Cambiar modo de almacenamiento
- `/setui` - Cambiar modo de interfaz

### Requisitos Técnicos
- Node.js v14+
- Cuenta de Supabase (opcional)
- Token de Bot de Telegram

### Instalación
1. Clonar el repositorio
2. Instalar dependencias:
```bash
npm install
```
3. Configurar variables de entorno en `.env`:
```env
TELEGRAM_BOT_TOKEN=tu_token_bot
ADMIN_CHAT_ID=tu_id_admin
SUPABASE_URL=tu_url_supabase
SUPABASE_KEY=tu_key_supabase
```

### Configuración de Supabase
Tablas requeridas:
```sql
-- Tabla de precios de tokens
CREATE TABLE token_prices (
    id BIGSERIAL PRIMARY KEY,
    address TEXT NOT NULL,
    pool_address TEXT NOT NULL,
    ticker TEXT NOT NULL,
    name TEXT NOT NULL,
    price DECIMAL,
    market_cap DECIMAL,
    liquidity DECIMAL,
    volume_24h DECIMAL,
    dex_id TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Tabla de configuración del bot
CREATE TABLE bot_config (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Tabla de administradores secundarios
CREATE TABLE secondary_admins (
    user_id TEXT PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);
```

### Estructura del Proyecto
```
├── bot.js                 # Archivo principal del bot
├── services/
│   ├── storage.js         # Gestor de almacenamiento
│   ├── memoryStorage.js   # Almacenamiento en memoria local
│   ├── supabase.js       # Integración con Supabase
│   └── queues/
│       └── priceQueue.js  # Cola de actualización de precios
├── data/                  # Almacenamiento local de datos
└── .env                   # Variables de entorno
```

### Créditos
- Twitter: [@DanAQbull](https://x.com/DanAQbull)
- Creado para [daos.world](https://daos.world)
- Desarrollador independiente, no afiliado con daos.world

---

## 中文

### 概述
DAOs World Bot 是一个 Telegram 机器人，专门用于跟踪和监控 Base 网络上的代币价格和统计数据。它提供实时价格更新、历史数据分析和各种代币的综合市场信息。

### 功能
- 实时代币价格跟踪
- 历史价格分析
- 市场统计（市值、流动性、交易量）
- 可配置更新间隔
- 双重存储系统（Supabase/本地内存）
- 交互式界面（按钮/文本模式）
- 管理员管理系统
- 多页代币列表

### 命令
- `/tokens` - 列出活跃代币
- `/price [代币符号]` - 详细代币信息
- `/history [代币符号]` - 代币价格历史分析
- `/admin` - 访问管理面板（仅管理员）

### 管理员命令
- `/setinterval [秒]` - 更改更新间隔
- `/stats` - 查看机器人统计
- `/clearhistory [代币符号]` - 清除代币历史
- `/setcriteria` - 更改展示标准
- `/setmode` - 更改存储模式
- `/setui` - 更改界面模式

### 技术要求
- Node.js v14+
- Supabase 账户（可选）
- Telegram 机器人令牌

### 安装
1. 克隆仓库
2. 安装依赖：
```bash
npm install
```
3. 在 `.env` 中配置环境变量：
```env
TELEGRAM_BOT_TOKEN=你的机器人令牌
ADMIN_CHAT_ID=你的管理员ID
SUPABASE_URL=你的SUPABASE_URL
SUPABASE_KEY=你的SUPABASE_KEY
```

### Supabase 设置
所需表格：
```sql
-- 代币价格表
CREATE TABLE token_prices (
    id BIGSERIAL PRIMARY KEY,
    address TEXT NOT NULL,
    pool_address TEXT NOT NULL,
    ticker TEXT NOT NULL,
    name TEXT NOT NULL,
    price DECIMAL,
    market_cap DECIMAL,
    liquidity DECIMAL,
    volume_24h DECIMAL,
    dex_id TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- 机器人配置表
CREATE TABLE bot_config (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- 次级管理员表
CREATE TABLE secondary_admins (
    user_id TEXT PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);
```

### 项目结构
```
├── bot.js                 # 主机器人文件
├── services/
│   ├── storage.js         # 存储服务管理器
│   ├── memoryStorage.js   # 本地内存存储
│   ├── supabase.js       # Supabase 集成
│   └── queues/
│       └── priceQueue.js  # 价格更新队列
├── data/                  # 本地数据存储
└── .env                   # 环境变量
```

### 致谢
- Twitter: [@DanAQbull](https://x.com/DanAQbull)
- 为 [daos.world](https://daos.world) 创建
- 独立开发者，与 daos.world 无关联