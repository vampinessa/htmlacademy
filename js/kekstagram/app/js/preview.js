import { generateMockPosts } from './generate-mock-data.js';
import { postsSum } from './mock.js';
import { renderBigPic } from './fullview.js';
import { onBigPicEscKeydown } from './main.js';

const previewTemplate = document.querySelector('#picture').content;
const previewPic = previewTemplate.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

const openBigPic = (post) => {
  renderBigPic(post);
};

const getPreviewTemplate = (post) => {
  const preview = previewPic.cloneNode(true);
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
  });
  return preview;
};

const displayPostPreview = () => {
  const posts = generateMockPosts(postsSum);
  const previewTemplateFragment = document.createDocumentFragment();
  posts.forEach((post) => {
    previewTemplateFragment.appendChild(getPreviewTemplate(post));
  });
  picturesContainer.appendChild(previewTemplateFragment);
};

export { displayPostPreview };
