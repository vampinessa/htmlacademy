import { onBigPicEscKeydown, onBigPicCloseClick } from './modal.js';
const bigPic = document.querySelector('.big-picture');
const commentsList  =  bigPic.querySelector('.big-picture__social').querySelector('.social__comments');

const closeBigPic = () => {
  bigPic.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  bigPic.querySelector('#picture-cancel').removeEventListener('click', onBigPicCloseClick);
  document.removeEventListener('keydown', onBigPicEscKeydown);
  commentsList.innerHTML = '';
};

function getCommentTemplate(comment) {
  const newComment = document.querySelector('#social-comment').cloneNode(true).content;
  newComment.querySelector('.social__picture').src = comment.avatar;
  newComment.querySelector('.social__picture').alt = comment.name;
  newComment.querySelector('.social__text').textContent = comment.message;
  return newComment;
}

const getCommentsListTemplate = (comments) => {
  const commentsCount = bigPic.querySelector('.big-picture__social').querySelector('.social__comment-count');
  commentsCount.classList.add('hidden');
  commentsList.classList.add('hidden');
  if (comments) {
    commentsList.classList.remove('hidden');
    commentsCount.classList.remove('hidden');
    commentsCount.textContent = 'Комментарии';

    const commentListFragment = document.createDocumentFragment();
    comments.forEach((comment) => {
      commentListFragment.appendChild(getCommentTemplate(comment));
    });
    commentsList.appendChild(commentListFragment);
  }
};

const renderBigPic = (post) => {
  const bigPicUrl = bigPic.querySelector('.big-picture__img > img');
  const bigPicCaption = bigPic.querySelector('.big-picture__social').querySelector('.social__caption');
  const bigPicLikes = bigPic.querySelector('.big-picture__social').querySelector('.likes-count');
  bigPicUrl.src = post.url;
  bigPicUrl.alt = post.description;
  bigPicCaption.textContent = post.description;
  bigPicLikes.textContent = post.likes;
  getCommentsListTemplate(post.comments);
  document.addEventListener('keydown', onBigPicEscKeydown);
  bigPic.querySelector('.big-picture__cancel').addEventListener('click', onBigPicCloseClick);
  bigPic.querySelector('.social__comments-loader').classList.add('hidden');
};

export { bigPic, closeBigPic, renderBigPic, onBigPicCloseClick, onBigPicEscKeydown};
