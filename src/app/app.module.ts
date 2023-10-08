import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderComponent from './header/header/header.component';
import SearchResultsComponent from './search/search-results/search-results.component';
import SearchItemComponent from './search/search-item/search-item.component';
import UserComponent from './header/user/user.component';
import SettingComponent from './header/setting/setting.component';
import SearchComponent from './header/search/search.component';
import FilteringComponent from './filtering/filtering.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    UserComponent,
    SettingComponent,
    SearchComponent,
    FilteringComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
