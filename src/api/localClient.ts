import cuid from 'cuid';
import {
  getPlantsFromStorage,
  setPlantsToStorage
} from '../utils/localStorage';

// The local client provides functionality for interacting with a browsers local storage
// the functions here are built to match those of the remote client for the sake of simplicity.

interface LocalClient extends ApiClient {}

const apiClient: LocalClient = {
  getAllPlants: () => {
    return getPlantsFromStorage().catch(err => {
      console.error(
        'An error happened with fetching plants from localStorage',
        err
      );
      return err;
    });
  },
  createPlant: (name: string, daysToWait: number) => {
    const newPlant: Plant = {
      name,
      daysToWait,
      lastWatered: null,
      plantId: cuid(),
      addedDateTime: new Date()
    };
    return new Promise(resolve => {
      return getPlantsFromStorage().then(result => {
        const newPlants = [...result, newPlant];
        setPlantsToStorage(newPlants);
        return resolve(newPlants);
      });
    });
  }
};

export default apiClient;
