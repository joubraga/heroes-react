import axios from 'axios';

/* eslint-disable no-undef*/
const { REACT_APP_API_URL, REACT_APP_ACCESS_TOKEN } = process.env

const instanceAxios = axios.create({
  baseURL: `${REACT_APP_API_URL}/${REACT_APP_ACCESS_TOKEN}`,
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
    "Content-Type": "application/json;charset=UTF-8"
  },
  mode: 'no-cors',
  withCredentials: true,
});

export default instanceAxios;
