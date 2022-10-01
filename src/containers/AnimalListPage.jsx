import React, { useEffect, useState} from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { getAnimals } from '../data/animal.js';

function AnimalListPage() {
  const [animals, setAnimals] = useState([]);
  let [queryString, setQueryString] = useSearchParams();

  useEffect(() => {
    let fetchDataAnimals = getAnimals();
    if (queryString.get('filter') === 'asc')
    {
      fetchDataAnimals = fetchDataAnimals.sort((a , b) => a.price - b.price);
    } else if (queryString.get('filter') === 'desc') {
      fetchDataAnimals = fetchDataAnimals.sort((a, b) => b.price -a.price);
    }

    setAnimals(fetchDataAnimals);
  } , 
  []
  );

  return (
    <>
      <main>
        <div>Filter Secara : { queryString.get('filter') }</div>
      </main>
      <div>
        <h1>Listing Binatang</h1>
      </div>
      <div>
        <ul>
          {animals.map((animal) => (
            <li key={animal.animalId}>
              <Link to={`/animals/${animal.animalId}`}>
              {animal.animalId} - {animal.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default AnimalListPage;