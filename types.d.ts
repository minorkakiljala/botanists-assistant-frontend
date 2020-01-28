declare interface Plant {
  plantId: string;
  name: string;
  daysToWait: number;
  lastWatered: Date | null;
  addedDateTime: Date;
  timesWatered?: number;
}

declare interface ApiClient {
  getAllPlants: () => Promise<Plant[]>;
  createPlant: (name: string, daysToWait: number) => Promise<any>;
}
