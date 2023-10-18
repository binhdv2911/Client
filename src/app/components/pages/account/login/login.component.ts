import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  users: Users[] = [];
  loginForm!: FormGroup;
  user!: any;
  // token: any;
  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private router: Router,
    public userService: UsersService,
    private fb: FormBuilder
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
    userService.getUser().subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    this.userService.login(this.loginForm.value).subscribe(
      (res) => {
        console.log('Success', res);
        if (res && res.token) {
          localStorage.setItem('_sa', res.token);
          this.user = res;
          this.router.navigate(['/home-page']);
          this.modalService.dismissAll();
        }
      },
      (error) => {
        console.error('Login Failed', error);
      }
    );
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  redirectToRegister() {
    this.modalService.dismissAll();
    this.router.navigate(['/register']);
  }
}
