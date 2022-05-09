const template = (lang = 0) => `<div class="page-wrapper">
    <div class="container">
        <h1 class="headline">Virtual Keyboard</h1>
        <textarea class="textarea" aria-label=""></textarea>
        <div class="keyboard mb-2">
            <div class="keyboard__row">
                <span class="key" id="Backquote">${lang ? 'ё' : '`'}</span>
                <span class="key" id="Digit1">1</span>
                <span class="key" id="Digit2">2</span>
                <span class="key" id="Digit3">3</span>
                <span class="key" id="Digit4">4</span>
                <span class="key" id="Digit5">5</span>
                <span class="key" id="Digit6">6</span>
                <span class="key" id="Digit7">7</span>
                <span class="key" id="Digit8">8</span>
                <span class="key" id="Digit9">9</span>
                <span class="key" id="Digit0">0</span>
                <span class="key" id="Minus">-</span>
                <span class="key" id="Equal">=</span>
                <span class="key key--xl key--dark" id="Backspace">Backspace</span>
            </div>
            <div class="keyboard__row">
                <span class="key key--md key--dark" id="Tab">Tab</span>
                <span class="key" id="KeyQ">${lang ? 'й' : 'q'}</span>
                <span class="key" id="KeyW">${lang ? 'ц' : 'w'}</span>
                <span class="key" id="KeyE">${lang ? 'у' : 'e'}</span>
                <span class="key" id="KeyR">${lang ? 'к' : 'r'}</span>
                <span class="key" id="KeyT">${lang ? 'е' : 't'}</span>
                <span class="key" id="KeyY">${lang ? 'н' : 'y'}</span>
                <span class="key" id="KeyU">${lang ? 'г' : 'u'}</span>
                <span class="key" id="KeyI">${lang ? 'ш' : 'i'}</span>
                <span class="key" id="KeyO">${lang ? 'щ' : 'o'}</span>
                <span class="key" id="KeyP">${lang ? 'з' : 'p'}</span>
                <span class="key" id="BracketLeft">${lang ? 'х' : '['}</span>
                <span class="key" id="BracketRight">${lang ? 'ъ' : ']'}</span>
                <span class="key" id="Backslash">\\</span>
                <span class="key key--md key--dark" id="Delete">Del</span>
            </div>
            <div class="keyboard__row">
                <span class="key key--xl key--dark" id="CapsLock">CapsLock</span>
                <span class="key" id="KeyA">${lang ? 'ф' : 'a'}</span>
                <span class="key" id="KeyS">${lang ? 'ы' : 's'}</span>
                <span class="key" id="KeyD">${lang ? 'в' : 'd'}</span>
                <span class="key" id="KeyF">${lang ? 'а' : 'f'}</span>
                <span class="key" id="KeyG">${lang ? 'п' : 'g'}</span>
                <span class="key" id="KeyH">${lang ? 'р' : 'h'}</span>
                <span class="key" id="KeyJ">${lang ? 'о' : 'j'}</span>
                <span class="key" id="KeyK">${lang ? 'л' : 'k'}</span>
                <span class="key" id="KeyL">${lang ? 'д' : 'l'}</span>
                <span class="key" id="Semicolon">${lang ? 'ж' : ';'}</span>
                <span class="key" id="Quote">${lang ? 'э' : '\''}</span>
                <span class="key key--lg key--dark" id="Enter">Enter</span>
            </div>
            <div class="keyboard__row">
                <span class="key key--xl key--dark" id="ShiftLeft">Shift</span>
                <span class="key" id="KeyZ">${lang ? 'я' : 'z'}</span>
                <span class="key" id="KeyX">${lang ? 'ч' : 'x'}</span>
                <span class="key" id="KeyC">${lang ? 'с' : 'c'}</span>
                <span class="key" id="KeyV">${lang ? 'м' : 'v'}</span>
                <span class="key" id="KeyB">${lang ? 'и' : 'b'}</span>
                <span class="key" id="KeyN">${lang ? 'т' : 'n'}</span>
                <span class="key" id="KeyM">${lang ? 'ь' : 'm'}</span>
                <span class="key" id="Comma">${lang ? 'б' : ','}</span>
                <span class="key" id="Period">${lang ? 'ю' : '.'}</span>
                <span class="key" id="Slash">${lang ? '.' : '/'}</span>
                <span class="key key--dark" id="ArrowUp">↑</span>
                <span class="key key--lg key--dark" id="ShiftRight">Shift</span>
            </div>
            <div class="keyboard__row">
                <span class="key key--dark" id="ControlLeft">Ctrl</span>
                <span class="key key--dark" id="MetaLeft">Win</span>
                <span class="key key--dark" id="AltLeft">Alt</span>
                <span class="key key--space" id="Space"></span>
                <span class="key key--dark" id="AltRight">Alt</span>
                <span class="key key--dark" id="ControlRight">Ctrl</span>
                <span class="key key--dark" id="ArrowLeft">←</span>
                <span class="key key--dark" id="ArrowDown">↓</span>
                <span class="key key--dark" id="ArrowRight">→</span>
                <span class="key key--primary" id="Language">${lang ? 'РУ' : 'EN'}</span>
            </div>
        </div>
        <p class="text">You can change language with alt+ctrl</p>
    </div>
</div>`;

class VirtualKeyboard {
  constructor(textArea, keysDOM, languageBtn, lang = false) {
    this.keys = new Map([
      ['Backquote', ['`', '~', '~', '`', 'ё', 'Ё', 'ё', 'Ё']],
      ['Digit1', ['1', '!', '!', '1', '1', '!', '!', '1']],
      ['Digit2', ['2', '@', '@', '2', '2', '"', '"', '2']],
      ['Digit3', ['3', '#', '#', '3', '3', '№', '№', '3']],
      ['Digit4', ['4', '$', '$', '4', '4', ';', ';', '4']],
      ['Digit5', ['5', '%', '%', '5', '5', '%', '%', '5']],
      ['Digit6', ['6', '^', '^', '6', '6', ':', ':', '6']],
      ['Digit7', ['7', '&', '&', '7', '7', '?', '?', '7']],
      ['Digit8', ['8', '*', '*', '8', '8', '*', '*', '8']],
      ['Digit9', ['9', '(', '(', '9', '9', '(', '(', '9']],
      ['Digit0', ['0', ')', ')', '0', '0', ')', ')', '0']],
      ['Minus', ['-', '_', '_', '-', '-', '_', '_', '-']],
      ['Equal', ['=', '+', '+', '=', '=', '+', '+', '=']],
      ['Backspace', ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace']],
      ['Tab', ['Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab']],
      ['KeyQ', ['q', 'Q', 'q', 'Q', 'й', 'Й', 'й', 'Й']],
      ['KeyW', ['w', 'W', 'w', 'W', 'ц', 'Ц', 'ц', 'Ц']],
      ['KeyE', ['e', 'E', 'e', 'E', 'у', 'У', 'у', 'У']],
      ['KeyR', ['r', 'R', 'r', 'R', 'к', 'К', 'к', 'К']],
      ['KeyT', ['t', 'T', 't', 'T', 'е', 'Е', 'е', 'Е']],
      ['KeyY', ['y', 'Y', 'y', 'Y', 'н', 'Н', 'н', 'Н']],
      ['KeyU', ['u', 'U', 'u', 'U', 'г', 'Г', 'г', 'Г']],
      ['KeyI', ['i', 'I', 'i', 'I', 'ш', 'Ш', 'ш', 'Ш']],
      ['KeyO', ['o', 'O', 'o', 'O', 'щ', 'Щ', 'щ', 'Щ']],
      ['KeyP', ['p', 'P', 'p', 'P', 'з', 'З', 'з', 'З']],
      ['BracketLeft', ['[', '{', '{', '[', 'х', 'Х', 'х', 'Х']],
      ['BracketRight', [']', '}', '}', ']', 'ъ', 'Ъ', 'ъ', 'Ъ']],
      ['Backslash', ['\\', '|', '|', '\\', '\\', '/', '/', '\\']],
      ['Delete', ['Del', 'Del', 'Del', 'Del', 'Del', 'Del', 'Del', 'Del']],
      ['CapsLock', ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock']],
      ['KeyA', ['a', 'A', 'a', 'A', 'ф', 'Ф', 'ф', 'Ф']],
      ['KeyS', ['s', 'S', 's', 'S', 'ы', 'Ы', 'ы', 'Ы']],
      ['KeyD', ['d', 'D', 'd', 'D', 'в', 'В', 'в', 'В']],
      ['KeyF', ['f', 'F', 'f', 'F', 'а', 'А', 'а', 'А']],
      ['KeyG', ['g', 'G', 'g', 'G', 'п', 'П', 'п', 'П']],
      ['KeyH', ['h', 'H', 'h', 'H', 'р', 'Р', 'р', 'Р']],
      ['KeyJ', ['j', 'J', 'j', 'J', 'о', 'О', 'о', 'О']],
      ['KeyK', ['k', 'K', 'k', 'K', 'л', 'Л', 'л', 'Л']],
      ['KeyL', ['l', 'L', 'l', 'L', 'д', 'Д', 'д', 'Д']],
      ['Semicolon', [';', ':', ':', ';', 'ж', 'Ж', 'ж', 'Ж']],
      ['Quote', ['\'', '"', '"', '\'', 'э', 'Э', 'э', 'Э']],
      ['Enter', ['Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter']],
      ['ShiftLeft', ['Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift']],
      ['KeyZ', ['z', 'Z', 'z', 'Z', 'я', 'Я', 'я', 'Я']],
      ['KeyX', ['x', 'X', 'x', 'X', 'ч', 'Ч', 'ч', 'Ч']],
      ['KeyC', ['c', 'C', 'c', 'C', 'с', 'С', 'с', 'С']],
      ['KeyV', ['v', 'V', 'v', 'V', 'м', 'М', 'м', 'М']],
      ['KeyB', ['b', 'B', 'b', 'B', 'и', 'И', 'и', 'И']],
      ['KeyN', ['n', 'N', 'n', 'N', 'т', 'Т', 'т', 'Т']],
      ['KeyM', ['m', 'M', 'm', 'M', 'ь', 'Ь', 'ь', 'Ь']],
      ['Comma', [',', '<', '<', ',', 'б', 'Б', 'б', 'Б']],
      ['Period', ['.', '>', '>', '.', 'ю', 'Ю', 'ю', 'Ю']],
      ['Slash', ['/', '?', '?', '/', '.', ',', ',', '.']],
      ['ArrowUp', ['↑', '↑', '↑', '↑', '↑', '↑', '↑', '↑']],
      ['ShiftRight', ['Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift', 'Shift']],
      ['ControlLeft', ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']],
      ['MetaLeft', ['Win', 'Win', 'Win', 'Win', 'Win', 'Win', 'Win', 'Win']],
      ['AltLeft', ['Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt']],
      ['Space', ['', '', '', '', '', '', '', '']],
      ['AltRight', ['Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt', 'Alt']],
      ['ControlRight', ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']],
      ['ArrowLeft', ['←', '←', '←', '←', '←', '←', '←', '←']],
      ['ArrowDown', ['↓', '↓', '↓', '↓', '↓', '↓', '↓', '↓']],
      ['ArrowRight', ['→', '→', '→', '→', '→', '→', '→', '→']],
      ['Language', ['EN', 'EN', 'EN', 'EN', 'РУ', 'РУ', 'РУ', 'РУ']],
    ]);
    this.functionKeys = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'Space', 'AltLeft', 'AltRight', 'ControlRight', 'Language'];
    this.changeLanguage = new Set();
    this.caretPos = 0;
    this.caps = false;
    this.language = lang;
    this.textArea = textArea;
    this.keysDOM = keysDOM;
    this.languageBtn = languageBtn;
  }

  pressKey(thisCode, thisKey) {
    const { value } = this.textArea;
    const pos = this.caretPos;
    switch (thisCode) {
      case 'Backspace':
        this.textArea.value = value.substring(0, pos - 1) + value.substring(pos);
        this.caretPos -= 1;
        break;
      case 'Tab':
        this.textArea.value = `${value.substring(0, pos)}    ${value.substring(pos)}`;
        this.caretPos += 4;
        break;
      case 'Delete':
        this.textArea.value = value.substring(0, pos) + value.substring(pos + 1);
        break;
      case 'CapsLock':
        document.getElementById('CapsLock').classList.toggle('key--primary');
        this.caps = !(this.caps);
        this.changeKeys();
        break;
      case 'Enter':
        this.addSymbol(value, this.caretPos, '\n');
        this.caretPos += 1;
        break;
      case 'ControlLeft':
        this.changeLanguage.add(thisCode);
        break;
      case 'AltLeft':
        this.changeLanguage.add(thisCode);
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        this.keysDOM.forEach((e) => {
          const lng = this.language ? [6, 5] : [2, 1];
          e.innerText = this.keys.get(e.id)[this.caps ? lng[0] : lng[1]];
        });
        break;
      case 'Space':
        this.addSymbol(value, this.caretPos, ' ');
        this.caretPos += 1;
        break;
      case 'Language':
        this.toggleLanguage();
        break;
      default:
        if (this.functionKeys.indexOf(thisCode) === -1) {
          this.addSymbol(value, this.caretPos, thisKey.innerText);
          this.caretPos += 1;
        }
    }
    thisKey.classList.add('active');
    this.textArea.blur();
  }

  upKey(thisCode, thisKey) {
    thisKey.classList.remove('active');
    if (thisCode === 'ControlLeft' || thisCode === 'AltLeft') {
      if (this.changeLanguage.size === 2) {
        this.toggleLanguage();
      }
      this.changeLanguage.delete(thisCode);
    }
    if (thisCode === 'ShiftLeft' || thisCode === 'ShiftRight') this.changeKeys();
  }

  changeKeys() {
    this.keysDOM.forEach((e) => {
      const lng = this.language ? [7, 4] : [3, 0];
      e.innerText = this.keys.get(e.id)[this.caps ? lng[0] : lng[1]];
    });
  }

  addSymbol(str, index, symbol) {
    this.textArea.value = str.substring(0, index) + symbol + str.substring(index);
  }

  setPosition(position) {
    this.caretPos = position;
  }

  toggleLanguage() {
    this.languageBtn.innerText = this.languageBtn.innerText === 'EN' ? 'РУ' : 'EN';
    this.language = !(this.language);
    localStorage.setItem('lang', this.language ? '1' : '0');
    this.changeKeys();
  }
}

window.onload = () => {
  const lang = Number(localStorage.getItem('lang'));
  document.querySelector('body').innerHTML = template(lang);

  const keyboard = document.querySelector('.keyboard');
  const textArea = document.querySelector('.textarea');
  const keysDOM = keyboard.querySelectorAll('.key');
  const languageBtn = document.getElementById('Language');
  const VKeyboard = new VirtualKeyboard(textArea, keysDOM, languageBtn, lang);

  window.onkeydown = (e) => {
    const thisKey = document.getElementById(`${e.code}`);
    if (thisKey) VKeyboard.pressKey(e.code, thisKey);
    return false;
  };

  window.onkeyup = (e) => {
    const thisKey = document.getElementById(`${e.code}`);
    if (thisKey) VKeyboard.upKey(e.code, thisKey);
    return false;
  };

  keyboard.onmousedown = (e) => {
    if (!e.target.classList.contains('keyboard__row')) {
      VKeyboard.pressKey(e.target.id, e.target);
    }
  };

  keyboard.onmouseup = (e) => {
    if (!e.target.classList.contains('keyboard__row')) {
      VKeyboard.upKey(e.target.id, e.target);
    }
  };

  textArea.onclick = () => {
    VKeyboard.setPosition(textArea.selectionStart);
  };
};
