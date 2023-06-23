const DefaultSliderValue = {
  MIN: 0,
  MAX: 1,
  START: 0,
  STEP: 0.1,
};

const Effects = {
  'chrome' : {
    PROPERTY: (value) => `grayscale(${value})`,
    MAX: DefaultSliderValue.MAX,
  },
  'sepia' : {
    PROPERTY: (value) =>`sepia(${value})`,
    MAX: DefaultSliderValue.MAX,
  },
  'marvin' : {
    PROPERTY: (value) =>`invert(${value}%)`,
    MAX: 100,
    STEP: 1,
  },
  'heat' : {
    PROPERTY: (value) =>`brightness(${value})`,
    MAX: 3,
  },
  'phobos' : {
    PROPERTY: (value) =>`blur(${value}px)`,
    MAX: 3,
  },
};

const DESCRIPTION_LENGTH = 141;

const POST_QUANTITY = 25;

const Keys = {
  ESCAPE: 'Escape',
  ESC: 'Esc',
  ENTER: 'Enter',
};

const ImgType = {
  AVATAR: 'avatar',
  PHOTO: 'photo',
};

export { DefaultSliderValue, Effects, DESCRIPTION_LENGTH, POST_QUANTITY, Keys, ImgType };
