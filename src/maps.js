import unicodeSplit from './unicodeSplit';
import formats from './formats';

Object.entries(formats).forEach(([k, val]) => {
  if (unicodeSplit(val).length !== 62) throw Error(`wrong len$ ${k} ${unicodeSplit(val).length}`);
});

const formatArrays = {};

Object.keys(formats).forEach((key) => {
  formatArrays[key] = unicodeSplit(formats[key]);
});

const maps = {};

Object.keys(formats).forEach((key) => {
  const alph = unicodeSplit(formats[key]);
  const ref = {};
  Object.values(formatArrays).forEach((alphabet) => {
    alphabet.forEach((l, i) => {
      ref[l] = alph[i];
    });
  });
  maps[key] = ref;
});

export default maps;
