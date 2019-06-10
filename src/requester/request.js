import axios from 'axios';

/* eslint-disable no-undef*/
const { API_URL } = process.env

const instanceAxios = axios.create({
  baseURL: 'https://superheroapi.com/api/2577395412285347',
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
    "Content-Type": "application/json;charset=UTF-8"
  },
  mode: 'no-cors',
  withCredentials: true,
  credentials: 'same-origin',
});

export default instanceAxios;
