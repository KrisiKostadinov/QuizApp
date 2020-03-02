import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { RemoveQuestionComponent } from '../remove-question/remove-question.component';
import { Question } from '../models/question.model';
import { EditQuestionComponent } from '../edit-question/edit-question.component';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.css']
})
export class ListQuestionsComponent implements OnInit {

  questions: Question[];
  isShowAll: boolean = true;

  question: Question;
  
  constructor(
    private questionService: QuestionService,
    private dialogRef: MatDialogRef<any>,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.questionService.getAll().subscribe(data => {
      this.questions = data;
    });
  }

  showQuestion(id: string) {
    this.question = null;
    this.isShowAll = false;
    const subscription = this.questionService.getById(id).subscribe(data => {
      subscription.unsubscribe();
      this.question = data as Question;
      this.question.id = id;
    });
  }

  showAll() {
    this.isShowAll = true;
  }

  editQuestion() {
    this.dialog.open(EditQuestionComponent, {
      width: '400px',
      data: {
        question: this.question
      },
      backdropClass: 'bg-primary',
      disableClose: true
    });
  }

  removeQuestion() {
    this.dialog.open(RemoveQuestionComponent, {
      width: '400px',
      data: {
        question: this.question
      },
      backdropClass: 'bg-danger',
      disableClose: true
    }).afterClosed().subscribe(data => {
      if(data) {
        this.dialogRef.close();
      }
    });
  }

  closeWindow() {
    this.dialogRef.close();
  }
}