import { apiUrl } from '../config';

// The remote client provides functionality for interacting with a remote server using javascripts native fetch.

interface RemoteClient extends ApiClient {
  removePlant?: (id: string) => Promise<any>;
}

const apiClient: RemoteClient = {
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
