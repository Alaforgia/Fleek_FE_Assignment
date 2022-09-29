
import { ApiResponse, Endpoints } from '../interface/interface'
import getResource from './getResource'


export const getEndpoints = (): Promise<ApiResponse<Endpoints>> => getResource({ endpoint: '', options: {} })