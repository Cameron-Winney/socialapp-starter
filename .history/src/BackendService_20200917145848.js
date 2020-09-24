import axios from "axios"

const BASE_URL = "https://socialapp-api.herokuapp.com"

class BackendService {
  constructor (baseURL = BASE_URL, client = axios.create({baseURL: BASE_URL}) ) {
    this.baseURL = baseURL
    this.client = client || axios.create({ baseURL})
  }
}