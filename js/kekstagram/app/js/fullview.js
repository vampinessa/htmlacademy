import {onBigPicEscKeydown} from './main.js';

const bigPic = document.querySelector('.big-picture');
const bigPicSocial = bigPic.querySelector('.big-picture__social');
const commentsList =  bigPicSocial.querySelector('.social__comments');


const closeBigPic = () => {
  bigPic.classList.add('hidden');
  document.removeEventListener('keydown', onBigPicEscKeydown);
};

const getCommentTemplate = (comment) => {
  const newComment = document.createElement('li');
  newComment.classList.add('social__comment');

  const newCommentImg = document.createElement('img');
  newCommentImg.classList.add('social__picture');
  newCommentImg.src = comment.avatar;
  newCommentImg.alt = comment.name;
  newCommentImg.width = 35;
  newCommentImg.hidden = 35;
  newComment.appendChild(newCommentImg);

  const newCommentText = document.createElement('p');
  newCommentText.classList.add('social__text');
  newCommentText.textContent = comment.message;
  newComment.appendChild(newCommentText);

  return newComment;
};

const getCommentsListTemplate = (comments) => {
  const commentsCount = bigPicSocial.querySelector('.social__comment-count');
  const newList = commentsList;
  newList.innerHTML = '';
  if (comments) {
    if (newList.classList.contains('hidden')) {
      newList.classList.remove('hidden');
    }
    for (let i = 0; i < comments.length; i++) {
      newList.appendChild(getCommentTemplate(comments[i]));
    }
    commentsCount.textContent = 'Комментарии';
  } else {
    commentsCount.textContent = 'Комментариев пока нет';
    commentsList.classList.add('hidden');
  }
  return newList;
};

const renderBigPic = (post) => {
  const bigPicUrl = bigPic.querySelector('.big-picture__img').querySelector('img');
  const bigPicCaption = bigPicSocial.querySelector('.social__caption');
  const bigPicLikes = bigPicSocial.querySelector('.likes-count');
  bigPic.classList.remove('hidden');
  bigPicUrl.src = post.url;
  bigPicUrl.alt = post.alt;
  bigPicCaption.textContent = post.description;
  bigPicLikes.textContent = post.likes;
  getCommentsListTemplate(post.comments);

  bigPic.querySelector('.social__comments-loader').classList.add('hidden');

  const closeButton = bigPic.querySelector('.big-picture__cancel');
  closeButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    closeBigPic();
  });
};

export { bigPic, renderBigPic, closeBigPic };
