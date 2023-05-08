import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { BookingsComponent } from './booking/bookings/bookings.component';
import { DetailsComponent } from './booking/details/details.component';
import { RegistrationComponent } from './booking/registration/registration.component';
import { PaymentComponent } from './booking/payment/payment.component';
import { PresentationComponent } from './presentation/presentation.component';

const routes: Routes = [
{path: '', redirectTo: 'bookings', pathMatch: 'full'},
{path: 'about', component: AboutComponent},
{path: 'bookings', component: BookingsComponent},
{path: 'bookings/new', component: RegistrationComponent},
{path: 'bookings/payment', component: PaymentComponent},
{path: 'presentation', component: PresentationComponent},
{path: 'booking/details/:semester', component: DetailsComponent},
{path: '**', redirectTo: 'bookings', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AngularRoutingModule {

}
