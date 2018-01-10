import { Component } from '@angular/core';
import {TickEvent} from './clock/clock.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  contacts: Contact[];
  isVisible: boolean = true;

  constructor() {
    this.contacts = [
      {"id": 1, "name": "Ori"},
      {"id": 2, "name": "Roni"},
      {"id": 3, "name": "Udi"},
      {"id": 4, "name": "Tommy"},
    ];
  }

  onTick($event: TickEvent) {
    console.log("tick", $event);
  }

  toggle() {
    this.isVisible = !this.isVisible;
  }
}

export interface Contact {
  id: number;
  name: string;
}

