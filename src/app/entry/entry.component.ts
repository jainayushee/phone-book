import { Component, OnInit } from '@angular/core';
import { entry } from '../models/entry';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent implements OnInit {
  entry: entry;

  constructor() {
    this.entry = new entry();
  }

  ngOnInit(): void {}
}
