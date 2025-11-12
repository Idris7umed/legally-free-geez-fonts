# ግእዝ ቁልፍ ሰሌዳ - Geez Virtual Keyboard

A web-based virtual keyboard for typing in the Geez (Ge'ez) script with complete support for Eritrean languages (Tigrinya and Tigre) and Ethiopian languages (Amharic, Ge'ez, and others). This keyboard includes all standard Ge'ez characters, labialized forms, and extended characters for scholarly use.

## Features

- **Complete Geez Character Set**: All 39 standard base characters (consonants) with their 7 vowel forms
- **Labialized Forms**: Includes ቈ (qʷä), ኈ (ḫʷä), ጐ (gʷä), and ጘ (ǧʷä) - essential for Tigrinya and Ge'ez
- **Additional Characters**: Includes ዸ (ḏä) used in various dialects
- **Ethiopic Supplement**: Extended characters (U+1380-U+139F) for scholarly and liturgical texts
- **Ethiopic Numbers**: Traditional Ethiopic numeral system (፩-፼)
- **Punctuation Marks**: Ethiopic-specific punctuation including word separator (፡), full stop (።), comma (፣), etc.
- **Easy to Use**: Click-based interface for selecting characters
- **Vowel Form Selection**: Choose a base character, then select the vowel form to create the complete character
- **Copy to Clipboard**: One-click copy functionality
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **No Installation Required**: Works directly in any modern web browser

## Usage

### Online Access

Simply open `index.html` in your web browser to start using the keyboard.

### How to Type

#### Method 1: Base + Vowel
1. Click on a base character (consonant) from the grid
2. Click on the desired vowel form (ግዕዝ, ካዕብ, ሣልስ, etc.)
3. The complete character will be inserted into the text area

#### Method 2: Direct Input
1. Click directly on any character button to insert it immediately

### Layout Tabs

- **Fidel (ፊደል)**: Main character set with all standard consonants and vowel forms, including labialized forms
- **Extended (ተወሳኺ)**: Ethiopic Supplement characters for advanced scholarly and liturgical use
- **Numbers (ቁጥሮች)**: Ethiopic numerals from 1 to 10,000
- **Punctuation (ስርዓተ ነጥብ)**: Punctuation marks and symbols

### Controls

- **Clear**: Clears all text from the output area
- **Copy Text**: Copies the text to your clipboard
- **Backspace**: Deletes the last character

## Character Reference

### The Seven Vowel Forms (Orders)

Each Geez character has seven forms based on the vowel:

1. **ግዕዝ (Gəʿəz)** - First form (ə) - Example: ሀ ለ መ ረ
2. **ካዕብ (Kaʿəb)** - Second form (u) - Example: ሁ ሉ ሙ ሩ
3. **ሣልስ (Śalləs)** - Third form (i) - Example: ሂ ሊ ሚ ሪ
4. **ራብዕ (Rabəʿ)** - Fourth form (a) - Example: ሃ ላ ማ ራ
5. **ኃምስ (Ḫamməs)** - Fifth form (e/ē) - Example: ሄ ሌ ሜ ሬ
6. **ሳድስ (Sadəs)** - Sixth form (ə/i) - Example: ህ ል ም ር
7. **ሳብዕ (Sabəʿ)** - Seventh form (o) - Example: ሆ ሎ ሞ ሮ

### Base Characters (Consonants)

The keyboard includes all standard Geez base characters, including important additions for Eritrean languages:

**Standard bases (39 characters):**
```
ሀ ለ ሐ መ ሠ ረ ሰ ሸ ቀ ቈ በ ቨ ተ ቸ ኀ ኈ ነ ኘ አ ከ ኸ ወ ዐ ዘ ዠ የ ደ ዸ ጀ ገ ጐ ጘ ጠ ጨ ጰ ጸ ፀ ፈ ፐ
```

**Key additions for Tigrinya and Tigre:**
- **ኈ** (U+1288) - ḫʷä (labialized ḫ)
- **ጐ** (U+1310) - gʷä (labialized g)
- **ጘ** (U+1318) - ǧʷä (labialized ǧ)
- **ዸ** (U+12F8) - ḏä (emphatic d)

### Ethiopic Numbers

```
፩ (1)    ፪ (2)    ፫ (3)    ፬ (4)    ፭ (5)
፮ (6)    ፯ (7)    ፰ (8)    ፱ (9)    ፲ (10)
፳ (20)   ፴ (30)   ፵ (40)   ፶ (50)   ፷ (60)
፸ (70)   ፹ (80)   ፺ (90)   ፻ (100)  ፼ (10,000)
```

### Ethiopic Supplement Characters

The Extended tab includes scholarly characters from the Ethiopic Supplement block (U+1380-U+139F):

```
ᎀ ᎁ ᎂ ᎃ ᎄ ᎅ ᎆ ᎇ ᎈ ᎉ ᎊ ᎋ ᎌ ᎍ ᎎ ᎏ ᎐ ᎑ ᎒ ᎓
```

These characters are used primarily in scholarly editions of classical Ge'ez texts and liturgical manuscripts.

### Punctuation Marks

- **፡** - Word separator (used between words)
- **።** - Full stop (sentence terminator)
- **፣** - Comma
- **፤** - Semicolon
- **፥** - Colon
- **፦** - Preface colon
- **፧** - Question mark
- **፨** - Paragraph separator

## Font Compatibility

This keyboard generates Unicode characters in the Ethiopic Unicode block (U+1200–U+137F). For proper display, you need a font that supports Geez script:

### Recommended Fonts (Free)

- **Noto Sans Ethiopic** (Google)
- **Abyssinica SIL** (SIL International)
- **Nyala** (Microsoft Windows)

You can find many free Geez fonts in the parent repository: [Legally Free Geez Fonts](https://github.com/geezorg/legally-free-geez-fonts)

## Technical Details

### Unicode Ranges

- **Ethiopic**: U+1200–U+137F
- **Ethiopic Supplement**: U+1380–U+139F
- **Ethiopic Extended**: U+2D80–U+2DDF
- **Ethiopic Extended-A**: U+AB00–U+AB2F

### Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

### Files

- `index.html` - Main HTML structure
- `keyboard.css` - Styling and layout
- `keyboard.js` - Keyboard functionality and character mappings

## Integration

You can embed this keyboard in your own website:

```html
<iframe src="path/to/keyboard/index.html" width="100%" height="800px"></iframe>
```

Or use the JavaScript functions programmatically:

```javascript
// Insert a character
insertCharacter('ሀ');

// Get the Geez character for a base + vowel form
const character = String.fromCodePoint(0x1200 + vowelForm);
```

## Contributing

Contributions are welcome! If you find bugs or have suggestions for improvements:

1. Open an issue on GitHub
2. Submit a pull request with your changes

## License

This keyboard tool is part of the Legally Free Geez Fonts project and is released under the same open-source license.

## About Geez Script

Geez (ግእዝ, Gəʿəz) is an ancient South Semitic script that originated in the Kingdom of Aksum (present-day Ethiopia and Eritrea). It's an abugida writing system where each character represents a consonant with a vowel modification. The script is used to write:

- **Tigrinya** (ትግርኛ) - Official language of Eritrea and spoken in northern Ethiopia
- **Tigre** (ትግረ) - Spoken in Eritrea
- **Amharic** (አማርኛ) - Official language of Ethiopia
- **Ge'ez** (ግእዝ) - Ancient liturgical language
- And several other languages in the region

This keyboard provides complete support for all these languages, with particular attention to Eritrean language requirements including all necessary labialized forms and extended characters.

## Resources

- [Unicode Ethiopic Script](https://unicode.org/charts/PDF/U1200.pdf)
- [Gallery of Ethiopic Fonts](https://fonts.geez.org)
- [Legally Free Geez Fonts Repository](https://github.com/geezorg/legally-free-geez-fonts)

## Support

For issues or questions, please open an issue in the GitHub repository.

---

**ስብሐት፡ለእግዚአብሔር።** (Glory to God.)
