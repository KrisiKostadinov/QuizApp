import { NgModule } from '@angular/core';
import { AddQuestionComponent } from '../question/add-question/add-question.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminComponent } from './admin.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { QuestionService } from '../question/services/question.service';
import { StatusQuestionComponent } from '../question/status-question/status-question.component';
import { CommonModule } from '@angular/common';
import { EditQuestionComponent } from '../question/edit-question/edit-question.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddCategoryComponent } from '../category/add-category/add-category.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AddQuestionComponent,
    AdminComponent,
    StatusQuestionComponent,
    EditQuestionComponent,
    AddCategoryComponent
  ],
  imports: [
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatCheckboxModule,
    CommonModule,
    MatTooltipModule,
    MatButtonModule
  ],
  exports: [
    AdminComponent
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
      AddQuestionComponent,
      StatusQuestionComponent,
      EditQuestionComponent,
      AddCategoryComponent
  ]
})
export class AdminModule { }
