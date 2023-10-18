import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  token!: string | null;
  constructor() {
    this.token = localStorage.getItem('_sa');
  }
}
