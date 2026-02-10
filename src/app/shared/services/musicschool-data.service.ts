import { Injectable, computed, inject, signal } from '@angular/core';
import { Firestore, collection, collectionData, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UpcomingDate } from '../inerfaces/upcoming-date.interface';
import { toSignal } from '@angular/core/rxjs-interop';
import { doc } from 'firebase/firestore';
import { CommonInformationMusicSchool } from '../inerfaces/common-information-music-school.interface';
import { IntroducingMusicSchoolInterface } from '../inerfaces/introducing-music-school.interface';
import { OwnerInterface } from '../inerfaces/owner.interface';
import { PreviewVideoInterface } from '../inerfaces/preview-video.interface';

@Injectable({
  providedIn: 'root',
})
export class MusicSchoolDataService {
  private firestore = inject(Firestore);


  upcomingDates = toSignal(
    this.getUpcomingDates(),
    { initialValue: [] }
  );

  commonInformationMusicSchool = toSignal(
    this.getCommonInformationMusicSchool(),
    { initialValue: null }
  );

  introducingMusicSchool = toSignal(
    this.getIntroducingMusicSchool(),
    { initialValue: null }
  )

  ownerData = toSignal(
    this.getOwnerData(),
    { initialValue: null }
  )

  previewVideos = toSignal(
    this.getPreviewVideo(),
    { initialValue: [] }
  )

  private getUpcomingDates(): Observable<UpcomingDate[]> {
    const ref = collection(this.firestore, 'upcoming_dates');
    return collectionData(ref, { idField: 'id' }) as Observable<UpcomingDate[]>;
  }

  private getCommonInformationMusicSchool(): Observable<CommonInformationMusicSchool> {
    const ref = doc(this.firestore, 'common_information/common_information_musicschool');
    return docData(ref, { idField: 'id' }) as Observable<CommonInformationMusicSchool>;
  }

  private getIntroducingMusicSchool(): Observable<IntroducingMusicSchoolInterface> {
    const ref = doc(this.firestore, 'common_information/introducing_musicschool');
    return docData(ref, { idField: 'id' }) as Observable<IntroducingMusicSchoolInterface>;
  }

  private getOwnerData(): Observable<OwnerInterface> {
    const ref = doc(this.firestore, 'common_information/owner_data');
    return docData(ref, { idField: 'id' }) as Observable<OwnerInterface>;
  }

  private getPreviewVideo(): Observable<PreviewVideoInterface[]> {
    const ref = collection(this.firestore, 'preview_vidoes');
    return collectionData(ref, { idField: 'id' }) as Observable<PreviewVideoInterface[]>;
  }

  getYoutubeUrl(id: string) {
    return `https://www.youtube.com/embed/${id}`;
  }
}
