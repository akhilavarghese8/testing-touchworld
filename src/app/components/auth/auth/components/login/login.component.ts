import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;  // Declare the FormGroup
  passwordVisible: boolean = false;
  errorMessage: string = '';

  constructor(private router: Router) {
    // Initialize the form group
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  // Submit form
  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      // Check if the credentials are valid
      if (username === 'touchworld' && password === 'touchworldTech') {
        // Store the role in sessionStorage
        sessionStorage.setItem('role', 'admin'); 

        // Redirect to the employee list page
        this.router.navigate(['/employee']);
      } else {
        // Show error if credentials are incorrect
        this.errorMessage = 'Invalid username or password';
      }
    }
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
