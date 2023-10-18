import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private userService: UsersService, private router: Router) {}
  registerForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    // confirmPassword: new FormControl(),
    fullname: new FormControl(),
    birthDate: new FormControl(),
    age: new FormControl(),
  });
  onSubmit() {
    const { username, password, fullname, birthDate, age } =
      this.registerForm.value;

    const newUser: Users = {
      username,
      password,
      fullname,
      birthDate,
      age,
    };

    this.userService.register(newUser).subscribe(
      () => {
        this.router.navigate(['/home-page']);
      },
      (error) => {
        console.log('Registration failed:', error);
      }
    );
  }
}
