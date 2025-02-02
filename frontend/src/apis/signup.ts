import client, { ResponseBody } from './client';

export interface PetInfoType {
  petname: string;
  age: number;
  weight: number;
  gender: string;
  isNeutered: string;
  breed: string;
}

interface PetResponse extends ResponseBody {
  data: PetInfoType;
}

export const postPetInfo = async (pet: PetInfoType): Promise<PetResponse> => {
  const { data } = await client.post('/pet', pet);
  return data;
};
