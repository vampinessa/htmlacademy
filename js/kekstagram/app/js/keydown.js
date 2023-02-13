import { isEnterEvent, isEscEvent } from './util.js';
import { closeBigPic } from './fullview.js';
import { openBigPic} from './preview.js';

const onBigPicEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeBigPic();
  }
};

const onPreviewEnterKeydown = (evt) => {
  if (isEnterEvent(evt)) {
    evt.preventDefault();
    openBigPic();
  }
};

export { onBigPicEscKeydown, onPreviewEnterKeydown};
