import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Question } from '../models/question.model';
import { Answer } from '../models/answer.model';
import { QuestionService } from '../services/question.service';
import { StatusQuestionComponent } from '../status-question/status-question.component';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  addForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  answers: Answer[] = [];
  content: string;
  isCorrect: boolean = false;
  question: Question;

  constructor(
    private dialogRef: MatDialogRef<any>,
    private snackBar: MatSnackBar,
    private questionService: QuestionService,
    private dialog: MatDialog) { }

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
      this.question = {
        title: this.addForm.value.title,
        answers: this.answers,
        description: this.addForm.value.description
      }
      this.snackBar.open("Добавяне на въпроса", "OK", {
        duration: 2000
      });

      this.questionService.addQuestion(this.question).then(data => {
        this.addForm.reset();
        
        this.answers = [];
        this.snackBar.open("Въпросът е добавен успешно!", "OK", {
          duration: 2000
        });
      });
    }
  }

  statusQuestion() {
    this.dialog.open(StatusQuestionComponent, {
      width: '700px',
      data: {
        title: this.addForm.value.title,
        answers: this.answers,
        description: this.addForm.value.description
      },
      backdropClass: 'bg-primary'
    });
  }
}