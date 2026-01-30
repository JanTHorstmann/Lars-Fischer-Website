import { Component, inject } from '@angular/core';
import { MusicSchoolDataService } from '../../shared/services/musicschool-data.service';

@Component({
  selector: 'app-introduction',
  imports: [],
  templateUrl: './introduction.html',
  styleUrl: './introduction.scss',
})
export class Introduction {
  public musicSchoolDataService = inject(MusicSchoolDataService)
  introducing = this.musicSchoolDataService.introducingMusicSchool;
  ownerData = this.musicSchoolDataService.ownerData;
}
