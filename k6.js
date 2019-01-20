import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 100,
  duration: '3m',
  rps: 2000
};


const generateId = () => {
  const num = Math.floor((Math.random() * 10) + 1);
  if (num < 7 ) {
    return Math.floor(Math.random() * 200 + 1);
  } else {
    return Math.floor(Math.random() * 9999800 + 200);
  }
};

export default function() {
  let id = generateId();
  http.get(`http://localhost:3002/restaurants/${id}`);
  // sleep(0.05);
}
