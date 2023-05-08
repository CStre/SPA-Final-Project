import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Booking } from '../booking';
import { RegistrationService } from '../registation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private registrationService: RegistrationService) { }

  booking: Booking = new Booking(0);

  // form controls

  showFirstSection = true;
  showSecondSection = false;
  showThirdSection = false;
  showFourthSection = false;

  ngOnInit() {
    this.showFirstSection = true;
    this.showSecondSection = false;
    this.showThirdSection = false;
    this.showFourthSection = false;
  }

  showSecond() {
    this.showFirstSection = false;
    this.showSecondSection = true;
    this.showThirdSection = false;
    this.showFourthSection = false;
  }

  showThird() {
    this.showFirstSection = false;
    this.showSecondSection = false;
    this.showThirdSection = true;
    this.showFourthSection = false;
  }

  showFourth() {
    this.showFirstSection = false;
    this.showSecondSection = false;
    this.showThirdSection = false;
    this.showFourthSection = true;
  }

  // residence halls arrays

  gendTradHalls = ['White Hall', 'Belk Hall', 'Cannon Hall', 'Cone Hall', 'Dogwood Hall', 'Doughton Hall', 'Elkstone Hall', 'Frank Hall'];
  tradHalls = ['Belk Hall', 'Cannon Hall', 'Cone Hall', 'Dogwood Hall', 'Doughton Hall', 'Elkstone Hall', 'Frank Hall'];
  hotelHalls = ['Mountain Laurel Hall', 'Sleep Inn', 'Mountaineer Hall'];
  suiteHalls = ['Laurel Creek Hall', 'Living Learning Center (LLC)', 'Newland Hall', 'New River Hall', 'Raven Rocks', 'Summit Hall', 'Thunder Hill'];
  apartHalls = ['Appalachian Heights', 'New River Hall', 'Raven Rocks', 'Thunder Hill', 'Laurel Creek Hall'];

  // parking arrays

  frParking = ['Appalachian 105'];
  upperParking = ['Appalachian 105', 'Greenwood Lot', 'South Lot', 'Hill Street', 'Blue Ridge Parking Deck', 'River Street Parking Deck'];
  aphParking = ['Appalachian Heights Lot'];
  mtrParking = ['Mountaineer Lot'];
  mtlParking = ['Mountain Laurel Lot'];

  // Generates an array of random room names for the Appalachian Heights res hall.
  // The array length is a random number between 5 and 75.
  // Each room name has the format "Appalachian Heights RM__XYZ", where:
  // - YZ is a 2-digit number between 0 and 55, padded with leading zeroes if necessary.
  // - The "__" is followed by a digit being the X between 1 and 3, chosen randomly.
  // finally the section number is in the format "-#" where the number is 1 - 4 since
  // in a appartment style there is 4 people per room.

  // Generate an array of random room names for the "Appalachian Heights" location
  rooms_app = Array.from({ length: Math.floor(Math.random() * 75) + 5 }, () => {
    // Generate a random room number between 0 and 55
    const roomNum = Math.floor(Math.random() * 56);
    // Generate a random integer between 1 and 3 to determine the floor the room is on
    const rand = Math.floor(Math.random() * 3) + 1;
    // Generate a random room section between 1 and 4 to determine the side since it is a
    // appartment style, there is 4 people per room number
    const sec = Math.floor(Math.random() * 4) + 1
    // Construct the room name with the room type, number (padded with zeroes if necessary)
    // and section number
    return `Appalachian Heights RM__${rand}${roomNum.toString().padStart(2, '0')}-${sec}`;
  });


  rooms_belk = Array.from({ length: Math.floor(Math.random() * 75) + 5 }, () => {
    const roomNum = Math.floor(Math.random() * 56);
    const rand = Math.floor(Math.random() * 4) + 1;
    const sec = Math.floor(Math.random() * 2) + 1
    return `Belk RM__${rand}${roomNum.toString().padStart(2, '0')}-${sec}`;
  });

  rooms_cannon = Array.from({ length: Math.floor(Math.random() * 75) + 5 }, () => {
    const roomNum = Math.floor(Math.random() * 56);
    const rand = Math.floor(Math.random() * 6) + 1;
    const sec = Math.floor(Math.random() * 2) + 1
    return `Cannon RM__${rand}${roomNum.toString().padStart(2, '0')}-${sec}`;
  });

  rooms_cone = Array.from({ length: Math.floor(Math.random() * 75) + 5 }, () => {
    const roomNum = Math.floor(Math.random() * 56);
    const rand = Math.floor(Math.random() * 7) + 1;
    const sec = Math.floor(Math.random() * 2) + 1
    return `Cone RM__${rand}${roomNum.toString().padStart(2, '0')}-${sec}`;
  });

  rooms_dog = Array.from({ length: Math.floor(Math.random() * 75) + 5 }, () => {
    const roomNum = Math.floor(Math.random() * 56);
    const rand = Math.floor(Math.random() * 6) + 1;
    const sec = Math.floor(Math.random() * 2) + 1
    return `Dogwood RM__${rand}${roomNum.toString().padStart(2, '0')}-${sec}`;
  });


  rooms_dough = Array.from({ length: Math.floor(Math.random() * 75) + 5 }, () => {
    const roomNum = Math.floor(Math.random() * 56);
    const rand = Math.floor(Math.random() * 6) + 1;
    const sec = Math.floor(Math.random() * 2) + 1
    return `Doughton RM__${rand}${roomNum.toString().padStart(2, '0')}-${sec}`;
  });

  rooms_elk = Array.from({ length: Math.floor(Math.random() * 75) + 5 }, () => {
    const roomNum = Math.floor(Math.random() * 56);
    const rand = Math.floor(Math.random() * 4) + 1;
    const sec = Math.floor(Math.random() * 2) + 1
    return `Elkstone RM__${rand}${roomNum.toString().padStart(2, '0')}-${sec}`;
  });

  rooms_frank = Array.from({ length: Math.floor(Math.random() * 75) + 5 }, () => {
    const roomNum = Math.floor(Math.random() * 56);
    const rand = Math.floor(Math.random() * 4) + 1;
    const sec = Math.floor(Math.random() * 2) + 1
    return `Frank RM__${rand}${roomNum.toString().padStart(2, '0')}-${sec}`;
  });

  rooms_laurel = Array.from({ length: Math.floor(Math.random() * 75) + 5 }, () => {
    const roomNum = Math.floor(Math.random() * 56);
    const rand = Math.floor(Math.random() * 4) + 1;
    const sec = Math.floor(Math.random() * 4) + 1
    return `Laurel Creek RM__${rand}${roomNum.toString().padStart(2, '0')}-${sec}`;
  });

  rooms_mount = Array.from({ length: Math.floor(Math.random() * 75) + 5 }, () => {
    const roomNum = Math.floor(Math.random() * 56);
    const rand = Math.floor(Math.random() * 3) + 1;
    const sec = Math.floor(Math.random() * 2) + 1
    return `Mountaineer RM__${rand}${roomNum.toString().padStart(2, '0')}-${sec}`;
  });

  rooms_newland = Array.from({ length: Math.floor(Math.random() * 75) + 5 }, () => {
    const roomNum = Math.floor(Math.random() * 56);
    const rand = Math.floor(Math.random() * 2) + 1;
    const sec = Math.floor(Math.random() * 4) + 1
    return `Newland RM__${rand}${roomNum.toString().padStart(2, '0')}-${sec}`;
  });

  rooms_newriver = Array.from({ length: Math.floor(Math.random() * 75) + 5 }, () => {
    const roomNum = Math.floor(Math.random() * 56);
    const rand = Math.floor(Math.random() * 5) + 1;
    const sec = Math.floor(Math.random() * 4) + 1
    return `New River RM__${rand}${roomNum.toString().padStart(2, '0')}-${sec}`;
  });

  rooms_raven = Array.from({ length: Math.floor(Math.random() * 75) + 5 }, () => {
    const roomNum = Math.floor(Math.random() * 56);
    const rand = Math.floor(Math.random() * 4) + 1;
    const sec = Math.floor(Math.random() * 4) + 1
    return `Raven Rocks RM__${rand}${roomNum.toString().padStart(2, '0')}-${sec}`;
  });

  rooms_sleep = Array.from({ length: Math.floor(Math.random() * 75) + 5 }, () => {
    const roomNum = Math.floor(Math.random() * 56);
    const rand = Math.floor(Math.random() * 2) + 1;
    const sec = Math.floor(Math.random() * 2) + 1
    return `Sleep Inn RM__${rand}${roomNum.toString().padStart(2, '0')}-${sec}`;
  });

  rooms_summit = Array.from({ length: Math.floor(Math.random() * 75) + 5 }, () => {
    const roomNum = Math.floor(Math.random() * 56);
    const rand = Math.floor(Math.random() * 8) + 1;
    const sec = Math.floor(Math.random() * 2) + 1
    return `Summit RM__${rand}${roomNum.toString().padStart(2, '0')}-${sec}`;
  });

  rooms_thunder = Array.from({ length: Math.floor(Math.random() * 75) + 5 }, () => {
    const roomNum = Math.floor(Math.random() * 56);
    const rand = Math.floor(Math.random() * 4) + 1;
    const sec = Math.floor(Math.random() * 4) + 1
    return `Thunder Hill RM__${rand}${roomNum.toString().padStart(2, '0')}-${sec}`;
  });

  rooms_white = Array.from({ length: Math.floor(Math.random() * 75) + 5 }, () => {
    const roomNum = Math.floor(Math.random() * 56);
    const rand = Math.floor(Math.random() * 6) + 1;
    const sec = Math.floor(Math.random() * 2) + 1
    return `White RM__${rand}${roomNum.toString().padStart(2, '0')}-${sec}`;
  });

  rooms_trans = Array.from({ length: Math.floor(Math.random() * 75) + 5 }, () => {
    const roomNum = Math.floor(Math.random() * 56);
    const rand = Math.floor(Math.random() * 5) + 1;
    const sec = Math.floor(Math.random() * 2) + 1
    return `Mountain Laurel RM__${rand}${roomNum.toString().padStart(2, '0')}-${sec}`;
  });

  rooms_llc = Array.from({ length: Math.floor(Math.random() * 75) + 5 }, () => {
    const roomNum = Math.floor(Math.random() * 56);
    const rand = Math.floor(Math.random() * 4) + 1;
    const sec = Math.floor(Math.random() * 2) + 1
    return `LLC RM__${rand}${roomNum.toString().padStart(2, '0')}-${sec}`;
  });

  addBooking1(form: NgForm) {
    this.booking.name = form.value.name,
    this.booking.banner = form.value.banner,
    this.booking.email = form.value.email,
    this.booking.pronouns = form.value.pronouns,
    this.booking.classification = form.value.classification,
    this.booking.semester = form.value.semester,
    console.log(form.value.name)
    this.showSecond();
  }

  addBooking2(form: NgForm) {
    this.booking.resident = form.value.resident,
    this.booking.style = form.value.style,
    this.booking.hall = form.value.hall,
    this.booking.room = form.value.room
    this.showThird();
  }

  addBooking3(form: NgForm) {
    this.booking.meals = form.value.meals
    this.showFourth();
  }

  addBooking(form: NgForm) {
    this.booking.parking = form.value.parking;
    this.booking.lot = form.value.lot;

    this.registrationService.addBook(this.booking);
  }

}



