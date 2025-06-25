import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  currentForm: 'login' | 'signup' = 'login'; 

  loginData = { email: '', password: '' };
  signupData = { email: '', password: '', confirmPassword: '' };

  toggleForm(formType: 'login' | 'signup') {
    this.currentForm = formType;
  }

  onLogin() {
    console.log('Formulaire de connexion soumis:', this.loginData);
  
  }

  onSignup() {
    console.log('Formulaire d\'inscription soumis:', this.signupData);
   
  }

  onGoogleLogin() {
  console.log("Connexion avec Google (à implémenter)");
}


}
