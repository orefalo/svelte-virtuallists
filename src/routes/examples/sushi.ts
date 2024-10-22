const sushiArray = [
  'Nigiri',
  'Maguro',
  'Sake',
  'Unagi',
  'Buri',
  'Suzuki',
  'Saba',
  'Iwashi',
  'Kohada',
  'Hirame',
  'Tobiwo',
  'Maki',
  'Ana-kyu',
  'Chutoro',
  'Kaiware',
  'Kampyo',
  'Kappa',
  'Natto',
  'Negitoro',
  'Oshinko',
  'Otoro',
  'Tekka',
  'Sashimi',
  'Maguro',
  'Toro',
  'Ebi',
  'Saba',
  'Ika',
  'Tako',
  'Tomago',
  'Kani',
  'Katsuo',
  'Maguro'
];

function getRandomFourDigitNumber() {
  const randomNumber = Math.floor(Math.random() * 10000); // Generates a number between 0 and 9999
  return randomNumber.toString().padStart(4, '0'); // Pads with zeros if necessary
}

export function getRandomSushi() {
  const randomIndex = Math.floor(Math.random() * sushiArray.length);
  return sushiArray[randomIndex] + ' ' + getRandomFourDigitNumber();
}
