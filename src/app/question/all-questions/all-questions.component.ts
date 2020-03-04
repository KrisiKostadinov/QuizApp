import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Question } from '../models/question.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CorrectAnswerComponent } from '../correct-answer/correct-answer.component';
import { IncorrectAnswerComponent } from '../incorrect-answer/incorrect-answer.component';
import { Category } from 'src/app/category/models/category.model';
import { CategoryService } from 'src/app/category/services/category.service';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent implements OnInit {

  questions: Question[];

  currentQuestion: Question;

  currentQuestionIndex: number = 0;

  categories: Category[];

  isSelectedCategory: boolean = false;
  selectedCategory: Category;

  constructor(
    private questionService: QuestionService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
    });
  }

  selectCategory(index: number) {
    this.isSelectedCategory = true;
    this.selectedCategory = this.categories[index];
    this.questionService.getAllByCategory(this.selectedCategory.id).subscribe(data => {
      this.questions = data;
      this.currentQuestion = this.questions[this.currentQuestionIndex++];
    });
  }

  wasCategory() {
    this.isSelectedCategory = true;
    this.getAll();
  }

  getAll() {
    const subscription = this.questionService.getAll().subscribe(data => {
      subscription.unsubscribe();

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
      this.dialog.open(IncorrectAnswerComponent, {
        width: '400px',
        data: {
          isCorrect: isCorrect,
          question: this.currentQuestion
        },
        backdropClass: 'bg-danger',
        disableClose: true
      }).afterClosed().subscribe(data => {
        this.endQuestions();
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
