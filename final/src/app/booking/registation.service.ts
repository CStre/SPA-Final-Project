import { Injectable } from '@angular/core';
import { Booking } from "./booking";
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {

  constructor(private router: Router) { }

  addBook(bookings: Booking): void {
    let bookList: Booking[] = [];
    const booksString = localStorage.getItem('bookings');
    if (booksString !== null) {
      bookList = JSON.parse(booksString);
    }
    bookList.push(bookings);
    localStorage.setItem("bookings", JSON.stringify(bookList));
    this.router.navigate(['/bookings']);
  }

  getBooks(): Booking[] {
    const booksString = localStorage.getItem('bookings');
    if (booksString !== null) {
      return JSON.parse(booksString);
    }
    return [];
  }

  getBookingBySemester(semester: string): Booking | undefined {
    const booksString = localStorage.getItem('bookings');
    if (booksString !== null) {
      const bookings: Booking[] = JSON.parse(booksString);
      return bookings.find(booking => booking.semester === semester);
    }
    return undefined;
  }
}
