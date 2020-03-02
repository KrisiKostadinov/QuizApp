import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.css']
})
export class ListQuestionsComponent implements OnInit {

  questions;
  isShowAll: boolean = true;

  question;
  constructor(
    private questionService: QuestionService,
    private dialogRef: MatDialogRef<any>) { }

  ngOnInit() {
    const subscription = this.questionService.getAll().subscribe(data => {
      subscription.unsubscribe();
      this.questions = data;
    });
  }

  showQuestion(id: string) {
    this.question = null;
    this.isShowAll = false;
    const subscription = this.questionService.getById(id).subscribe(data => {
      subscription.unsubscribe();
      this.question = data;
    });
  }

  showAll() {
    this.isShowAll = true;
  }

  editQuestion() {

  }

  removeQuestion() {

  }

  closeWindow() {
    this.dialogRef.close();
  }
  
}