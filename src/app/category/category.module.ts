import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DismissCategoryComponent } from './dismiss-category/dismiss-category.component';
import { MatRippleModule } from '@angular/material/core';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ListCategoriesComponent,
    DismissCategoryComponent,
    EditCategoryComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule
  ],
  entryComponents: [
    ListCategoriesComponent,
    DismissCategoryComponent,
    EditCategoryComponent
  ]
})
export class CategoryModule { }
