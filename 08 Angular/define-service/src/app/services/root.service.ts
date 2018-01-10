import { Injectable } from '@angular/core';

export interface Contact {
  id: number;
  name: string;
}

export interface AppState {
  family: Contact[];
  friends: Contact[];
}

@Injectable()
export class RootService {
  state: AppState;

  constructor() {
    this.state = {
      friends: [
        {"id": 1, "name": "Ori"},
        {"id": 2, "name": "Roni"},
      ],

      family: [
        {"id": 3, "name": "Udi"},
        {"id": 4, "name": "Tommy"},
      ]
    };
  }

  deleteContact(list: Contact[], contact: Contact) {
    if(list != this.state.family && list != this.state.friends) {
      return;
    }

    const index = list.indexOf(contact);
    if(index == -1) {
      return;
    }

    list.splice(index, 1);
  }
}
