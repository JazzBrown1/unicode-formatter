import { mapToNormal, mapToFormat } from './maps';
// import { mapToNormal, mapToFormat } from './mapsComputed';
import unicodeSplit from './unicodeSplit';

const format = (text, font) => {
  if (!font || !mapToFormat[font]) throw new Error('Unknown font');
  if (typeof text !== 'string') throw new Error('Text arg must be a string');

  const charMap = mapToFormat[font];

  return unicodeSplit(text).map((c) => charMap[mapToNormal[c]] || c).join('');
};

export default format;
