import { NgModule } from '@angular/core';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, NgIf, NgClass],
  providers: [],
  bootstrap: [],
})
export class AuthModule {}
