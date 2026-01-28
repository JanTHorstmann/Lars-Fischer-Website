import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UpcomingDate } from '../inerfaces/upcoming-date.interface';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class MusicSchoolDataService {
  private firestore = inject(Firestore);

  upcomingdates = toSignal(this.getUpcomingDates(), {
    initialValue: []
  });

  commonInformationMusicSchool = toSignal(this.getCommonInformationMusicSchoolDates(), {
     initialValue: []
  })

  getUpcomingDates() {
    const ref = collection(this.firestore, 'upcoming_dates');
    return collectionData(ref, { idField: 'id' }) as Observable<UpcomingDate[]>;
  }

  getCommonInformationMusicSchoolDates() {
    const ref = collection(this.firestore, 'common_information');
    return collectionData(ref, { idField: 'id' });
  }
}
