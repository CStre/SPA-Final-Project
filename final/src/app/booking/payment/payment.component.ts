import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { RegistrationService } from '../registation.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {

  bookings: Array<Booking> = [];

  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.bookings = this.registrationService.getBooks();;
  }


}
