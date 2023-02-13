const bigPic = document.querySelector('.big-picture');

const closeBigPic = () => {
  bigPic.classList.add('hidden');
};

const setupCloseButton = () => {
  bigPic.querySelector('.big-picture__cancel').addEventListener('click', (evt) => {
    evt.preventDefault();
    closeBigPic();
  });
};

function getCommentTemplate(comment) {
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
}

const getCommentsListTemplate = (comments) => {
  const commentsCount = bigPic.querySelector('.big-picture__social').querySelector('.social__comment-count');
  const newCommentsList  =  bigPic.querySelector('.big-picture__social').querySelector('.social__comments');
  newCommentsList.innerHTML = '';
  if (comments) {
    newCommentsList.classList.remove('hidden');
    for (let i = 0; i < comments.length; i++) {
      newCommentsList.appendChild(getCommentTemplate(comments[i]));
    }
    commentsCount.textContent = 'Комментарии';
  } else {
    commentsCount.textContent = 'Комментариев пока нет';
    newCommentsList.classList.add('hidden');
  }
  return newCommentsList;
};

const renderBigPic = (post) => {
  const bigPicUrl = bigPic.querySelector('.big-picture__img').querySelector('img');
  const bigPicCaption = bigPic.querySelector('.big-picture__social').querySelector('.social__caption');
  const bigPicLikes = bigPic.querySelector('.big-picture__social').querySelector('.likes-count');
  bigPicUrl.src = post.url;
  bigPicUrl.alt = post.alt;
  bigPicCaption.textContent = post.description;
  bigPicLikes.textContent = post.likes;
  getCommentsListTemplate(post.comments);
  setupCloseButton();
  bigPic.querySelector('.social__comments-loader').classList.add('hidden');
};

export { bigPic, renderBigPic, closeBigPic };
