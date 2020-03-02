import { Component, OnInit, Inject } from '@angular/core';
import { Question } from '../models/question.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-remove-question',
  templateUrl: './remove-question.component.html',
  styleUrls: ['./remove-question.component.css']
})
export class RemoveQuestionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Question>,
    @Inject(MAT_DIALOG_DATA) public data: Question,
    private snackBar: MatSnackBar,
    private questionService: QuestionService) { }

  ngOnInit() {
  }

  removeQuestion(id: string) {
    this.snackBar.open("Изтриване на този въпрос", "OK", {
      duration: 2000
    });
    this.questionService.removeQuestion(id).then(data => {
      this.snackBar.open("Въпросът е изтрит", "OK", {
        duration: 2000
      });
    });
  }

  back() {
    this.dialogRef.close();
  }
}