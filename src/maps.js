import unicodeSplit from './unicodeSplit';
import formats from './formats';

const formatArrays = {};

Object.keys(formats).forEach((key) => {
  formatArrays[key] = unicodeSplit(formats[key]);
});

const mapToNormal = {};
const mapToFormat = {};
const normal = unicodeSplit(formats.normal);

Object.values(formatArrays).forEach((alphabet) => {
  alphabet.forEach((l, i) => {
    mapToNormal[l] = normal[i];
  });
});

Object.entries(formatArrays).forEach(([key, alphabet]) => {
  mapToFormat[key] = {};
  alphabet.forEach((l, i) => {
    mapToFormat[key][normal[i]] = l;
  });
});

export { mapToNormal, mapToFormat };
