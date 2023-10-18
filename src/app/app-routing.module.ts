import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/account/login/login.component';
import { ProfileComponent } from './components/pages/account/profile/profile.component';
import { RegisterComponent } from './components/pages/account/register/register.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home-page',
  },
  { path: 'home-page', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile/:username', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
