import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Question } from '../models/question.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CorrectAnswerComponent } from '../correct-answer/correct-answer.component';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent implements OnInit {

  questions: Question[];

  currentQuestion: Question;

  currentQuestionIndex: number = 0;

  constructor(
    private questionService: QuestionService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.questionService.getAll().subscribe(data => {
      this.questions = data;
      this.currentQuestion = this.questions[this.currentQuestionIndex++];
    });
  }

  nextQuestion(index: number = -1) {
    const isCorrect = this.currentQuestion.answers[index].isCorrect;

    if(isCorrect) {
      this.dialog.open(CorrectAnswerComponent, {
        width: '400px',
        data: {
          isCorrect: isCorrect,
          question: this.currentQuestion
        },
        backdropClass: 'bg-success',
        disableClose: true
      }).afterClosed().subscribe(data => {
        this.endQuestions();
      });
    } else {
      this.snackBar.open("Грешен отговор", "OK", {
        duration: 2000,
        panelClass: 'bg-danger',
      });
    }
  }

  endQuestions() {
    if(this.questions.length > this.currentQuestionIndex) {
      this.currentQuestion = this.questions[this.currentQuestionIndex++];
    } else if(this.questions.length === this.currentQuestionIndex) {
      this.snackBar.open("Преминахте всички нива", "OK", {
        duration: 2000
      });
    }
  }
}
