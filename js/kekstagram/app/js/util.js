import { Keys, ImgType } from './constants.js';

const getPositiveInt = (num) => Math.trunc(Math.abs(num));

const getRandomInt = (num1, num2) => {
  const max = Math.max(getPositiveInt(num1), getPositiveInt(num2));
  const min = Math.min(getPositiveInt(num1), getPositiveInt(num2));
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getUrl = (type, number) => {
  if (type === ImgType.AVATAR) {
    return `img/avatar-${number}.svg`;
  }
  return `photos/${number}.jpg`;
};

const isStringLength = (string, length) => (string.length < length);

const isEscEvent = (evt) => evt.key === Keys.ESCAPE || evt.key === Keys.ESC;

const isEnterEvent = (evt) => evt.key === Keys.ENTER;

const deleteClass = (element, elentClass) => {
  const classes = element.className.split(/\s+/);
  for (const c of classes) {
    if (c.includes(elentClass)) {
      element.classList.remove(c);
    }
  }
};

const isAphabetAndNumber = (string) => (/^[a-zA-Z0-9А-Яа-я]+$/.test(string));

const findDuplicates = (arr) => {
  const filtered = arr.filter((item, index) => arr.indexOf(item) !== index);
  return [...new Set(filtered)];
};

export { getPositiveInt, getRandomInt, getUrl, isStringLength, isEnterEvent, isEscEvent, deleteClass, isAphabetAndNumber, findDuplicates, };
