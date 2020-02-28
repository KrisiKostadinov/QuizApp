import { NgModule } from '@angular/core';
import { AddQuestionComponent } from '../question/add-question/add-question.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminComponent } from './admin.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { QuestionService } from '../question/services/question.service';

@NgModule({
  declarations: [
      AddQuestionComponent,
      AdminComponent
  ],
  imports: [
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatCheckboxModule
  ],
  exports: [
    AdminComponent
  ],
  providers: [ QuestionService ],
  bootstrap: [],
  entryComponents: [
      AddQuestionComponent
  ]
})
export class AdminModule { }
