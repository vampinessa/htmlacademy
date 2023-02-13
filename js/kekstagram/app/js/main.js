import { displayPostPreview } from './preview.js';
import { isEscEvent } from './util.js';
import { closeBigPic } from './fullview.js';

const onBigPicEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeBigPic();
  }
};

displayPostPreview();

export { onBigPicEscKeydown} ;
