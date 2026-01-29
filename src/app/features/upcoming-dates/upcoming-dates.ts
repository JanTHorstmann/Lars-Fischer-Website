import { Component, inject } from '@angular/core';
import { MusicSchoolDataService } from '../../shared/services/musicschool-data.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from "@angular/common"

@Component({
  selector: 'app-upcoming-dates',
  imports: [
    DatePipe,
  ],
  templateUrl: './upcoming-dates.html',
  styleUrl: './upcoming-dates.scss',
})
export class UpcomingDates {
  
  public musicSchoolDataService = inject(MusicSchoolDataService)
  dates = this.musicSchoolDataService.upcomingDates;
}
