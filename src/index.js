// import maps from './maps';
import maps from './mapsComputed';
import unicodeSplit from './unicodeSplit';

const format = (text, font) => {
  if (!font || !maps[font]) throw new Error('Unknown font');
  if (typeof text !== 'string') throw new Error('Text arg must be a string');

  const charMap = maps[font];

  return unicodeSplit(text).map((c) => charMap[c] || c).join('');
};

export default format;

console.log(format('𝓱𝓮𝓵𝓵𝓸', 'normal'));
console.log(format('HELLO', 'script'));

console.log(format('𝓱-𝓮-𝓵-𝓵-𝓸', 'sansItalic'));
console.log(format('HELLO', 'scriptBold'));

console.log(format('𝓱𝓮𝓵𝓵𝓸 𝔥𝔢𝔩𝔩𝔬!', 'fraktur'));
console.log(format('HELLO', 'doublestruck'));
