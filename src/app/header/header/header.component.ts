import { Component } from '@angular/core';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  showFiltration = false;

  faSliders = faSliders;

  faYoutube = faYoutube;
}
