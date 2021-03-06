import { Component, OnInit, Inject } from '@angular/core';
import { Category } from '../models/category.model';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from '../services/category.service';
import { ListCategoriesComponent } from '../list-categories/list-categories.component';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  addForm = new FormGroup({
    title: new FormControl('', [Validators.required])
  });

  constructor(
    public dialogRef: MatDialogRef<Category>,
    @Inject(MAT_DIALOG_DATA) public data: Category,
    private snackBar: MatSnackBar,
    private categoryService: CategoryService,
    private dialog: MatDialog) { }

  ngOnInit() {
  }

  addCategory() {
    if(this.addForm.valid) {
      this.snackBar.open("Добавяне на категорията", "OK", {
        duration: 2000
      });

      const category: Category = {
        title: this.addForm.value.title,
        questions: []
      }

      this.categoryService.addCategory(category).then(data => {
        this.snackBar.open("категорията беше добавена успешно!", "OK", {
          duration: 2000
        });

        this.showAll();
      });
    }
  }

  showAll() {
    this.dialog.open(ListCategoriesComponent, {
      width: '400px',
      backdropClass: 'bg-primary',
      disableClose: true
    });
  }
}
