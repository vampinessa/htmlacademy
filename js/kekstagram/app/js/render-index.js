import { generateMockPosts } from './generate-mock-data.js';
import { postsSum } from './mock.js';
import { displayPostPreview } from './preview.js';
import { onImgUploadClick, onImgUploadEnterKeydown } from './modal.js';
import { renderEditImgForm } from './edit-img.js';

const renderIndexPage = () => {
  const mockPosts = generateMockPosts(postsSum);
  displayPostPreview(mockPosts);
  onImgUploadClick();
  onImgUploadEnterKeydown();
  renderEditImgForm();
};

export { renderIndexPage };
