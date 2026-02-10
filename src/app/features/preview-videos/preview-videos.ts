import { Component, inject } from '@angular/core';
import { MusicSchoolDataService } from '../../shared/services/musicschool-data.service';
import { SafeUrlPipe } from '../../shared/pipes/safe-url-pipe';

@Component({
  selector: 'app-preview-videos',
  imports: [SafeUrlPipe],
  templateUrl: './preview-videos.html',
  styleUrl: './preview-videos.scss',
})
export class PreviewVideos {
  public musicSchoolDataService = inject(MusicSchoolDataService)
  videos = this.musicSchoolDataService.previewVideos;
}
