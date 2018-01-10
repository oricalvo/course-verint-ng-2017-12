import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {STORE_PROVIDER} from './app.store';
import { ReloadComponent } from './reload/reload.component';
import { ProgressComponent } from './progress/progress.component';


@NgModule({
  declarations: [
    AppComponent,
    ReloadComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    STORE_PROVIDER,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
