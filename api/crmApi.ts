import axios from 'axios';

const crmApi = axios.create({
  baseURL: '/api',
});

export default crmApi;
