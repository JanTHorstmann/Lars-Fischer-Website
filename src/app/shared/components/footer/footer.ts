import { Component, inject } from '@angular/core';
import { MusicSchoolDataService } from '../../services/musicschool-data.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  public musicSchoolDataService = inject(MusicSchoolDataService)
  commonInfo = this.musicSchoolDataService.commonInformationMusicSchool;
}
