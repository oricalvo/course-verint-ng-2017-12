import { Component } from '@angular/core';
import {Contact, ContactEvent} from './contact-list/contact-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  friends: Contact[];
  family: Contact[];

  constructor() {
    this.friends = [
      {"id": 1, "name": "Ori"},
      {"id": 2, "name": "Roni"},
    ];

    this.family = [
      {"id": 3, "name": "Udi"},
      {"id": 4, "name": "Tommy"},
    ];
  }

  onDeleteRequested(list: Contact[], $event: ContactEvent) {
    const index = list.indexOf($event.contact);
    if(index == -1) {
      return;
    }

    list.splice(index, 1);
  }
}
