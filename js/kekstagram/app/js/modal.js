import { isEscEvent, isEnterEvent } from './util.js';
import { closeBigPic } from './fullview.js';
import { openBigPic } from './preview.js';
import { closeImgPreview, hashtagInput } from './edit-img.js';

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

const onHashtagKeydown = (evt) => {
  if (isEnterEvent(evt)) {
    evt.preventDefault();
    (hashtagInput.nextElementSibling).focus();
  }
  if (isEscEvent(evt)) {
    evt.stopPropagation();
  }
};

const onDescriptionKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.stopPropagation();
  }
};

export { onPreviewEnterKeydown, onBigPicEscKeydown, onBigPicCloseClick, onCanselImgButtonClick, onImgUploadEscKeydown, onDescriptionKeydown, onHashtagKeydown };
