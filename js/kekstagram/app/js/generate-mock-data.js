import { MESSAGES, NAMES, TITLES, Likes, IdScore, AvatarId, COMMEMTS_ID } from './mock.js';
import { getRandomInt, getUrl } from './util.js';
import { ImgType } from './constants.js';

const getId = (idlist, min, max) => {
  let id;
  do {
    id = getRandomInt(min, max);
  } while (idlist.includes(id) === true);
  idlist.push(id);
  return id;
};

const getMessage = (commentsList) => commentsList[getRandomInt(0, commentsList.length - 1)];

const createComment = () => ({
  id: getId(COMMEMTS_ID, IdScore.MIN, IdScore.MAX),
  avatar: getUrl(ImgType.AVATAR, getRandomInt(AvatarId.MIN, AvatarId.MAX)),
  message: getMessage(MESSAGES),
  name: NAMES[getRandomInt(0, NAMES.length - 1)],
});

const setComments = () => {
  const comments = [];
  const quantity = getRandomInt(0, 5);
  if (quantity === 0) {
    return;
  } else {
    for (let i = 0; i < quantity; i++) {
      const comment = createComment();
      comments.push(comment);
    }
  }
  return comments;
};

const createPost = (intId) => ({
  id: intId,
  url: getUrl(ImgType.PHOTO, intId),
  description: TITLES[--intId],
  likes: getRandomInt(Likes.MIN, Likes.MAX),
  comments: setComments(),
});

const generateMockPosts = (quantityPosts) => {
  const posts = [];
  for (let i = 1; i <= quantityPosts; i++) {
    posts.push(createPost(i));
  }
  return posts;
};

export { generateMockPosts };
