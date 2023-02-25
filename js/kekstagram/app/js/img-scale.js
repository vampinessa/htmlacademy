import { editImg, imgScale } from './edit-img.js';

const ImgScales = {
  step: 25,
  min: 25,
  max: 100,
};

const adjustImgScale = (scale) => {
  const imgUploadPreview = editImg.querySelector('.img-upload__preview > img');
  const imgTransformValue = scale / 100;
  imgUploadPreview.style.transform = `scale(${imgTransformValue})`;
  imgScale.value = `${scale}%`;
};

const onDecreaseButtonClick = () => {
  let currentScale = Number((imgScale.value).slice(0, -1));
  if (currentScale > ImgScales.min) {
    currentScale -= ImgScales.step;
  }
  adjustImgScale(currentScale);
};

const onIncreaseButtonClick = () => {
  let currentScale = Number((imgScale.value).slice(0, -1));
  if (currentScale < ImgScales.max) {
    currentScale += ImgScales.step;
  }
  adjustImgScale(currentScale);
};

export { onDecreaseButtonClick, onIncreaseButtonClick };

