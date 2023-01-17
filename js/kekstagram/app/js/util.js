const getPositiveInt = (num) => Math.trunc(Math.abs(num));

const getRandomInt = (num1, num2) => {
  const max = Math.max(getPositiveInt(num1), getPositiveInt(num2));
  const min = Math.min(getPositiveInt(num1), getPositiveInt(num2));
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getUrl = (type, number) => {
  if (type === 'avatar') {
    return `img/avatar-${  number  }.svg`;
  }
  return `photos/${  number  }.jpg`;
};

const isStringLength = (string, length) => (string.length < length);

export { getPositiveInt, getRandomInt, getUrl, isStringLength };
