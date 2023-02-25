import { onCanselImgButtonClick, onImgUploadEscKeydown } from './modal.js';
import { onDecreaseButtonClick, onIncreaseButtonClick } from './img-scale.js';
import { onImgUploadClick, onImgUploadEnterKeydown } from './modal.js';

const uploadImgForm = document.querySelector('.img-upload__form');
const imgUpload = uploadImgForm.querySelector('.img-upload__start');
const editImg = uploadImgForm.querySelector('.img-upload__overlay');
const imgScale = editImg.querySelector('.scale__control--value');
const canselUploadButton = editImg.querySelector('#upload-cancel');
const decreaseButton = editImg.querySelector('.scale__control--smaller');
const increaseButton = editImg.querySelector('.scale__control--bigger');

const openImgPreview = () => {
  document.querySelector('body').classList.add('modal-open');
  imgScale.value = '100%';
  canselUploadButton.addEventListener('click', onCanselImgButtonClick);
  document.addEventListener('keydown', onImgUploadEscKeydown);
  decreaseButton.addEventListener('click', onDecreaseButtonClick);
  increaseButton.addEventListener('click', onIncreaseButtonClick);
  editImg.classList.remove('hidden');
};

const closeImgPreview = () => {
  document.querySelector('body').classList.remove('modal-open');
  uploadImgForm.querySelector('#upload-file').textContent = '';
  decreaseButton.removeEventListener('click', onDecreaseButtonClick);
  increaseButton.removeEventListener('click', onIncreaseButtonClick);
  canselUploadButton.removeEventListener('click', onCanselImgButtonClick);
  document.removeEventListener('keydown', onImgUploadEscKeydown);
  editImg.classList.add('hidden');
};

const getEditImgForm = () => {
  onImgUploadClick();
  onImgUploadEnterKeydown();
};

export { imgUpload, editImg, imgScale, openImgPreview, closeImgPreview, getEditImgForm };
