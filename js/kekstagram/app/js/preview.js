import { renderBigPic , bigPic } from './fullview.js';
import { onPreviewEnterKeydown } from './modal.js';

const previewTemplate = document.querySelector('#picture').content;


const openBigPic = (post) => {
  document.querySelector('body').classList.add('modal-open');
  renderBigPic(post);
  bigPic.classList.remove('hidden');
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
  });

  preview.addEventListener('keydown', onPreviewEnterKeydown(post));
  return preview;
};

const displayPostPreview = (posts) => {
  const previewTemplateFragment = document.createDocumentFragment();
  posts.forEach((post) => {
    previewTemplateFragment.appendChild(getPreviewTemplate(post));
  });
  document.querySelector('.pictures').appendChild(previewTemplateFragment);
};

export { displayPostPreview , openBigPic};
