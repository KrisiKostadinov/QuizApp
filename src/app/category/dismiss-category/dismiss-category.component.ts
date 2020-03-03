import { Component, OnInit, Inject } from '@angular/core';
import { Category } from '../models/category.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from '../services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export class DismissCategory {
  category: Category;
}

@Component({
  selector: 'app-dismiss-category',
  templateUrl: './dismiss-category.component.html',
  styleUrls: ['./dismiss-category.component.css']
})
export class DismissCategoryComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DismissCategory>,
    @Inject(MAT_DIALOG_DATA) public data: DismissCategory,
    private categoryService: CategoryService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  back() {
    this.dialogRef.close();
  }

  dismissCategory() {
    this.snackBar.open("Изтриване на категорията", "OK", {
      duration: 2000
    });

    this.categoryService.dismissCategory(this.data.category.id).then(data => {
      this.snackBar.open("Категорията беше изтрита успешно!", "OK", {
        duration: 2000
      });
      this.dialogRef.close();
    });
  }

}
