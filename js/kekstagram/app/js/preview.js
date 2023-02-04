import { generateMockPosts } from './generate-mock-data.js';
import { postsSum } from './mock.js';

const previewTemplate = document.querySelector('#picture').content;
const prewiewNewTemplate = previewTemplate.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

const getPreviewTemplate = (post) => {
  const preview = prewiewNewTemplate.cloneNode(true);
  preview.querySelector('.picture__img').src = post.url;
  preview.querySelector('.picture__img').alt = post.description;
  preview.querySelector('.picture__likes').textContent = post.likes;

  let numCommemts = 0;
  if ( post.comments !== undefined ) {
    numCommemts = (post.comments).length;
  }
  preview.querySelector('.picture__comments').textContent = numCommemts;
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
