import { Component, OnInit } from '@angular/core';
import { InstanceService } from '../instance.service';

export interface VolumeInfo {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
}

export interface BookItem {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  searchText :string = '';
  books: BookItem[] = [];
  constructor(
    private instance: InstanceService,
    ) { }

  ngOnInit(): void {
    this.getAllDetails();
  }
  getAllDetails(){
    this.instance.getBooksDetails().subscribe({
      next:(data:any)=>{
        console.log(data.items)
        this.books = data.items;
        },
        error: (error:any) => {
          console.error('Error:', error.message)
      }
    })
  }
  get filteredBooks() {
    // If searchText is empty, return all books
    if (!this.searchText.trim()) {
      return this.books;
    }

    const searchTextLower = this.searchText.toLowerCase();
    return this.books.filter(book => 
      book.volumeInfo.title.toLowerCase().includes(searchTextLower) ||
      book.volumeInfo.publisher.toLowerCase().includes(searchTextLower) ||
      book.volumeInfo.publishedDate.toLowerCase().includes(searchTextLower)
    );
  }
}
