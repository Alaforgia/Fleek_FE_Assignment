import { CharacterFilter, EpisodeFilter, LocationFilter } from "../interface/interface";
import generateQueryString from "./generateQuery";
import get from "./get";

export interface GetResource {
  endpoint: "character" | "location" | "episode" | "";
  options: number | number[] | CharacterFilter | LocationFilter | EpisodeFilter;
  isIdRequired?: boolean;
}

const getResource = async ({ endpoint, options, isIdRequired = false }: GetResource): Promise<any> => {
  const qs = generateQueryString(options, isIdRequired);

  return get(`${endpoint}/${qs}`);
};

export default getResource;
