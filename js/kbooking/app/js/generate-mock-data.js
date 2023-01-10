import  { getRandomInt, getRandomFloat, getRandomArray, getAvatar} from'./util.js';
import { TYPES, CHECK_HOURS, FEATURES } from './const.js';
import { TITLES, DESCRIPTIONS, PHOTOS, Price, Rooms, Guests, LocationX, LocationY, CoordinatLenght } from './mock.js';


function getAuthor() {
  return {
    avatar: getAvatar(getRandomInt(1, 10)),
  };
}

function getLocation() {
  return {
    x: getRandomFloat(LocationX.MIN, LocationX.MAX, CoordinatLenght),
    y: getRandomFloat(LocationY.MIN, LocationY.MAX, CoordinatLenght),
  };
}

function getOffer() {
  return {
    title: TITLES[getRandomInt(0, TITLES.length - 1)],
    address: getLocation(),
    price: getRandomInt(Price.MIN, Price.MAX),
    type: TYPES[getRandomInt(0, TYPES.length - 1)],
    rooms: getRandomInt(Rooms.MIN, Rooms.MAX),
    guests: getRandomInt(Guests.MIN, Guests.MAX),
    checkin: CHECK_HOURS[getRandomInt(0, CHECK_HOURS.length - 1)],
    checkout: CHECK_HOURS[getRandomInt(0, CHECK_HOURS.length - 1)],
    features: getRandomArray(FEATURES),
    description: DESCRIPTIONS[getRandomInt(0, DESCRIPTIONS.length - 1)],
    photos: getRandomArray(PHOTOS),
  };
}

function getAds() {
  return {
    author: getAuthor(),
    offer: getOffer(),
  };
}


function generateMockAds(quantity) {
  const offers = [];
  for (let i = 0; i < quantity; i++) {
    const offer = getAds();
    offers.push(offer);
  }
  return offers;
}

export { generateMockAds };
