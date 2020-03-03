import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Category } from '../models/category.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export class EditCategory {
  category: Category;
}

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  editForm = new FormGroup({
    title: new FormControl(this.data.category.title, [Validators.required])
  });
  
  constructor(public dialogRef: MatDialogRef<EditCategory>,
    @Inject(MAT_DIALOG_DATA) public data: EditCategory,
    private categoryService: CategoryService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  editCategory() {
    if(this.editForm.valid) {
      this.snackBar.open("Редактиране на категорията", "OK", {
        duration: 2000
      });

      const category: Category = {
        title: this.editForm.value.title,
        questions: this.data.category.questions
      }

      this.categoryService.editCategory(this.data.category.id, category).then(data => {
        this.dialogRef.close();
        this.snackBar.open("Категорията беше редактирана успешно!", "OK", {
          duration: 2000
        });
      });
    }
  }
}