import { generateMockPosts } from './generate-mock-data.js';
import { postsSum } from './mock.js';
import { displayPostPreview } from './preview.js';
import { getEditImgForm } from './edit-img.js';

const renderIndexPage = () => {
  const mockPosts = generateMockPosts(postsSum);
  displayPostPreview(mockPosts);
  getEditImgForm();
};

export { renderIndexPage };
