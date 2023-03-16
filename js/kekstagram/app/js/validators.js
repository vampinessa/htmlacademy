import { isStringLength, isAphabetAndNumber } from './util.js';
import { hashtagInput } from './edit-img.js';

const getInvalidHashtagMessage = (hashtag) => {
  let message = '';
  if (hashtag[0] !== '#') {
    message = `${hashtag} Хэш-тег должен начинаеться с символа # (решётка) \n`;
  }
  if (hashtag === '#') {
    message = 'Хэш-тег не может состоять только из одной решётки \n';
  }
  if (!isStringLength(hashtag, 20)) {
    message = `${hashtag} - максимальная длина одного хэш-тега 20 символов, включая решётку \n`;
  }
  if (!isAphabetAndNumber(hashtag.slice(1,))) {
    message = `${hashtag} - хэш-теги разделяются пробелами и должны состоять только из букв и чисел \n`;
  }
  return message;
};

const validateHashtagInput = () => {
  const hashtags = (hashtagInput.value).trim().toLowerCase().split(' ');
  hashtags.forEach((hashtag) => {
    const message = getInvalidHashtagMessage(hashtag);
    if(message) {
      hashtagInput.setCustomValidity(message);
    } else {
      hashtagInput.setCustomValidity('');
    }
    hashtagInput.reportValidity();
  });
};

const validateHashtags = () => {
  let hashtagList = ((hashtagInput.value).trim()).replace(/ +/g, ' ').trim().toLowerCase().split(' ');
  const uniqueList = Array.from(new Set(hashtagList));
  let messages = '';

  if (hashtagList.length > 5) {
    messages += 'Вы не можете указать больше 5 хештегов \n';
  }
  if (hashtagList.length !== uniqueList.length){
    messages += 'Хэш-теги нечувствительны к регистру и не могут быть использован дважды, дубликаты будут удалены \n';
    hashtagList = uniqueList;
  }
  hashtagList.forEach((hashtag) => {
    const message = getInvalidHashtagMessage(hashtag);
    if (message) {
      messages += message;
    }
  });
  if (messages) {
    hashtagInput.setCustomValidity(messages);
  } else {
    hashtagInput.setCustomValidity('');
  }
  hashtagInput.reportValidity();
  hashtagInput.value = hashtagList.join(' ');
};

const validateForm = () => {
  validateHashtags();
};

export { validateHashtagInput, validateForm };
