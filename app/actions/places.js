import client from 'superagent';
import { ROOT_URL } from './config'
export const PLACES = 'PLACES';

export function places(data) {
  return {
    type: PLACES,
    data
  };
}


export function getPlaces() {
  return function(dispatch) {
    return client.get(`${ROOT_URL}/lugares?transform=1`) .withCredentials().end(function(err,data) {
      let resPlaces = JSON.parse(data.text);
      dispatch(places(resPlaces));
    })
  }
}
