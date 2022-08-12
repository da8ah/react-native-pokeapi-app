import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined,
  Details: undefined
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

export type DetailsScreenState = {
  isLoading: boolean,
  dataSource: any,
  comprobarData: any
};

export type PokemonState = {
  name: string,
  style: any,
  base_experience: number,
  height: number,
  weight: number,
  types: [],
  abilities: []
};