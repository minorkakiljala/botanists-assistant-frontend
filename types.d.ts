declare interface Plant {
  plantId: string;
  name: string;
  daysToWait: number;
  lastWatered: Date | null;
  addedDateTime: Date;
}

declare interface ApiClient {
  getAllPlants: () => Promise<any>;
  createPlant: (name: string, daysToWait: number) => Promise<any>;
  removePlant?: (id: string) => Promise<any>;
}
