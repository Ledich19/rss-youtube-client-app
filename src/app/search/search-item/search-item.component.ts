import { Component, Input } from '@angular/core';
import {
  faEye,
  faHeart,
  faHeartCircleMinus,
  faWindowRestore,
} from '@fortawesome/free-solid-svg-icons';
import { IVideo } from '../search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent {
  @Input() video!: IVideo;

  details = false;

  faEye = faEye;

  faHeart = faHeart;

  faHeartCircleMinus = faHeartCircleMinus;

  faWindowRestore = faWindowRestore;

  get videoAgeInDays(): number {
    const videoDate = new Date(this.video.snippet.publishedAt);
    const currentDate = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(currentDate.getMonth() - 6);

    const diffInMilliseconds = currentDate.getTime() - videoDate.getTime();
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 3600 * 24));

    return diffInDays;
  }
}
