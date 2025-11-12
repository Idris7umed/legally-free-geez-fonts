// Geez Virtual Keyboard JavaScript

// Geez script character data
// Base characters (consonants) with their Unicode starting points and 7 vowel forms
const geezCharacters = [
    { base: 'ሀ', code: 0x1200, name: 'hä' },    // ሀ ሁ ሂ ሃ ሄ ህ ሆ
    { base: 'ለ', code: 0x1208, name: 'lä' },    // ለ ሉ ሊ ላ ሌ ል ሎ
    { base: 'ሐ', code: 0x1210, name: 'ḥä' },    // ሐ ሑ ሒ ሓ ሔ ሕ ሖ
    { base: 'መ', code: 0x1218, name: 'mä' },    // መ ሙ ሚ ማ ሜ ም ሞ
    { base: 'ሠ', code: 0x1220, name: 'śä' },    // ሠ ሡ ሢ ሣ ሤ ሥ ሦ
    { base: 'ረ', code: 0x1228, name: 'rä' },    // ረ ሩ ሪ ራ ሬ ር ሮ
    { base: 'ሰ', code: 0x1230, name: 'sä' },    // ሰ ሱ ሲ ሳ ሴ ስ ሶ
    { base: 'ሸ', code: 0x1238, name: 'šä' },    // ሸ ሹ ሺ ሻ ሼ ሽ ሾ
    { base: 'ቀ', code: 0x1240, name: 'qä' },    // ቀ ቁ ቂ ቃ ቄ ቅ ቆ
    { base: 'ቈ', code: 0x1248, name: 'qʷä' },   // ቈ ቊ ቋ ቌ ቍ (labiovelar)
    { base: 'በ', code: 0x1260, name: 'bä' },    // በ ቡ ቢ ባ ቤ ብ ቦ
    { base: 'ቨ', code: 0x1268, name: 'vä' },    // ቨ ቩ ቪ ቫ ቬ ቭ ቮ
    { base: 'ተ', code: 0x1270, name: 'tä' },    // ተ ቱ ቲ ታ ቴ ት ቶ
    { base: 'ቸ', code: 0x1278, name: 'čä' },    // ቸ ቹ ቺ ቻ ቼ ች ቾ
    { base: 'ኀ', code: 0x1280, name: 'ḫä' },    // ኀ ኁ ኂ ኃ ኄ ኅ ኆ
    { base: 'ኈ', code: 0x1288, name: 'ḫʷä' },   // ኈ ኊ ኋ ኌ ኍ (labiovelar)
    { base: 'ነ', code: 0x1290, name: 'nä' },    // ነ ኑ ኒ ና ኔ ን ኖ
    { base: 'ኘ', code: 0x1298, name: 'ñä' },    // ኘ ኙ ኚ ኛ ኜ ኝ ኞ
    { base: 'አ', code: 0x12A0, name: 'ʾä' },    // አ ኡ ኢ ኣ ኤ እ ኦ
    { base: 'ከ', code: 0x12A8, name: 'kä' },    // ከ ኩ ኪ ካ ኬ ክ ኮ
    { base: 'ኸ', code: 0x12B8, name: 'ḫä' },    // ኸ ኹ ኺ ኻ ኼ ኽ ኾ
    { base: 'ወ', code: 0x12C8, name: 'wä' },    // ወ ዉ ዊ ዋ ዌ ው ዎ
    { base: 'ዐ', code: 0x12D0, name: 'ʿä' },    // ዐ ዑ ዒ ዓ ዔ ዕ ዖ
    { base: 'ዘ', code: 0x12D8, name: 'zä' },    // ዘ ዙ ዚ ዛ ዜ ዝ ዞ
    { base: 'ዠ', code: 0x12E0, name: 'žä' },    // ዠ ዡ ዢ ዣ ዤ ዥ ዦ
    { base: 'የ', code: 0x12E8, name: 'yä' },    // የ ዩ ዪ ያ ዬ ይ ዮ
    { base: 'ደ', code: 0x12F0, name: 'dä' },    // ደ ዱ ዲ ዳ ዴ ድ ዶ
    { base: 'ዸ', code: 0x12F8, name: 'ḏä' },    // ዸ ዹ ዺ ዻ ዼ ዽ ዾ
    { base: 'ጀ', code: 0x1300, name: 'ǧä' },    // ጀ ጁ ጂ ጃ ጄ ጅ ጆ
    { base: 'ገ', code: 0x1308, name: 'gä' },    // ገ ጉ ጊ ጋ ጌ ግ ጎ
    { base: 'ጐ', code: 0x1310, name: 'gʷä' },   // ጐ ጒ ጓ ጔ ጕ (labiovelar)
    { base: 'ጘ', code: 0x1318, name: 'ǧʷä' },   // ጘ ጙ ጚ ጛ ጜ ጝ ጞ
    { base: 'ጠ', code: 0x1320, name: 'ṭä' },    // ጠ ጡ ጢ ጣ ጤ ጥ ጦ
    { base: 'ጨ', code: 0x1328, name: 'č̣ä' },    // ጨ ጩ ጪ ጫ ጬ ጭ ጮ
    { base: 'ጰ', code: 0x1330, name: 'ṗä' },    // ጰ ጱ ጲ ጳ ጴ ጵ ጶ
    { base: 'ጸ', code: 0x1338, name: 'ṣä' },    // ጸ ጹ ጺ ጻ ጼ ጽ ጾ
    { base: 'ፀ', code: 0x1340, name: 'ṣ́ä' },    // ፀ ፁ ፂ ፃ ፄ ፅ ፆ
    { base: 'ፈ', code: 0x1348, name: 'fä' },    // ፈ ፉ ፊ ፋ ፌ ፍ ፎ
    { base: 'ፐ', code: 0x1350, name: 'pä' },    // ፐ ፑ ፒ ፓ ፔ ፕ ፖ
];

// Ethiopic numbers
const geezNumbers = [
    { char: '፩', name: '1' },
    { char: '፪', name: '2' },
    { char: '፫', name: '3' },
    { char: '፬', name: '4' },
    { char: '፭', name: '5' },
    { char: '፮', name: '6' },
    { char: '፯', name: '7' },
    { char: '፰', name: '8' },
    { char: '፱', name: '9' },
    { char: '፲', name: '10' },
    { char: '፳', name: '20' },
    { char: '፴', name: '30' },
    { char: '፵', name: '40' },
    { char: '፶', name: '50' },
    { char: '፷', name: '60' },
    { char: '፸', name: '70' },
    { char: '፹', name: '80' },
    { char: '፺', name: '90' },
    { char: '፻', name: '100' },
    { char: '፼', name: '10,000' },
];

// Ethiopic Supplement characters (U+1380-U+139F) - Extended Ge'ez for scholarly/liturgical use
const geezSupplement = [
    { base: 'ᎀ', code: 0x1380, name: 'sebatbeit mwä' },   // ᎀ ᎁ ᎂ ᎃ
    { base: 'ᎄ', code: 0x1384, name: 'mwi' },             // ᎄ ᎅ ᎆ ᎇ
    { base: 'ᎈ', code: 0x1388, name: 'sebatbeit bwä' },   // ᎈ ᎉ ᎊ ᎋ
    { base: 'ᎌ', code: 0x138C, name: 'sebatbeit fwä' },   // ᎌ ᎍ ᎎ ᎏ
    { base: '᎐', code: 0x1390, name: 'sebatbeit pwä' },   // ᎐ ᎑ ᎒ ᎓
];

// Ethiopic punctuation
const geezPunctuation = [
    { char: '፡', name: 'Word separator' },
    { char: '።', name: 'Full stop' },
    { char: '፣', name: 'Comma' },
    { char: '፤', name: 'Semicolon' },
    { char: '፥', name: 'Colon' },
    { char: '፦', name: 'Preface colon' },
    { char: '፧', name: 'Question mark' },
    { char: '፨', name: 'Paragraph separator' },
    { char: '«', name: 'Left quote' },
    { char: '»', name: 'Right quote' },
    { char: ' ', name: 'Space' },
];

// State
let selectedBaseChar = null;
let currentLayout = 'fidel';

// DOM Elements
const textOutput = document.getElementById('textOutput');
const clearBtn = document.getElementById('clearBtn');
const copyBtn = document.getElementById('copyBtn');
const backspaceBtn = document.getElementById('backspaceBtn');
const baseCharacters = document.getElementById('baseCharacters');
const supplementCharacters = document.getElementById('supplementCharacters');
const numberKeys = document.getElementById('numberKeys');
const punctuationKeys = document.getElementById('punctuationKeys');
const layoutBtns = document.querySelectorAll('.layout-btn');
const vowelKeys = document.querySelectorAll('.vowel-key');

// Initialize keyboard
function init() {
    renderBaseCharacters();
    renderSupplementCharacters();
    renderNumbers();
    renderPunctuation();
    attachEventListeners();
}

// Render base characters
function renderBaseCharacters() {
    baseCharacters.innerHTML = '';
    geezCharacters.forEach(char => {
        const key = document.createElement('button');
        key.className = 'key';
        key.textContent = char.base;
        key.title = `${char.name} - Click to select base, then choose vowel form`;
        key.dataset.code = char.code;
        key.dataset.name = char.name;
        
        key.addEventListener('click', () => {
            // Remove previous selection
            document.querySelectorAll('.key.selected').forEach(k => {
                k.classList.remove('selected');
            });
            
            // Select this character
            key.classList.add('selected');
            selectedBaseChar = char;
            
            // Insert the base character directly
            insertCharacter(char.base);
        });
        
        baseCharacters.appendChild(key);
    });
}

// Render Ethiopic Supplement characters
function renderSupplementCharacters() {
    if (!supplementCharacters) return; // Element may not exist yet
    
    supplementCharacters.innerHTML = '';
    geezSupplement.forEach(char => {
        const key = document.createElement('button');
        key.className = 'key';
        key.textContent = char.base;
        key.title = `${char.name} - Click to select base, then choose vowel form`;
        key.dataset.code = char.code;
        key.dataset.name = char.name;
        
        key.addEventListener('click', () => {
            // Remove previous selection
            document.querySelectorAll('.key.selected').forEach(k => {
                k.classList.remove('selected');
            });
            
            // Select this character
            key.classList.add('selected');
            selectedBaseChar = char;
            
            // Insert the base character directly
            insertCharacter(char.base);
        });
        
        supplementCharacters.appendChild(key);
    });
}

// Render numbers
function renderNumbers() {
    numberKeys.innerHTML = '';
    geezNumbers.forEach(num => {
        const key = document.createElement('button');
        key.className = 'key';
        key.textContent = num.char;
        key.title = num.name;
        
        key.addEventListener('click', () => {
            insertCharacter(num.char);
        });
        
        numberKeys.appendChild(key);
    });
}

// Render punctuation
function renderPunctuation() {
    punctuationKeys.innerHTML = '';
    geezPunctuation.forEach(punct => {
        const key = document.createElement('button');
        key.className = 'key';
        key.textContent = punct.char;
        key.title = punct.name;
        
        key.addEventListener('click', () => {
            insertCharacter(punct.char);
        });
        
        punctuationKeys.appendChild(key);
    });
}

// Attach event listeners
function attachEventListeners() {
    // Clear button
    clearBtn.addEventListener('click', () => {
        textOutput.value = '';
        textOutput.focus();
    });
    
    // Copy button
    copyBtn.addEventListener('click', () => {
        textOutput.select();
        document.execCommand('copy');
        
        // Visual feedback
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✓ Copied!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    });
    
    // Backspace button
    backspaceBtn.addEventListener('click', () => {
        const cursorPos = textOutput.selectionStart;
        if (cursorPos > 0) {
            const text = textOutput.value;
            textOutput.value = text.slice(0, cursorPos - 1) + text.slice(cursorPos);
            textOutput.setSelectionRange(cursorPos - 1, cursorPos - 1);
        }
        textOutput.focus();
    });
    
    // Layout switching
    layoutBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const layout = btn.dataset.layout;
            switchLayout(layout);
        });
    });
    
    // Vowel form selection
    vowelKeys.forEach(key => {
        key.addEventListener('click', () => {
            const form = parseInt(key.dataset.form);
            if (selectedBaseChar) {
                const character = String.fromCodePoint(selectedBaseChar.code + form);
                insertCharacter(character);
            }
        });
    });
}

// Switch keyboard layout
function switchLayout(layout) {
    currentLayout = layout;
    
    // Update button states
    layoutBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.layout === layout) {
            btn.classList.add('active');
        }
    });
    
    // Update layout visibility
    document.querySelectorAll('.keyboard-layout').forEach(layoutDiv => {
        layoutDiv.classList.remove('active');
    });
    
    const layoutMap = {
        'fidel': 'fidelLayout',
        'supplement': 'supplementLayout',
        'numbers': 'numbersLayout',
        'punctuation': 'punctuationLayout'
    };
    
    document.getElementById(layoutMap[layout]).classList.add('active');
}

// Insert character at cursor position
function insertCharacter(char) {
    const cursorPos = textOutput.selectionStart;
    const text = textOutput.value;
    const newText = text.slice(0, cursorPos) + char + text.slice(textOutput.selectionEnd);
    textOutput.value = newText;
    
    // Move cursor after inserted character
    const newCursorPos = cursorPos + char.length;
    textOutput.setSelectionRange(newCursorPos, newCursorPos);
    textOutput.focus();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);
