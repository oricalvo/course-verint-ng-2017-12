import { Component } from '@angular/core';
import {AppStore} from './app.store';
import {dec, inc} from './actions';
import {Contact} from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store: AppStore) {
    console.log("store", store);
  }

  get counter() {
    return this.store.getState().counter;
  }

  get contacts(): Contact[] {
    return this.store.getState().contacts;
  }

  inc() {
    this.store.dispatch(inc());
  }

  dec() {
    this.store.dispatch(dec());
  }
}
