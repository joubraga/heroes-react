import axios from 'axios';

/* eslint-disable no-undef*/
const { API_URL } = process.env

const instanceAxios = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

export default instanceAxios;
