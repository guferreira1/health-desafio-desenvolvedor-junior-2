export interface ICreatePet {
  name: string;
  age: number;
  breed: string;
  type: string;
  owner_name: string;
  owner_phone: string;
}

export interface IEditPet {
  name?: string;
  age?: number;
  breed?: string;
  owner_name?: string;
  owner_phone?: string;
}
