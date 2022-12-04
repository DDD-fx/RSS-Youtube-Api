import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { passwordValidator } from '../../../shared/utils';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, passwordValidator]),
  });

  constructor(private readonly router: Router, private readonly authService: AuthService) {}

  onLogIn() {
    if (this.loginForm.valid) {
      localStorage.setItem('token', 'test-token');
      this.authService.onLogIn();
      void this.router.navigate(['home']);
    }
  }

  checkErrorsLength(errors: ValidationErrors | undefined | null): number {
    if (errors) return Object.keys(errors).length;
    return 0;
  }
}
