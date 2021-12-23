import { Component, OnInit } from '@angular/core';
import { entry } from '../models/entry';
import { entryService } from '../service/entry.service';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css'],
})
export class EntriesComponent implements OnInit {
  entries: entry[];
  searchTerm: string = '';
  copy: entry[];
  constructor(private entryService: entryService) {
    this.entries = entryService.getEntries();
    this.copy = this.entries;
  }

  deleteContact(name: string) {
    this.entryService.deleteContact(name);
    console.log('in component');
  }

  search(): void {
    let term = this.searchTerm;
    this.entries = this.copy.filter(function (tag) {
      return tag.name.indexOf(term) >= 0;
    });
  }

  ngOnInit(): void {}
}
