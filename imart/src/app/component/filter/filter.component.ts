import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() filtersChanged = new EventEmitter<any>();

  authorFilter: string = '';
  dateFilter: string = '';

  applyFilters() {
    const filters = {
      author: this.authorFilter,
      date: this.dateFilter
    };
    this.filtersChanged.emit(filters);
  }
}
