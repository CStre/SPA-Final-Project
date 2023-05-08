import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  links = [
    {path: 'about', name: 'About'},
    {path: 'bookings', name: 'Bookings'},
    {path: 'bookings/new', name: 'Registration'},
    {path: 'bookings/payment', name: 'Payments'},
    {path: 'presentation', name: 'Presentation'}
  ];

  isLoggedIn = false;
  firstName = '';
  lastName = '';

  onSubmit() {
    if (this.firstName && this.lastName) {
      this.isLoggedIn = true;
    }
  }

}
