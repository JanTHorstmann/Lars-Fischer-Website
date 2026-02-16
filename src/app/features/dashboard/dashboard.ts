import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Introduction } from '../introduction/introduction';
import { UpcomingDates } from '../upcoming-dates/upcoming-dates';
import { Footer } from '../../shared/components/footer/footer';
import { PreviewVideos } from "../preview-videos/preview-videos";
import { InstrumentSelection } from "../instrument-selection/instrument-selection";

@Component({
  selector: 'app-dashboard',
  imports: [
    Navbar,
    Introduction,
    UpcomingDates,
    Footer,
    PreviewVideos,
    InstrumentSelection
],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
