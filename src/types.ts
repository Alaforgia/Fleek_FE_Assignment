export interface RickAndMortyCharacter {
  id: number;
  name: string;
  gender: string;
  species: string;
  status: string;
  image: string;
  type: string;
  origin: {
    name: string;
    url: string;
  };
  created: string;
  episode: string[];
}

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created: string;
};

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export type RickAndMortyState = {
  rickAndMortyCharacters: RickAndMortyCharacter[];
  name: string;
  gender: string;
  status: string;
  selectedCharacterDetails: RickAndMortyCharacter;
  filteredRickAndMortyCharacters: RickAndMortyCharacter[];
  selectedEpisodeDetails: Episode;
  selectedCharacterEpisodes: Episode[];
  pending: boolean;
  error: boolean;
  currentPage: number;
  info: Info;
};

export type UiSliceState = {
  isSidebarOpen: boolean;
};
