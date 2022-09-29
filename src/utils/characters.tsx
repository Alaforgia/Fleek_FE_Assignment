
import { ApiResponse, Character, CharacterFilter, Info } from '../interface/interface'
import getResource from './getResource'

const endpoint = 'character'

/**
 * Gets a collection of Characters.<br/>
 * https://rickandmortyapi.com/documentation/#character
 */
export const getCharacters = (filters?: CharacterFilter): Promise<ApiResponse<Info<Character[]>>> =>
  getResource({ endpoint, options: filters ?? {} })

/**
 * Gets a Character by `id` or array of `ids`.<br/>
 * https://rickandmortyapi.com/documentation/#character
 */
export const getCharacter = <T extends number | number[]>(
  id: T,
): Promise<ApiResponse<T extends number ? Character : Character[]>> =>
  getResource({ endpoint, options: id, isIdRequired: true })

