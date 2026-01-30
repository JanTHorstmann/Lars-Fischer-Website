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

  formatDateRange(start: Date, end: Date): string {
    const sameDay =
      start.getFullYear() === end.getFullYear() &&
      start.getMonth() === end.getMonth() &&
      start.getDate() === end.getDate();

    const datePipe = new Intl.DateTimeFormat('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    const timePipe = new Intl.DateTimeFormat('de-DE', {
      hour: '2-digit',
      minute: '2-digit',
    });

    if (sameDay) {
      return `${datePipe.format(start)} · ${timePipe.format(start)}–${timePipe.format(end)}`;
    }

    return `${datePipe.format(start)} · ${timePipe.format(start)} → ${datePipe.format(end)} · ${timePipe.format(end)}`;
  }
}
