import axios from 'axios';

class DataService {

  constructor(url = 'http://jservice.io/api/random', client = axios.create);
    this.url = url;
    this.client = client;
}

getQuestion() 