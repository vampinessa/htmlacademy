import { onCanselImgButtonClick, onImgUploadEscKeydown } from './modal.js';
import { onDecreaseButtonClick, onIncreaseButtonClick } from './img-scale.js';
import { onImgUploadClick, onImgUploadEnterKeydown } from './modal.js';
import { onEffectClick } from './effects.js';
import { validateHashtagInput, validateForm } from './validators.js';

const uploadImgForm = document.querySelector('.img-upload__form');
const imgUpload = uploadImgForm.querySelector('.img-upload__start');
const editImg = uploadImgForm.querySelector('.img-upload__overlay');
const imgScale = editImg.querySelector('.scale__control--value');
const canselUploadButton = editImg.querySelector('#upload-cancel');
const decreaseButton = editImg.querySelector('.scale__control--smaller');
const increaseButton = editImg.querySelector('.scale__control--bigger');
const effectList = editImg.querySelectorAll('.effects__radio');
const submitUploadButton = uploadImgForm.querySelector('.img-upload__submit');
const hashtagInput = editImg.querySelector('.text__hashtags');

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
  submitUploadButton.addEventListener('click', validateForm);
  editImg.classList.remove('hidden');
};

const closeImgPreview = () => {
  editImg.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  uploadImgForm.querySelector('#upload-file').textContent = '';
  decreaseButton.removeEventListener('click', onDecreaseButtonClick);
  increaseButton.removeEventListener('click', onIncreaseButtonClick);
  canselUploadButton.removeEventListener('click', onCanselImgButtonClick);
  document.removeEventListener('keydown', onImgUploadEscKeydown);
  effectList.forEach((item) => {
    item.removeEventListener('click', onEffectClick);
  });
  hashtagInput.removeEventListener('input', validateHashtagInput);
  submitUploadButton.removeEventListener('click', validateForm);
};

const getEditImgForm = () => {
  onImgUploadClick();
  onImgUploadEnterKeydown();
};

export { imgUpload, editImg, imgScale, effectList, hashtagInput, openImgPreview, closeImgPreview, getEditImgForm };
