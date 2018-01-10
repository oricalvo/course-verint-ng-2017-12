import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import {RootService} from './services/root.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    RootService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
