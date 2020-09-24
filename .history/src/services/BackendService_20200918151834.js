import axios from "axios"

const BASE_URL = "https://socialapp-api.herokuapp.com"

class BackendService {
  constructor (baseURL = BASE_URL, client)  {
    this.baseURL = baseURL
    this.client = client || axios.create({ baseURL})
  }

  getMessages(limit = 25) {
    return this.client.get(`/messages?limit=${limit}&offset=${offset}&`)
  }
}

export default new BackendService()