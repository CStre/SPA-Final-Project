import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Booking } from '../booking';
import { RegistrationService } from '../registation.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  bookings?: Booking;

  constructor(private registrationService: RegistrationService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const semester = params['semester'];
      this.bookings = this.registrationService.getBookingBySemester(semester);
      if (!this.bookings) {
        this.router.navigate(['/bookings']);
      }
    });
  }
}
