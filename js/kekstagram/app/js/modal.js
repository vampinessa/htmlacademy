import { isEscEvent, isEnterEvent } from './util.js';
import { closeBigPic } from './fullview.js';
import { openBigPic } from './preview.js';
import { imgUpload, openImgPreview, closeImgPreview } from './edit-img.js';

const onPreviewEnterKeydown = (evt) => {
  if (isEnterEvent(evt)) {
    evt.preventDefault();
    openBigPic();
  }
};

const onBigPicEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeBigPic();
  }
};

const onBigPicCloseClick = (evt) => {
  evt.preventDefault();
  closeBigPic();
};

const onImgUploadClick = () => {
  imgUpload.addEventListener('click', (evt) => {
    evt.preventDefault();
    openImgPreview();
  });
};

const onImgUploadEnterKeydown = () => {
  imgUpload.addEventListener('keydown', (evt) => {
    if (isEnterEvent(evt)) {
      evt.preventDefault();
      openImgPreview();
    }
  });
};

const onCanselImgButtonClick = (evt) => {
  evt.preventDefault();
  closeImgPreview();
};

const onImgUploadEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeImgPreview();
  }
};

export { onPreviewEnterKeydown, onBigPicEscKeydown, onBigPicCloseClick, onImgUploadClick, onImgUploadEnterKeydown, onCanselImgButtonClick, onImgUploadEscKeydown };
