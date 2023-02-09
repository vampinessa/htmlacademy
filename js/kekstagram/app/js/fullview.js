const bigPic = document.querySelector('.big-picture');
const bigPicSocial = bigPic.querySelector('.big-picture__social');
const commentsList =  bigPicSocial.querySelector('.social__comments');

const closeBigPic = () => {
  bigPic.classList.add('hidden');
};

const getCommentTemplate = (comment) => {
  const newComment = commentsList.querySelector('.social__comment').cloneNode(true);
  newComment.querySelector('.social__picture').src = comment.avatar;
  newComment.querySelector('.social__picture').alt = comment.name;
  newComment.querySelector('.social__text').textContent = comment.message;
  return newComment;
};

const getCommentsListTemplate = (comments) => {
  const commentsCount = bigPicSocial.querySelector('.social__comment-count');
  const newList = commentsList.cloneNode(false);
  if (comments) {
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
  bigPicSocial.replaceChild(getCommentsListTemplate(post.comments), commentsList);
  bigPic.querySelector('.social__comments-loader').classList.add('hidden');

  const closeButton = bigPic.querySelector('.big-picture__cancel');

  closeButton.addEventListener('click', (evt)=> {
    evt.preventDefault();
    closeBigPic();
  });
};

export { bigPic, renderBigPic };
