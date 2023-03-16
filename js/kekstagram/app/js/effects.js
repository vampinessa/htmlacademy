import { editImg } from './edit-img.js';
import { deleteClass } from './util.js';
import { DefaultSliderValue, Effects } from './constants.js';

const effectSlider = document.querySelector('.effect-level__slider');

noUiSlider.create(effectSlider, {
  range: {
    min: DefaultSliderValue.MIN,
    max: DefaultSliderValue.MAX,
  },
  start: DefaultSliderValue.START,
  step: DefaultSliderValue.STEP,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const updateSlider = (min=DefaultSliderValue.MIN, max=DefaultSliderValue.MAX, step=DefaultSliderValue.STEP, start=DefaultSliderValue.START) => {
  effectSlider.noUiSlider.updateOptions({
    range: {
      min: min,
      max: max,
    },
    start: start,
    step: step,
  });
};

const onEffectLevelSliderUpdate = (effect) => {
  const effectLevelValue = document.querySelector('.effect-level__value');
  effectSlider.noUiSlider.on('update', (values, handle) => {
    effectLevelValue.value = values[handle];
    editImg.querySelector('.img-upload__preview').style.filter = Effects[effect].PROPERTY(effectLevelValue.value);
  });
};

const  onEffectClick = (evt) => {
  const imgPreview = editImg.querySelector('.img-upload__preview');
  const effectLevel = editImg.querySelector('.img-upload__effect-level');
  let effect = '';
  effectLevel.querySelector('.effect-level__value').value = '';
  const classNamePrefix = 'effects__preview--';
  deleteClass(imgPreview, classNamePrefix);
  const currentEffect = (evt.target).value;
  effect = currentEffect;
  const effectOptions = Effects[effect];
  if (effectOptions) {
    imgPreview.classList.add(classNamePrefix + currentEffect);
    imgPreview.style.filter =  effectOptions.PROPERTY(effectOptions.MAX);
    updateSlider(effectOptions.MIN, effectOptions.MAX, effectOptions.STEP, effectOptions.MAX);
    onEffectLevelSliderUpdate(effect);
    effectLevel.classList.remove('hidden');
  } else {
    effectLevel.classList.add('hidden');
    imgPreview.style.filter =  'none';
  }
};
export { onEffectClick };
