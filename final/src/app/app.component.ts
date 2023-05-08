import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;
  firstName = '';
  lastName = '';
  bannerId = '';


  onSubmit() {
    if (this.firstName && this.lastName && this.bannerId) {
      this.isLoggedIn = true;
    }
  }
}
