import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getAnimalId } from '../data/animal.js';

function AnimalDetailPage() {

  const [animal, setAnimal] = useState({});

  let params = useParams();

  useEffect(
    () => {
      const chosenAnimal = getAnimalId(params.animalId);
      setAnimal(chosenAnimal);
    },
    []
  );

  return (
    <>
      <div>Nama Binatang : {animal?.name}</div>
      <img src={animal?.imageUrl} />
    </>
  );

}

export default AnimalDetailPage;