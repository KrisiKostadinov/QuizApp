import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Question } from '../models/question.model';

export class CorrectAnswer {
  isCorrect: boolean;
  question: Question;
}

@Component({
  selector: 'app-correct-answer',
  templateUrl: './correct-answer.component.html',
  styleUrls: ['./correct-answer.component.css']
})
export class CorrectAnswerComponent implements OnInit {

  constructor(dialogRef: MatDialogRef<CorrectAnswer>,
    @Inject(MAT_DIALOG_DATA) public data: CorrectAnswer) { }

  ngOnInit() {
  }

}
