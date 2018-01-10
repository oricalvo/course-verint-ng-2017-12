import { Component, OnInit } from '@angular/core';
import {AppStore} from '../app.store';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  constructor(private store: AppStore) { }

  ngOnInit() {
  }

  get isReloading() {
    return this.store.getState().isReloading;
  }

}
