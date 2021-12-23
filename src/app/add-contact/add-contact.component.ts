import { Component, OnInit } from '@angular/core';
import { entry } from '../models/entry';
import { entryService } from '../service/entry.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  entry: entry;

  constructor(private entryService: entryService) {
    this.entry = new entry();
  }

  addContact() {
    this.entryService.addEntry(this.entry);
    this.entry = new entry();
    console.log(this.entry);
  }

  ngOnInit(): void {}
}
