import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [ AuthService ],
  bootstrap: []
})
export class AuthModule { }
