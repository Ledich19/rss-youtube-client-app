import { Component } from '@angular/core';
import videosData from '../../../data';
import { IVideoList } from '../search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent {
  videos: IVideoList = videosData;
}
