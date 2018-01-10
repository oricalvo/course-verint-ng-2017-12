import { Component } from '@angular/core';
import {ContactEvent} from './components/contact-list/contact-list.component';
import {AppState, Contact, RootService} from './services/root.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private rootService: RootService) {
  }

  get friends(): Contact[] {
    return this.rootService.state.friends;
  }

  get family(): Contact[] {
    return this.rootService.state.family;
  }

  onDeleteRequested(list: Contact[], $event: ContactEvent) {
    this.rootService.deleteContact(list, $event.contact);
  }
}
