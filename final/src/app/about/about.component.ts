import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  aboutData = {
    title: "Your Student Portal",
    description: {
      intro: "This is where you can sign up for your housing accomidations for next semester, decide on your meal plan, and purchase optional parking.\nFollow the following steps to register: ",
      purposes: [
        "View previous bookings on the Bookings tab.",
        "Select your room, meal plan, and parking on the Register tab.",
        "Check your current bill information on the Billings tab."
      ],
      outro: `If you are able to register, than this means you have no holds on your account and owe nothing from any previous
      seemster. If you would like more information, follow the links provided below`
    },
    links: [
      {name: "Residence Halls", href: "https://housing.appstate.edu/halls"},
      {name: "Meal Plans", href: "https://dining.appstate.edu/meal-plans"},
      {name: "Student Parking", href: "https://parking.appstate.edu/"},
      {name: "TouchNet Billing", href: "https://appalnet.appstate.edu/"},
    ]
  };
}
