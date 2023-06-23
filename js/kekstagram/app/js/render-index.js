import { generateMockPosts } from './generate-mock-data.js';
import { POST_QUANTITY } from './constants.js';
import { displayPostPreview } from './preview.js';
import { imgUpload, openImgPreview } from './edit-img.js';
import { isEnterEvent } from './util.js';

const renderIndexPage = () => {
  const mockPosts = generateMockPosts(POST_QUANTITY);
  displayPostPreview(mockPosts);
  imgUpload.addEventListener('click', openImgPreview);
  document.querySelector('.img-upload__start').addEventListener('keydown', (evt) => {
    if (isEnterEvent(evt)) {
      openImgPreview();
    }
  });
};

export { renderIndexPage };
