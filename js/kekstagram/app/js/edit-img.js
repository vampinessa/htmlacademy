import { onCanselImgButtonClick, onImgUploadEscKeydown } from './modal.js';

const uploadImgForm = document.querySelector('.img-upload__form');
const editImg = uploadImgForm.querySelector('.img-upload__overlay');
const imgUpload = uploadImgForm.querySelector('.img-upload__start');
const canselUploadButton = editImg.querySelector('#upload-cancel');

const openImgPreview = () => {
  document.querySelector('body').classList.add('modal-open');
  editImg.classList.remove('hidden');
};

const closeImgPreview = () => {
  document.querySelector('body').classList.remove('modal-open');
  // canselUploadButton.removeEventListener('click', onCanselImgButtonClick);
  // document.removeEventListener('keydown', onImgUploadEscKeydown);
  editImg.classList.add('hidden');
};

const renderEditImgForm = () => {
  canselUploadButton.addEventListener('click', onCanselImgButtonClick);
  document.addEventListener('keydown', onImgUploadEscKeydown);
};

export { imgUpload, openImgPreview, closeImgPreview, renderEditImgForm };
