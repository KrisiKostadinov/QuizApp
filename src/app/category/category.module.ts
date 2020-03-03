import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DismissCategoryComponent } from './dismiss-category/dismiss-category.component';



@NgModule({
  declarations: [
    ListCategoriesComponent,
    DismissCategoryComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [
    ListCategoriesComponent,
    DismissCategoryComponent
  ]
})
export class CategoryModule { }
