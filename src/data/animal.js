let animals = [
  {
    animalId: 'A-001',
    name: 'Chihuahua',
    imageUrl: 'https://placedog.net/240/200',
    price: 15000,
  },
  {
    animalId: 'K-001',
    name: 'Persia',
    imageUrl: 'https://placekitten.com/240/200',
    price: 10000,
  },
  {
    animalId: 'A-002',
    name: 'Munchkin',
    imageUrl: 'https://via.placeholder.com/240x200',
    price: 20000,
  },
];

export function getAnimals() {
  return animals;
}

export function getAnimalId(animalId) {
  return animals.find((animal) => animal.animalId === animalId);
}

export function deleteAnimal(animalId) {
  return animals.filter((animal) => animal.animalId !== animalId);
}