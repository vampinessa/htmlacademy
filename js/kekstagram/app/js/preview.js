import { generateMockPosts } from './generate-mock-data.js';
import { postsSum } from './mock.js';
import { renderBigPic , bigPic} from './fullview.js';
import { onBigPicEscKeydown, onPreviewEnterKeydown } from './keydown.js';

const previewTemplate = document.querySelector('#picture').content;

const openBigPic = (post) => {
  bigPic.classList.remove('hidden');
  renderBigPic(post);
  document.removeEventListener('keydown', onPreviewEnterKeydown);
};

const getPreviewTemplate = (post) => {
  const preview = previewTemplate.querySelector('.picture').cloneNode(true);
  preview.querySelector('.picture__img').src = post.url;
  preview.querySelector('.picture__img').alt = post.description;
  preview.querySelector('.picture__likes').textContent = post.likes;

  let numCommemts = 0;
  if ( post.comments !== undefined ) {
    numCommemts = (post.comments).length;
  }
  preview.querySelector('.picture__comments').textContent = numCommemts;
  preview.addEventListener('click', (evt) => {
    evt.preventDefault();
    openBigPic(post);
    document.addEventListener('keydown', onBigPicEscKeydown);
    document.addEventListener('keydown', onPreviewEnterKeydown(post));
  });
  return preview;
};

const displayPostPreview = () => {
  const posts = generateMockPosts(postsSum);
  const previewTemplateFragment = document.createDocumentFragment();
  posts.forEach((post) => {
    previewTemplateFragment.appendChild(getPreviewTemplate(post));
  });
  document.querySelector('.pictures').appendChild(previewTemplateFragment);
};

export { displayPostPreview , openBigPic};

