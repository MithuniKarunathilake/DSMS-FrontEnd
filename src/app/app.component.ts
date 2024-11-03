import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { MainComponent } from './pages/main/main.component';
import { SignupComponent } from './pages/registration/signup/signup.component';
import { LoginComponent } from './pages/registration/login/login.component';
import { ForgotPasswordComponent } from './pages/registration/forgot-password/forgot-password.component';
import { NavbarComponent } from './common/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ForgotPasswordComponent,LoginComponent,SignupComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DSMS';
}
