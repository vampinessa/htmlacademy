import { isStringLength, isAphabetAndNumber, findDuplicates } from './util.js';
import { hashtagInput, descriptionInput, descriptionTextCount } from './edit-img.js';
import { DESCRIPTION_LENGTH } from './constants.js';
// import { onDescriptionInputBlur } from './modal.js';

const checkInvalidHashtags = (hashtagsArray) => {
  let messages = '';
  hashtagsArray.forEach((hashtag) => {
    if (hashtag[0] !== '#') {
      messages += `${hashtag} Хэш-тег должен начинаеться с символа # (решётка) \n`;
    }
    if (hashtag === '#') {
      messages += 'Хэш-тег не может состоять только из одной решётки \n';
    }
    if (!isStringLength(hashtag, 20)) {
      messages += `${hashtag} - максимальная длина одного хэш-тега 20 символов, включая решётку \n`;
    }
    if (!isAphabetAndNumber(hashtag.slice(1,))) {
      messages += `${hashtag} - хэш-теги разделяются пробелами и должны состоять только из букв и чисел \n`;
    }
  });
  return messages;
};

const checkHashtagsDuplicate = (hashtagsArray) => {
  const uniqueArray = Array.from(new Set(hashtagsArray));
  let message = '';
  if (hashtagsArray.length !== uniqueArray.length) {
    const duplicates = findDuplicates(hashtagsArray).join(' ');
    message = `${duplicates} Хэш-теги нечувствительны к регистру и не могут быть использован дважды, дубликаты будут удалены \n`;
  }
  return message;
};

const checkHashtagsLength = (hashtagsArray) => {
  let message = '';
  if (hashtagsArray.length > 5) {
    message = `Вы не можете указать больше 5 хештегов, удалите ${hashtagsArray.length - 5} \n`;
  }
  return message;
};

const validateHashtagInput = () => {
  if (hashtagInput.value) {
    const hashtags = ((hashtagInput.value).trim()).replace(/ +/g, ' ').trim().toLowerCase().split(' ');
    const messages = checkInvalidHashtags(hashtags) + checkHashtagsDuplicate(hashtags) + checkHashtagsLength(hashtags);
    hashtagInput.setCustomValidity(messages);
  } else {
    hashtagInput.setCustomValidity('');
  }
  hashtagInput.reportValidity();
};

const validateHashtags = () => {
  let hashtags;
  if (hashtagInput.value) {
    let messages = '';
    hashtags = ((hashtagInput.value).trim()).replace(/ +/g, ' ').trim().toLowerCase().split(' ');
    const newHashtags = Array.from(new Set(hashtags));
    if (checkHashtagsDuplicate(hashtags)){
      messages += checkHashtagsDuplicate(hashtags);
      hashtags = newHashtags;
    }
    if (checkHashtagsLength(hashtags)){
      messages += checkHashtagsLength(hashtags);
    }
    if (checkInvalidHashtags(hashtags)) {
      messages += checkInvalidHashtags(hashtags);
    }
    hashtagInput.setCustomValidity(messages);
    hashtagInput.value = hashtags.join(' ');
  } else {
    hashtagInput.setCustomValidity('');
  }
  hashtagInput.reportValidity();
};

const onDescriptionInputFocus = () => {
  descriptionTextCount.style.display = 'block';
};

const onDescriptionInputBlur = () => {
  descriptionTextCount.style.display = 'none';
};

const validateDescription = () => {
  const currentDiscriptionLenght = DESCRIPTION_LENGTH - (descriptionInput.value).length;
  descriptionInput.addEventListener('blur', onDescriptionInputBlur);
  descriptionTextCount.textContent = `Осталось символов: ${currentDiscriptionLenght}`;
  if (currentDiscriptionLenght === 0) {
    descriptionTextCount.style.color = 'red';
  } else {
    descriptionTextCount.style.color = '';
  }
};

export { validateHashtagInput, validateDescription, validateHashtags,  onDescriptionInputFocus, onDescriptionInputBlur };
