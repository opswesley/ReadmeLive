document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('markdown-input');
  const output = document.getElementById('markdown-output');
  marked.setOptions({
    breaks: true,
    highlight: function (code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  });
  const savedContent = localStorage.getItem('markdownContent');
  if (savedContent) {
    input.value = savedContent;
    output.innerHTML = marked.parse(savedContent);
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block);
    });
  }
  window.applyFormatting = (type) => {
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const selectedText = input.value.substring(start, end);
    let newText = '';

    switch (type) {
      case 'bold':
        newText = `**${selectedText}**`;
        break;
      case 'italic':
        newText = `*${selectedText}*`;
        break;
      case 'h1':
        newText = `# ${selectedText}`;
        ensureNewLine(start, '# ');
        break;
      case 'h2':
        newText = `## ${selectedText}`;
        ensureNewLine(start, '## ');
        break;
      case 'h3':
        newText = `### ${selectedText}`;
        ensureNewLine(start, '### ');
        break;
      case 'ul':
        newText = selectedText.split('\n').map(line => `- ${line}`).join('\n');
        ensureNewLine(start, '- ');
        break;
      case 'ol':
        newText = selectedText.split('\n').map((line, index) => `${index + 1}. ${line}`).join('\n');
        ensureNewLine(start, '1. ');
        break;
      case 'link':
        const url = prompt('Digite o URL do link:');
        if (url) newText = `[${selectedText || 'Link'}](${url})`;
        break;
      case 'image':
        const imgUrl = prompt('Digite o URL direto da imagem:');
        if (imgUrl) newText = `![${selectedText || 'Imagem'}](${imgUrl})`;
        break;
      case 'code':
        newText = `\`${selectedText}\``;
        break;
      case 'codeblock':
        newText = "```\n" + selectedText + "\n```";
        ensureNewLine(start, '```\n');
        break;
      default:
        return;
    }

    if (newText) {
      const before = input.value.substring(0, start);
      const after = input.value.substring(end);
      input.value = before + newText + after;
      input.selectionStart = start;
      input.selectionEnd = start + newText.length;
      input.dispatchEvent(new Event('input'));
    }
  };
  function ensureNewLine(start, prefix) {
    const beforeText = input.value.substring(0, start);
    if (beforeText && !beforeText.endsWith('\n')) {
      const newText = '\n' + prefix + input.value.substring(start);
      input.value = beforeText + newText;
      input.selectionStart = start + 1;
      input.selectionEnd = start + 1 + prefix.length;
    }
  }
  window.toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    document.body.style.transition = 'none';
    setTimeout(() => {
      document.body.style.transition = 'all 0.3s ease-in-out';
    }, 0);
  };
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
  window.saveContent = () => {
    localStorage.setItem('markdownContent', input.value);
    alert('Conteúdo salvo com sucesso!');
  };

  // Atalhos de teclado
  input.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case 'b': // Ctrl+B para negrito
          e.preventDefault();
          applyFormatting('bold');
          break;
        case 'i': // Ctrl+I para itálico
          e.preventDefault();
          applyFormatting('italic');
          break;
        case '1': // Ctrl+1 para H1
          e.preventDefault();
          applyFormatting('h1');
          break;
        case '2': // Ctrl+2 para H2
          e.preventDefault();
          applyFormatting('h2');
          break;
        case '3': // Ctrl+3 para H3
          e.preventDefault();
          applyFormatting('h3');
          break;
      }
    }
  });
  input.addEventListener('input', () => {
    const markdownText = input.value;
    output.innerHTML = marked.parse(markdownText);
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block);
    });

    document.querySelectorAll('.preview img').forEach((img) => {
      img.onerror = () => {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = `Imagem não pôde ser carregada: ${img.src}`;
        img.parentNode.replaceChild(errorMessage, img);
      };
    });
  });
  if (!savedContent) {
    input.value = '';
    output.innerHTML = marked.parse(input.value);
  }
});