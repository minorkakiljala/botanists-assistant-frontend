import * as React from 'react';
import apiClient from '../api';

import './PlantList.css';
import PlantCard from './PlantCard';

interface Props {
  refreshing: boolean;
  setRefreshing: (value: boolean) => void;
}

const initialPlants: Plant[] = [];

const PlantList = (props: Props) => {
  const { refreshing, setRefreshing } = props;
  const [plants, setPlants] = React.useState(initialPlants);
  const [error, setError] = React.useState(false);

  // React useEffect is a React-Hook for handling asynchronous events with side effects
  // here we use it to fetch data, then set that data to the react-components internal state
  React.useEffect(() => {
    console.log('Fetching all plants');
    apiClient
      .getAllPlants()
      .then(setPlants)
      .catch(err => {
        console.error('An error happened while fetching plants.', err);
        setError(true);
      })
      .finally(() => setRefreshing(false));
  }, [refreshing, setRefreshing]);

  return (
    <section className="PlantList">
      <h2>My plants</h2>
      {plants.length === 0 && !refreshing && (
        <p>
          You don't seem to have any plants yet. Consider getting some and
          adding them here to make this application more useful.
        </p>
      )}
      {refreshing && <p>Fetching all plants...</p>}
      {error && <p>Something went wrong while fetching plants...</p>}
      <div className="PlantList-Plants">
        {plants.map(plant => (
          <PlantCard key={plant.plantId} plant={plant} />
        ))}
      </div>
    </section>
  );
};

export default PlantList;
