import { Users } from 'src/app/models/users';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { ProfileResponse } from 'src/app/models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  userProfile!: ProfileResponse;
  username!: string | null;
  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.username = params.get('username');
      if (this.username) {
        this.userService.getProfile(this.username).subscribe(
          (res: ProfileResponse) => {
            this.userProfile = res;
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        console.log('Error: Username not available');
      }
    });
  }
}
