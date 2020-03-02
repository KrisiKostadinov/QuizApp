import { Component, OnInit, Inject } from '@angular/core';
import { Question } from '../models/question.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Answer } from '../models/answer.model';
import { QuestionService } from '../services/question.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export class EditQuestion {
  question: Question;
}
@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {

  editForm = new FormGroup({
    title: new FormControl(this.data.question.title, [Validators.required]),
    description: new FormControl(this.data.question.description, [Validators.required])
  });

  content: string;
  isCorrect: boolean = false;
  question: Question = this.data.question;

  constructor(
    public dialogRef: MatDialogRef<EditQuestion>,
    @Inject(MAT_DIALOG_DATA) public data: EditQuestion,
    private questionService: QuestionService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  addAnswer() {
    const answer: Answer = {
      content: this.content,
      isCorrect: this.isCorrect
    }

    this.question.answers.push(answer);

    this.content = "";
    this.isCorrect = false;
  }

  editQuestion() {
    this.question.title = this.editForm.value.title;
    this.question.description = this.editForm.value.description;

    if(this.editForm.valid) {
      this.snackBar.open("Въпросът се редактира", "OK", {
        duration: 2000
      });
      this.questionService.editQuestion(this.question.id, this.question).then(data => {
        this.dialogRef.close();
        this.snackBar.open("Въпросът е редактиран успешно!", "OK", {
          duration: 2000
        });
      });
    }
  }

  removeAnswer(index: number) {
    this.question.answers.splice(index, 1);
  }

  closeWindow() {
    this.dialogRef.close();
  }

}
