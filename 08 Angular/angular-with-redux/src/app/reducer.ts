import {AppState} from './app.state';
import {Action} from 'redux';

function reloadBegin(state: AppState): AppState {
  return {
    ...state,
    isReloading: true,
  }
}

function setContacts(state: AppState, action): AppState {
  return {
    ...state,
    contacts: action.contacts,
  }
}

function reloadEnd(state: AppState): AppState {
  return {
    ...state,
    isReloading: false,
  }
}

export function reducer(state: AppState, action: Action): AppState {
  if(action.type == "INC") {
    return inc(state);
  }
  else if(action.type == "DEC") {
    return dec(state);
  }
  else if(action.type == "RELOAD_BEGIN") {
    return reloadBegin(state);
  }
  else if(action.type == "SET_CONTACTS") {
    return setContacts(state, action);
  }
  else if(action.type == "RELOAD_END") {
    return reloadEnd(state);
  }

  return state;
}

function inc(state: AppState): AppState {
  return {
    ... state,
    counter: state.counter+1,
  };
}

function dec(state: AppState): AppState {
  return {
    ... state,
    counter: state.counter-1,
  };
}

function reload(state: AppState) {
  return {
    ...state,
    contacts: [
      {"id": 1, "name": "Ori"},
      {"id": 2, "name": "Roni"},
      {"id": 3, "name": "Udi"},
      {"id": 4, "name": "Tommy"},
    ]
  };
}
