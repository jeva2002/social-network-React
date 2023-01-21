import axios from 'axios';

const baseInstance = axios.create({
  baseURL: 'http://localhost:4000',
});

export default baseInstance;
