import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css'],
})
export class BookListComponent implements OnInit {
  Books: any = [];
  constructor(private CrudService: CrudService) {}

  ngOnInit(): void {
    this.CrudService.GetBooks().subscribe((res) => {
      console.log(res);
      this.Books = res;
    });
  }

  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Do you want to go ahead?')) {
      this.CrudService.deleteBook(id).subscribe((res) => {
        this.Books.splice(i, 1);
      });
    }
  }
}
