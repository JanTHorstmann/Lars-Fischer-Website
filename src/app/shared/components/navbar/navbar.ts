import { Component, inject } from '@angular/core';
import { MusicSchoolDataService } from '../../services/musicschool-data.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
public musicSchoolDataService = inject(MusicSchoolDataService)
commonInfo = this.musicSchoolDataService.commonInformationMusicSchool;
}
