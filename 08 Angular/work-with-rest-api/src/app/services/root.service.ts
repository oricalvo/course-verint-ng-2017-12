import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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

  constructor(private httpClient: HttpClient) {
    this.state = {
      family: null,
      friends: null,
    };

    this.init();
  }

  private getContacts(type: string): Promise<Contact[]> {
    return this.httpClient.get<Contact[]>("/api/" + type).toPromise();
  }

  async init() {
    const [friends, family] = await Promise.all([
      this.getContacts("friends"),
      this.getContacts("family"),
    ]);

    this.state = {
      ... this.state,
      friends: friends,
      family: family,
    }
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
