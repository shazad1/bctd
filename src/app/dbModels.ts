export interface Vin {
  actualDate: Date;
  driver: string;
  dropoff: string;
  pickup: string;
  plannedDate: Date;
  stage: string;
  status: string;
  tripCode: string;
  truck: string;
  type: string;
  vin: string;
}

export interface Client {
  address:string;
  email: string;
  name: string;
  status: string;
  items: Vin[]
}
