import {createStore, Dispatch, Reducer, Store, Unsubscribe, applyMiddleware } from 'redux';
import {AppState} from './app.state';
import {reducer} from './reducer';
import thunk from 'redux-thunk';

const initialState: AppState = {
  counter: 0,
  contacts: null,
  isReloading: false,
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export abstract class AppStore {
  dispatch: Dispatch<AppState>;
  abstract getState(): AppState;
  abstract subscribe(listener: () => void): Unsubscribe;
  abstract replaceReducer(nextReducer: Reducer<AppState>): void;
}

export const STORE_PROVIDER = {provide: AppStore, useValue: store};
