import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Question } from '../models/question.model';
import { Answer } from '../models/answer.model';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  addForm = new FormGroup({
    title: new FormControl('', [Validators.required])
  });

  answers: Answer[] = [];
  content: string;
  isCorrect: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<any>,
    private snackBar: MatSnackBar,
    private questionService: QuestionService) { }

  ngOnInit() {
  }

  closeWindow() {
    this.dialogRef.close();
  }

  addAnswer() {
    const answer: Answer = {
      content: this.content,
      isCorrect: this.isCorrect
    }

    this.answers.push(answer);

    this.content = "";
    this.isCorrect = false;
  }

  addQuestion() {
    if(this.addForm.valid) {
      const question: Question = {
        title: this.addForm.value.title,
        answers: this.answers
      }
      this.snackBar.open("Добавяне на въпроса", "OK", {
        duration: 2000
      });

      this.questionService.addQuestion(question).then(data => {
        this.addForm.reset();
        this.snackBar.open("Въпросът е добавен успешно!", "OK", {
          duration: 2000
        });
      });
    }
  }
}
