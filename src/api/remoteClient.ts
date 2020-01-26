import { apiUrl } from '../config';

const apiClient: ApiClient = {
  getAllPlants: () => {
    return fetch(`${apiUrl}/v1/plants`)
      .then(response => response.json())
      .catch(err =>
        console.error('Error happened fetching data from remote backend:', err)
      );
  },

  createPlant: (name: string, daysToWait: number) => {
    return fetch(`${apiUrl}/v1/plants/create`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        daysToWait
      })
    })
      .then(response => response.json())
      .catch(err =>
        console.error(
          'Error happened creating new plant to remote backend:',
          err
        )
      );
  }
};

export default apiClient;
