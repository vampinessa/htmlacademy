import { isEscEvent, isEnterEvent } from './util.js';
import { closeBigPic } from './fullview.js';
import { openBigPic } from './preview.js';

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

export { onPreviewEnterKeydown, onBigPicEscKeydown, onBigPicCloseClick };
