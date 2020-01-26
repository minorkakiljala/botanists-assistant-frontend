import cuid from 'cuid';

const PLANT_STORAGE_KEY = 'plantStorageKey';

const apiClient: ApiClient = {
  getAllPlants: () => {
    return new Promise(resolve => {
      const plants = localStorage.getItem(PLANT_STORAGE_KEY);
      if (plants) {
        const plantArray: Plant[] = JSON.parse(plants);
        return resolve(plantArray);
      }
      return resolve([] as Plant[]);
    }).catch(err =>
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
      const plants = localStorage.getItem(PLANT_STORAGE_KEY);
      if (!plants) {
        localStorage.setItem(PLANT_STORAGE_KEY, JSON.stringify([newPlant]));
        return newPlant;
      }
      const newPlants = [...JSON.parse(plants), newPlant];
      localStorage.setItem(PLANT_STORAGE_KEY, JSON.stringify(newPlants));
      return newPlant;
    });
  }
};

export default apiClient;
