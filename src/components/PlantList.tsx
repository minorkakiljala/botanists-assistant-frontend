import * as React from 'react';
import apiClient from '../api/localClient';

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
  }, [refreshing]);
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
      <div className="PlantList-Plants">
        {plants.map(plant => (
          <PlantCard key={plant.plantId} plant={plant} />
        ))}
      </div>
    </section>
  );
};

export default PlantList;
