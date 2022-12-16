export interface petsInterface {
  id: string;
  name: string;
  age: number;
  breed: string;
  type: string;
  owner_phone: string;
  owner_name: string;
}

export interface editPetInterface {
  name?: string;
  age?: number;
  owner_phone?: string;
  owner_name?: string;
}

export interface petsInterfaceResp extends petsInterface {
  pets: [];
}
