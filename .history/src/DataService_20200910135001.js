import axios from 'axios';

class DataService {

  constructor(url = 'https://socialapp-api.hero', client = axios.create);
    this.url = url;
    this.client = client;
}

getQuestion() {
  return this.client.get(this.url);
}
}

export default DataService;