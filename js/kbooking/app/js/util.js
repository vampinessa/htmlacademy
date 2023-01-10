function getPositiveInt(num) {
  return Math.trunc(Math.abs(num));
}

function getRandomInt(num1, num2) {
  const MAX = Math.max(getPositiveInt(num1), getPositiveInt(num2));
  const MIN = Math.min(getPositiveInt(num1), getPositiveInt(num2));
  return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
}

function getRandomFloat(num1, num2, lengthAfterDot) {
  const MAX = Math.max(Math.abs(num1), Math.abs(num2));
  const MIN = Math.min(Math.abs(num1), Math.abs(num2));
  return (Math.random() * (MAX - MIN) + MIN).toFixed(lengthAfterDot);
}

function getRandomArray(array) {
  const NewArray = [];
  const NewArrayLength = getRandomInt(0, array.length);
  let item;
  for (let i = 0; i < NewArrayLength; i++) {
    do {
      item = array[getRandomInt(0, array.length - 1)];
    } while (NewArray.includes(item) === true);
    NewArray.push(item);
  }
  return NewArray;
}

function getAvatar(id) {
  if (id) {
    return `img/avatars/user0${  id  }.png`;
  } else {
    return 'img/avatars/default.png';
  }
}

export { getPositiveInt, getRandomInt, getRandomFloat, getRandomArray, getAvatar};
