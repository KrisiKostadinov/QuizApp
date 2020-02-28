import { Component, OnInit, Inject } from '@angular/core';
import { Question } from '../models/question.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-status-question',
  templateUrl: './status-question.component.html',
  styleUrls: ['./status-question.component.css']
})
export class StatusQuestionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Question>,
    @Inject(MAT_DIALOG_DATA) public data: Question) { }

  ngOnInit() {
  }

}
