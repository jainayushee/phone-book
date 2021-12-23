import { entry } from '../models/entry';

export class entryService {
  entries: entry[];
  entry: entry;

  constructor() {
    this.entries = [
      new entry('Amit Jain', '8272519302'),
      new entry('Bhavish Aggarwal', '9825173927'),
      new entry('Richa Kar', '2537291036'),
      new entry('Ritesh Agarwal', '829283726'),
      new entry('Vijay Shekhar Sharma', '452618273'),
    ];

    this.entry = new entry();
  }

  getEntries(): entry[] {
    return this.entries;
  }

  deleteContact(name: string) {
    for (let index = 0; index < this.entries.length; index++) {
      if (this.entries[index].name == name) {
        this.entries.splice(index, 1);
        break;
      }
    }
  }

  addEntry(entry: entry) {
    this.entries.push(entry);
  }
}
