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
  episode: [{ url: string }];
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export type RickAndMortyState = {
  // What is []?
  rickAndMortyCharacters: RickAndMortyCharacter[];
  name: string;
  gender: string;
  status: string;
  selectedCharacterDetails: RickAndMortyCharacter;
  filteredRickAndMortyCharacters: RickAndMortyCharacter[];
  characterDetailEpisodes: Episode[];
  pending: boolean;
  error: boolean;
  currentPage: number;
};

export type UiSliceState = {
  isSidebarOpen: boolean;
};
