import { PLACES } from '../actions/places';

const INITIAL_STATE = {};

export default function places (state = INITIAL_STATE, action) {
  switch (action.type) {
    case PLACES:
    console.log(action);
      return {...state, places:action.data.lugares};
      break;
    default:
    return state;

  }
}
