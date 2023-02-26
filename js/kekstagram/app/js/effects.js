import { editImg, effects } from './edit-img.js';
import { deleteClass } from './util.js';

const setEffect = (effectName) => {
  const levelSlider = editImg.querySelector('.img-upload__effect-level');
  const imgPreview = editImg.querySelector('.img-upload__preview');
  const classNamePrefix = 'effects__preview--';

  deleteClass(imgPreview, classNamePrefix);

  if (effectName === 'none') {
    levelSlider.classList.add('hidden');
  } else {
    levelSlider.classList.remove('hidden');
    const effectClass = classNamePrefix + effectName;
    imgPreview.classList.add(effectClass);
  }
};

const onEffectClick = (evt) => {
  const currentEffect = (evt.target).value;
  setEffect(currentEffect);
};

export { effects, onEffectClick };
