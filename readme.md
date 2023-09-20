# Dota 2 Minimap Typer 🗺️✍️

**Dota 2 Minimap Typer** addresses the challenge of Dota 2's strict valve rules related to behavior scores that limit the chat functionality. If you've ever been restricted from chatting due to a low behavior score, this tool is here to help!

With my application, you can "type" on the Dota 2 mini-map. As you type letters and numbers, they will be drawn on the mini-map, bypassing the chat restrictions and allowing communication.

## Features 🌟
- Draw letters and numbers directly on the Dota 2 mini-map as you type.
- Currently supports UA and RU language and numeric input.
- Simple in-game overlay *(only DX11)*

## Installation 📥

### Option 1: Direct Download

1. Navigate to the **Releases** section.
2. Download the latest executable for your system.

### Option 2: Build from Source

1. Clone this repository:
```git clone [repository-url]```
2. Make sure you have Node version `<=14` installed. 
3. Install the required node modules:
```npm install```
4. To run the application:
```npm run start```
5. To build the executables:
```npm run build```

> After running `npm run build`, the executables can be found in the `dist` folder at the root of the repository.

## How to Use 🛠️

1. Launch the **Dota 2 Chat Assistant** application.
2. Click on the "Включить" button to activate the tool.
3. Once inside Dota 2, press the `\` key.
4. Start typing! As you type, the corresponding symbols will appear on the mini-map.
5. Use the `backspace` key to reset the caret position (this will take effect after all previously typed letters are drawn).
6. Press the `\` key again to pause the input handling.

## In-game overlay 🔗
Minimize app using button next to close, and use it as **in-game overlay**
> ### **⚠️ ONLY DirectX 11 SUPPORTED**
> ***Adjust settings in Dota to use this***


## Built With 🧰

- Electron js
- Robot js
- iohook

I hope this tool enhances your Dota 2 experience. Enjoy communicating freely on the battlegrounds!
