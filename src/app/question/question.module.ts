import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionService } from './services/question.service';
import { AllQuestionsComponent } from './all-questions/all-questions.component';
import { CorrectAnswerComponent } from './correct-answer/correct-answer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ListQuestionsComponent } from './list-questions/list-questions.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RemoveQuestionComponent } from './remove-question/remove-question.component';
import { IncorrectAnswerComponent } from './incorrect-answer/incorrect-answer.component';



@NgModule({
  declarations: [
    AllQuestionsComponent,
    CorrectAnswerComponent,
    ListQuestionsComponent,
    RemoveQuestionComponent,
    IncorrectAnswerComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [
    QuestionService
  ],
  entryComponents: [
    CorrectAnswerComponent,
    ListQuestionsComponent,
    RemoveQuestionComponent,
    IncorrectAnswerComponent
  ]
})
export class QuestionModule { }
