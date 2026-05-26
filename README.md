<div align="center">
  <img src="src-tauri/icons/icon.png" alt="Better R6 Macro" width="120" />
  
  # 🎯 Better R6 Macro
  
  **Rainbow Six Siege Recoil Compensation Tool**
  
  *Professional-grade recoil control with per-operator configs, humanization, and cyberpunk UI.*
  
  [![Tauri](https://img.shields.io/badge/Tauri-2.0-FFC131?logo=tauri)](https://tauri.app)
  [![Rust](https://img.shields.io/badge/Rust-1.77+-000000?logo=rust)](https://rust-lang.org)
  [![License](https://img.shields.io/badge/license-MIT-purple.svg)](LICENSE)
  [![Version](https://img.shields.io/badge/version-1.1.0-rose.svg)](https://github.com/Eduardo-Malta-Pereira/BetterR6Macro/releases)
</div>

---

## ✨ Features

### 🎮 Core
- **Real-time recoil compensation** — Hold M1+M2 to activate
- **Per-operator configs** — 38 attackers + 37 defenders with individual recoil values
- **Humanization engine** — Realistic weapon sway, barrel drift, and hand tremor
- **Activaction delay** — Adjustable 0-1000ms delay before recoil kicks in

### 🎨 Interface
- **Cyberpunk premium UI** — Glassmorphism with neon glow effects
- **Fully draggable** — Move the overlay anywhere on screen
- **Minimize & Close buttons** — Native window controls
- **Info tooltips** — Click the `?` icons for detailed explanations
- **Scroll wheel input** — Adjust values with mouse wheel (0.1 precision)

### ⚙️ Customization
- **F1/F2/F3 keybinds** — Activate, Deactivate, and Toggle macro
- **M4/M5 mouse buttons** — Bind side mouse buttons
- **Customizable recoil** — Vertical, Left, and Right forces (0-256 range)
- **Save/Load configs** — Automatic JSON persistence in Documents folder

### 🛡️ Safety
- **External overlay** — No memory reading or injection
- **Rust backend** — Native performance with Windows API
- **DevTools locked** — Blocked in release builds

---

## 🚀 Installation

### Download
Go to [Releases](https://github.com/Eduardo-Malta-Pereira/BetterR6Macro/releases) and download the latest `.msi` installer.

### Build from Source

**Prerequisites:**
- [Rust](https://rustup.rs) 1.77+
- [Node.js](https://nodejs.org) 18+
- [Tauri CLI](https://tauri.app) (`cargo install tauri-cli`)

```bash
git clone https://github.com/Eduardo-Malta-Pereira/BetterR6Macro.git
cd BetterR6Macro
cargo tauri build
