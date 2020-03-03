import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DismissCategoryComponent } from '../dismiss-category/dismiss-category.component';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  categories: Category[];
  category: Category;
  isAll: boolean = true;

  constructor(
    private categoryService: CategoryService,
    private dialogRef: MatDialogRef<Category>,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.showAll();
  }

  back() {
    this.dialogRef.close();
  }

  showAll() {
    this.isAll = true;

    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
    });
  }

  getById(id: string) {
    this.isAll = false;

    const subscription = this.categoryService.getById(id).subscribe(data => {
      subscription.unsubscribe();
      this.category = data as Category;
      this.category.id = id;
    });
  }

  dismissCategory(id: string) {
    this.dialog.open(DismissCategoryComponent, {
      width: '700px',
      data: {
        category: this.category
      },
      disableClose: true,
      backdropClass: 'bg-danger'
    });
    this.showAll();
  }

  editCategory(id: string) {

  }
}