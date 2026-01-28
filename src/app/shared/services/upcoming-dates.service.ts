import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UpcomingDate } from '../inerfaces/upcoming-date.interface';

@Injectable({
  providedIn: 'root',
})
export class UpcomingDatesService {
  private firestore = inject(Firestore);

  getUpcomingDates() {
    const ref = collection(this.firestore, 'upcoming_dates');
    return collectionData(ref, { idField: 'id' }) as Observable<UpcomingDate[]>;
  }
}
