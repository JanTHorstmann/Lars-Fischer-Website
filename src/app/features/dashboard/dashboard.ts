import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Introduction } from '../introduction/introduction';
import { UpcomingDates } from '../upcoming-dates/upcoming-dates';

@Component({
  selector: 'app-dashboard',
  imports: [
    Navbar,
    Introduction,
    UpcomingDates,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
