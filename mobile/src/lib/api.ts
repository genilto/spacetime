import axios from 'axios'
import { BACKEND_API_ENDPOINT } from '@env'

export const api = axios.create({
  baseURL: BACKEND_API_ENDPOINT,
})
