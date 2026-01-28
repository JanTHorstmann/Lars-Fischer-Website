import { Component, inject } from '@angular/core';
import { UpcomingDatesService } from '../../shared/services/upcoming-dates.service';
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
  
  public upcomingDateService = inject(UpcomingDatesService)
  
  dates = toSignal(this.upcomingDateService.getUpcomingDates(), {
    initialValue: []
  });
}
