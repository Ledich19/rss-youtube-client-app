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
}
