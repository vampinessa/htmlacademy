import { displayPostPreview } from './preview.js';
import { generateMockPosts } from './generate-mock-data.js';
import { renderBigPic } from './fullview.js';
displayPostPreview();

renderBigPic(generateMockPosts(10)[7]);
