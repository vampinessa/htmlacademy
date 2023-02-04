import { generateMockPosts } from './generate-mock-data.js';
import { postsSum } from './mock.js';

const previewTemplate = document.querySelector('#picture').content;
const prewiewNewTemplate = previewTemplate.querySelector('.picture');


const picturesContainer = document.querySelector('.pictures');

const getPreviewTemplate = (post) => {
  const preview = prewiewNewTemplate.cloneNode(true);
  const previewImg = preview.querySelector('.picture__img');
  const previewLikes = preview.querySelector('.picture__likes');
  const previewComments = preview.querySelector('.picture__comments');

  previewImg.src = post.url;
  previewImg.alt = post.description;
  let numCommemts = 0;
  if ((post.comments !== undefined).length) {
    numCommemts = (post.comments).length;
  }
  previewComments.textContent = numCommemts;
  previewLikes.textContent = post.likes;
  picturesContainer.appendChild(preview);
};

const displayPostPreview = () => {
  const posts = generateMockPosts(postsSum);
  for (let i = 0; i <= (posts.length); i++) {
    getPreviewTemplate(posts[i]);
  }
};

export { displayPostPreview };
