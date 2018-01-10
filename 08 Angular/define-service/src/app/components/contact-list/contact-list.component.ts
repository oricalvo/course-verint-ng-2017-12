import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../../services/root.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[];
  @Output() deleteRequested: EventEmitter<ContactEvent> = new EventEmitter<ContactEvent>();

  constructor() {
  }

  ngOnInit() {
  }

  remove(contact) {
    //this.contacts.splice(this.contacts.indexOf(contact), 1);

    const args: ContactEvent = {
      contact: contact
    };
    this.deleteRequested.emit(args);
  }
}

export interface ContactEvent {
  contact: Contact;
}
