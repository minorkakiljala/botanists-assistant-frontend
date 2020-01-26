import * as React from 'react';
import apiClient from '../api/localClient';

interface Props {
  refreshing: boolean;
  setRefreshing: (value: boolean) => void;
}

const PlantList = (props: Props) => {
  const { refreshing, setRefreshing } = props;
  const [plants, setPlants] = React.useState([]);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
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
    <section>
      <h2>My plants</h2>
      {plants.length === 0 && (
        <p>
          You don't seem to have any plants yet. Consider getting some and
          adding them here to make this application more useful.
        </p>
      )}
    </section>
  );
};

export default PlantList;
