import { onCanselImgButtonClick, onImgUploadEscKeydown } from './modal.js';
import { onDecreaseButtonClick, onIncreaseButtonClick } from './img-scale.js';
import { onHashtagKeydown, onDescriptionKeydown } from './modal.js';
import { onEffectClick } from './effects.js';
import { DESCRIPTION_LENGTH } from './constants.js';
import { validateHashtagInput, validateDescription, validateHashtags,  onDescriptionInputFocus, onDescriptionInputBlur } from './validators.js';

const uploadImgForm = document.querySelector('.img-upload__form');
const imgUpload = uploadImgForm.querySelector('.img-upload__control');
const editImg = uploadImgForm.querySelector('.img-upload__overlay');
const imgScale = editImg.querySelector('.scale__control--value');
const canselUploadButton = editImg.querySelector('#upload-cancel');
const decreaseButton = editImg.querySelector('.scale__control--smaller');
const increaseButton = editImg.querySelector('.scale__control--bigger');
const effectList = editImg.querySelectorAll('.effects__radio');
const submitUploadButton = uploadImgForm.querySelector('.img-upload__submit');
const hashtagInput = editImg.querySelector('.text__hashtags');
const descriptionInput = editImg.querySelector('.text__description');
const descriptionTextCount = editImg.querySelector('.text-description__count');


const openImgPreview = () => {
  editImg.querySelector('.img-upload__effect-level').classList.add('hidden');
  document.querySelector('body').classList.add('modal-open');
  canselUploadButton.addEventListener('click', onCanselImgButtonClick);
  document.addEventListener('keydown', onImgUploadEscKeydown);
  decreaseButton.addEventListener('click', onDecreaseButtonClick);
  increaseButton.addEventListener('click', onIncreaseButtonClick);
  effectList.forEach((item) => {
    item.addEventListener('click', onEffectClick);
  });
  hashtagInput.addEventListener('input', validateHashtagInput);
  hashtagInput.addEventListener('keydown', onHashtagKeydown);
  descriptionInput.addEventListener ('keydown', onDescriptionKeydown);
  descriptionInput.addEventListener('focus', onDescriptionInputFocus);
  descriptionInput.addEventListener('input', validateDescription);
  submitUploadButton.addEventListener('click', validateHashtags);
  editImg.classList.remove('hidden');
};

const closeImgPreview = () => {
  uploadImgForm.querySelector('#upload-file').value = '';
  hashtagInput.value = '';
  descriptionInput.value = '';
  descriptionTextCount.textContent = `Осталось символов: ${DESCRIPTION_LENGTH}`;
  descriptionTextCount.style.color = '';
  editImg.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');

  decreaseButton.removeEventListener('click', onDecreaseButtonClick);
  increaseButton.removeEventListener('click', onIncreaseButtonClick);
  canselUploadButton.removeEventListener('click', onCanselImgButtonClick);
  document.removeEventListener('keydown', onImgUploadEscKeydown);
  effectList.forEach((item) => {
    item.removeEventListener('click', onEffectClick);
  });
  hashtagInput.removeEventListener('input', validateHashtagInput);
  hashtagInput.removeEventListener('keydown', onHashtagKeydown);
  descriptionInput.removeEventListener ('keydown', onDescriptionKeydown);
  descriptionInput.removeEventListener('focus', onDescriptionInputFocus);
  descriptionInput.removeEventListener('input', validateDescription);
  descriptionInput.removeEventListener('blur', onDescriptionInputBlur);
  submitUploadButton.removeEventListener('click', validateHashtags);
};

export { imgUpload, editImg, imgScale, effectList, hashtagInput, descriptionInput, descriptionTextCount, openImgPreview, closeImgPreview, };
