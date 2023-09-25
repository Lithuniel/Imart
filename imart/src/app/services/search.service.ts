import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchTerm: string = '';

  constructor() { }

  setSearchTerm(term: string) {
    this.searchTerm = term;
  }

  getSearchTerm(): string {
    return this.searchTerm;
  }
}