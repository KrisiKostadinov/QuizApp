import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Question } from '../models/question.model';
import { Answer } from '../models/answer.model';

export class IncorrectAnswer {
  isCorrect: boolean;
  question: Question;
}

@Component({
  selector: 'app-incorrect-answer',
  templateUrl: './incorrect-answer.component.html',
  styleUrls: ['./incorrect-answer.component.css']
})
export class IncorrectAnswerComponent implements OnInit {

  correctAnswers: Answer[];

  constructor(dialogRef: MatDialogRef<IncorrectAnswer>,
    @Inject(MAT_DIALOG_DATA) public data: IncorrectAnswer) { }

  ngOnInit() {
    this.correctAnswers = this.data.question.answers.filter(a => a.isCorrect === true);
  }
}
