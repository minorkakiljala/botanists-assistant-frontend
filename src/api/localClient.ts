import cuid from 'cuid';
import {
  getPlantsFromStorage,
  setPlantsToStorage
} from '../utils/localStorage';

const apiClient: ApiClient = {
  getAllPlants: () => {
    return getPlantsFromStorage().catch(err =>
      console.error(
        'An error happened with fetching plants from localStorage',
        err
      )
    );
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
        resolve(newPlants);
      });
    });
  }
};

export default apiClient;
