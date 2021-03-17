import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Schools COVID-19 Data', url: '/page1', icon: 'mail' },
    { title: 'Public Health Unit', url: '/page2', icon: 'paper-plane' },
    { title: 'Ontario Outbreaks', url: '/page3', icon: 'heart' },
  ];
  constructor() {}
}
