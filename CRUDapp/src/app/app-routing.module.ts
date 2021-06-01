import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailsComponent } from './components/add-details/add-details.component';
import { BookListComponent } from './components/add-list/add-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'Add-book', pathMatch: 'full' },
  { path: 'Add-book', component: AddBookComponent },
  { path: 'edit-book/:id', component: BookDetailsComponent },
  { path: 'book-list', component: BookListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent = [
  AddBookComponent,
  BookDetailsComponent,
  BookListComponent,
];
