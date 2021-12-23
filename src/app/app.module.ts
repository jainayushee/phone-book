import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { EntryComponent } from './entry/entry.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { FormsModule } from '@angular/forms';
import { entryService } from './service/entry.service';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    EntryComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [entryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
