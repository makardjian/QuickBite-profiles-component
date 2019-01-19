import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 100,
  duration: '30s'
};

let id = Math.floor((Math.random() * 10000000) + 1);

export default function() {
  http.get(`http://localhost:3002/restaurants/${id}`);
  sleep(0.05);
}