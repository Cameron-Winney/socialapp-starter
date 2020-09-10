import axios from 'axios';

class DataService {

  constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create);
    this.url = url;
    this.client = client;
}

registerUser() {
  return this.client.get(this.url  "/users");
}

getMessages(){
  return this.client.get(this.url)
}
}

export default DataService;