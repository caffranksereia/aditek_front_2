export class IUsers {
  user: IUser
  address: IAddress;
  pharmaceuticals: IPharmaceuticals;
  treatments: ITreatments;
  note: INote;
  obs: IObservation;
}

export interface IUser {
  name:string;
  age:string;
  email:string;
  cell_phone:string;
  cpf:string;
  rg:string;
  birth_date:string;
}

export interface IAddress{
  street:string;
  complement:string;
  number_home:string;
  city:string;
  state:string;
  cep:string;
}

export interface ITreatments{
  type_consultation:string;
  start_in_consultation:string;
  finish_in_consultation:string
}
export interface IPharmaceuticals {
  pharmaceuticals:string
}
export interface INote{
  last_consultation:string;
  next_consultation:string;
}
export interface IObservation{
  observation:string;
}