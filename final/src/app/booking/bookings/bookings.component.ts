import { Component, OnInit }  from '@angular/core';
import { Booking } from '../booking';
import { RegistrationService } from '../registation.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})

export class BookingsComponent implements OnInit {
  bookings: Array<Booking> = [];

  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.bookings = this.registrationService.getBooks();
  }

  pronouns = ['He/Him', 'She/Her', 'They/Them', 'Other'];

  classifications = ['Freshman', 'Sophomore', 'Junior', 'Senior'];

  residents = ['Yes', 'No'];

  style = ['Traditional', 'Hotel', 'Suite', 'Apartment'];

  semesters = ['Spring 2023', 'Fall 2023', 'Spring 2024'];

  gendTradHalls = ['White Hall', 'Belk Hall', 'Cannon Hall', 'Cone Hall', 'Dogwood Hall', 'Doughton Hall', 'Elkstone Hall', 'Frank Hall'];
  tradHalls = ['Belk Hall', 'Cannon Hall', 'Cone Hall', 'Dogwood Hall', 'Doughton Hall', 'Elkstone Hall', 'Frank Hall'];
  hotelHalls = ['Mountain Laurel Hall', 'Sleep Inn', 'Mountaineer Hall'];
  suiteHalls = ['Laurel Creek Hall', 'Living Learning Center (LLC)', 'Newland Hall', 'New River Hall', 'Raven Rocks', 'Summit Hall', 'Thunder Hill' ];
  apartHalls = ['Appalachian Heights', 'New River Hall', 'Raven Rocks', 'Thunder Hill', 'Laurel Creek Hall'];

  fyMeals = ['All Access 7', 'Weekly 14'];
  upperMeals = ['All Access 5', 'Weekly 10', 'Weekly 7'];
  offCampMeals = ['Block 150', 'Block 100', 'Block 50'];

  parkings = ['Yes', 'No'];

  frParking = ['Appalachian 105'];
  upperParking = ['Appalachian 105', 'Greenwood Lot', 'South Lot', 'Hill Street', 'Blue Ridge Parking Deck', 'River Street Parking Deck'];
  aphParking = ['Appalachian Heights Lot'];
  mtrParking = ['Mountaineer Lot'];
  mtlParking = ['Mountain Laurel Lot'];

  rooms_app = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `AppalachianHeights RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_belk = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `Belk RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_cannon = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `Cannon RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_cone = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `Cone RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_dog = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `Dogwood RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_dough = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `Doughton RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_elk = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `Elkstone RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_frank = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `Frank RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_laurel = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `LaurelCreek RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_mount = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `Mountaineer RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_newland = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `NewLand RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_newriver = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `NewRiver RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_raven = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `RavenRocks RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_sleep = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `SleepInn RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_summit = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `Summit RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_thunder = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `ThunderHill RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_white = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `White RM__${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_trans = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `MountainLaurel RM_${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);
  rooms_llc = Array.from({ length: Math.floor(Math.random() * (75 - 5 + 1)) + 5 },
    () => `LivingLearningCenter RM_${Math.floor(Math.random() * 300).toString().padStart(3, '0')}`);

}
