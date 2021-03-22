# 𝕌ℕ𝕀ℂ𝕆𝔻𝔼 𝓯𝓸𝓻𝓶𝓪𝓽𝓽𝓮𝓻

Format your text with Unicode characters.

Unicode-formatter converts your text into the different styles supported in the unicode character set.

normal:abc

bold: 𝐚𝐛𝐜

italic: 𝑎𝑏𝑐

boldItalic: 𝒂𝒃𝒄

sans: 𝖺𝖻𝖼

sansBold: 𝗮𝗯𝗰

sansItalic: 𝘢𝘣𝘤

sansBoldItalic: 𝙖𝙗𝙘

script: 𝒶𝒷𝒸

scriptBold: 𝓪𝓫𝓬

fraktur: 𝔞𝔟𝔠

frakturBold: 𝖆𝖇𝖈

monospace: 𝚊𝚋𝚌

doublestruck: 𝕒𝕓𝕔

circled: ⓐⓑⓒ

inverseCircled: 🅐🅑🅒 (Caps Only)

squared: 🄰🄱🄲 (Caps Only)


## Usage
~~~javascript
const text = 'Hello World!';
const style = 'script'
const formatted = format(text, style) // ℋℯ𝓁𝓁ℴ 𝒲ℴ𝓇𝓁𝒹!
~~~
