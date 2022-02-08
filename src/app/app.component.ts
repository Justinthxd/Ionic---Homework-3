import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/page1', icon: 'home' },
    { title: '1', url: '/page2', icon: 'heart' },
    { title: '2', url: '/page3', icon: 'archive' },
    { title: '3', url: '/page4', icon: 'trash' },
    { title: '4', url: '/page5', icon: 'warning' },
  ];
  public labels = ['-', '-', '-', '-', '-', '-'];
  constructor() {}
}
