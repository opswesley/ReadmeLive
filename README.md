# ReadmeLive - Editor Markdown

![ReadmeLive Preview](https://i.postimg.cc/ncfFn9n5/image.png)

---

## 🌍 English Documentation

### 📖 Overview

**ReadmeLive** is a web-based Markdown editor designed for real-time creation and preview of Markdown files. With a modern and responsive interface, it's perfect for developers, writers, and anyone who needs a seamless Markdown experience. Built with HTML, CSS, and JavaScript, and powered by **Marked.js** and **Highlight.js**, this tool supports both light and dark themes.

#### ✨ Key Features

- **Live Preview:** Write on the left panel and see formatted output instantly.
- **Syntax Highlighting:** Code blocks are styled with **Highlight.js**, supporting multiple languages.
- **Formatting Toolbar:** Easily apply Markdown styles with one-click buttons.
- **Dark/Light Mode:** Smooth theme transitions for better readability.
- **Content Persistence:** Auto-save your work in local storage.
- **Modern UI:** Gradient header, custom scrollbars, and a polished design.
- **Keyboard Shortcuts:** Use `Ctrl+B` for **bold**, `Ctrl+I` for *italic*, and more.

---

### 🎨 Preview

![Preview](https://i.postimg.cc/1txRCv5W/image.png)

The **ReadmeLive** interface features a split-screen design with Markdown input on the left and a live preview on the right. The toolbar at the top provides quick formatting, and the **moon icon** toggles between light and dark themes seamlessly.

---

## ⚙️ Prerequisites

- A modern browser (Chrome, Firefox, Edge, Safari).
- Internet connection for external libraries (Marked.js, Highlight.js, Font Awesome, Google Fonts).
- *(Optional)* A local server (e.g., Live Server extension for VS Code) for development.

---

## 📥 Installation

### 🚀 Run the Application

1. **Open `index.html` directly** in your browser, or
2. **Use a local server** *(recommended for development)*:
   ```bash
   # Using VS Code Live Server
   Right-click index.html > Open with Live Server
   ```
   The app will be available at `http://localhost:5500` *(port may vary)*.

### 🖊️ Usage

- **Write Markdown** in the left panel.
- **Apply Formatting** using the toolbar.
- **Preview in Real-Time** on the right panel.
- **Toggle Theme** by clicking the 🌙 icon.
- **Save Content** with the 💾 icon *(stored in local storage).*
- **Keyboard Shortcuts:**
  - `Ctrl+B` → **Bold**
  - `Ctrl+I` → *Italic*
  - `Ctrl+1/2/3` → Headings 1, 2, 3

---

## 🛠️ Dependencies

This project uses the following external libraries (loaded via CDN):

- **Marked.js** → Parses Markdown into HTML.
  ```html
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  ```
- **Highlight.js** → Syntax highlighting for code blocks.
  ```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css">
  ```
- **Font Awesome** → Icons for the toolbar.
  ```html
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  ```
- **Google Fonts (Montserrat)** → Custom typography.
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;800&display=swap" rel="stylesheet">
  ```
- **Favicon** → Custom branding.
  ```html
  <link rel="icon" type="image/png" href="https://cdn-icons-png.flaticon.com/128/18008/18008297.png">
  ```

---

## 🔧 Customization

- **Favicon:** Replace in `index.html`.
- **Themes:** Modify colors in `styles.css`.
- **Logo:** Change the SVG in `index.html`.
- **Toolbar:** Extend formatting options in `script.js`.

---

## ⚠️ Important Notes

- **CDN Dependency:** Requires an internet connection.
- **Local Storage:** Saves content persistently in the browser.
- **Browser Compatibility:** Custom scrollbars work best on modern browsers.
- **Responsiveness:** Not fully optimized for mobile yet.

---

## 📝 License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

## 🇧🇷 Documentação em Português

### 📖 Visão Geral

**ReadmeLive** é um editor Markdown baseado na web, ideal para desenvolvedores e escritores. Com suporte a **temas claro e escuro**, permite pré-visualização em tempo real e formatação simplificada. Construído com **HTML, CSS e JavaScript**, utiliza **Marked.js** e **Highlight.js** para conversão e realce de sintaxe.

#### ✨ Funcionalidades

- **Pré-visualização em Tempo Real** 📄
- **Realce de Código** com **Highlight.js** 🎨
- **Barra de Formatação** 🛠️
- **Modo Claro/Escuro** 🌙☀️
- **Salvamento Automático** 💾
- **Atalhos de Teclado** ⌨️

### 🎨 Pré-visualização

![Preview](https://i.postimg.cc/ncfFn9n5/image.png)
![Preview](https://i.postimg.cc/1txRCv5W/image.png)

A interface possui um design de **tela dividida**, com **editor Markdown à esquerda** e **pré-visualização à direita**. A **barra superior** facilita formatações rápidas, enquanto o **ícone de lua** alterna entre os temas claro e escuro.

---

## 📥 Instalação

1. **Abra `index.html` no navegador**, ou
2. **Use um servidor local** *(recomendado para desenvolvimento)*:
   ```bash
   # VS Code Live Server
   Clique com o botão direito em index.html > Abrir com Live Server
   ```
   A aplicação estará disponível em `http://localhost:5500` *(porta pode variar).*

### 🚀 Como Usar

- **Escreva Markdown** no painel esquerdo.
- **Aplique Formatação** com os botões da barra de ferramentas.
- **Visualize em Tempo Real** no painel direito.
- **Alterne o Tema** 🌙.
- **Salve o Conteúdo** 💾.
- **Atalhos:**
  - `Ctrl+B` → **Negrito**
  - `Ctrl+I` → *Itálico*
  - `Ctrl+1/2/3` → Cabeçalhos 1, 2, 3

---

## 📝 Licença

Este projeto está sob a **Licença MIT**. Consulte o arquivo `LICENSE` para detalhes.