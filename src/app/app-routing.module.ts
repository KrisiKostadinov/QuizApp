import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllQuestionsComponent } from './question/all-questions/all-questions.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: '', component: AllQuestionsComponent },
  { path: 'all', component: AllQuestionsComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
