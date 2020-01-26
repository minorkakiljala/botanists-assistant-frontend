// This module contains a pair of helper functions to reading and writing to the local storage.
// The storage api can be kind of a dick to deal with hence, these were abstracted away for
// easier utilization.

const PLANT_STORAGE_KEY = 'plantStorageKey';

export const getPlantsFromStorage = (): Promise<Plant[]> => {
  return new Promise(resolve => {
    const plants: string | null = localStorage.getItem(PLANT_STORAGE_KEY);
    if (plants !== null) {
      const plantList: Plant[] = JSON.parse(plants);
      return resolve(plantList);
    }
    return resolve([]);
  });
};

export const setPlantsToStorage = (plants: Plant[]): Promise<Plant[]> => {
  const stringifiedPlants = JSON.stringify(plants);
  return new Promise(resolve => {
    localStorage.setItem(PLANT_STORAGE_KEY, stringifiedPlants);
    return resolve(plants);
  });
};
