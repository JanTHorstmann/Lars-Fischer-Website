import { Component, inject } from '@angular/core';
import { MusicSchoolDataService } from '../../services/musicschool-data.service';
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-privacy-policy',
  imports: [Navbar],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {
  public musicSchoolDataService = inject(MusicSchoolDataService)
  introducing = this.musicSchoolDataService.introducingMusicSchool;
  ownerData = this.musicSchoolDataService.ownerData;
  commonInformationMusicSchool = this.musicSchoolDataService.commonInformationMusicSchool
}
