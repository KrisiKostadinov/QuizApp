import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionService } from './services/question.service';
import { AllQuestionsComponent } from './all-questions/all-questions.component';
import { CorrectAnswerComponent } from './correct-answer/correct-answer.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AllQuestionsComponent,
    CorrectAnswerComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  providers: [
    QuestionService
  ],
  entryComponents: [
    CorrectAnswerComponent
  ]
})
export class QuestionModule { }
