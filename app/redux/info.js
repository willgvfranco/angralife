import { ON, OFF } from '../actions/info';

const INITIAL_STATE = {};


export default function info (state = INITIAL_STATE, action) {
  switch (action.type) {

    case ON:
      return {...state, servicos: action.servicos};
    case OFF:
        return {...state, individual:action.individual};
    default:
      return state;
  }
}
