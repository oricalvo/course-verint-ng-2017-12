import { Component, OnInit } from '@angular/core';
import {AppStore} from '../app.store';
import {reload} from '../actions';

@Component({
  selector: 'app-reload',
  templateUrl: './reload.component.html',
  styleUrls: ['./reload.component.css']
})
export class ReloadComponent implements OnInit {

  constructor(private store: AppStore) { }

  reload() {
    this.store.dispatch(reload());
  }
}
