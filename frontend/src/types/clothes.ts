import { Season } from './enums';

export interface IClothes {
  _id?: number;
  name: string;
  season: Season;
}

export interface IClothesState {
  updateState: boolean;
  loading: boolean;
  clothesList: IClothes[];
  error?: string;
  response?: string;
}
