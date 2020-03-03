import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  categories: Category[] = null;

  constructor(
    private categiryService:CategoryService,
    private dialogRef: MatDialogRef<Category>) { }

  ngOnInit() {
    this.categiryService.getAll().subscribe(data => {
      this.categories = data;
    });
  }

  back() {
    this.dialogRef.close();
  }
}
