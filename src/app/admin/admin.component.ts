import { Component, OnInit } from '@angular/core';
import { AddQuestionComponent } from '../question/add-question/add-question.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  addQuestion() {
    this.dialog.open(AddQuestionComponent, {
      width: '700px',
      backdropClass: 'bg-primary'
    });
  }

}
