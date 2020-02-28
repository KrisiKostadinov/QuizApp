import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { AddQuestionComponent } from '../question/add-question/add-question.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = "QUIZ";

  constructor(
    private auth: AuthService) { }

  ngOnInit() {
  }
}