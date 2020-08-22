import { Component } from '@angular/core';
import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { fadeAnimation } from './shared/animations/fade.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]

})
export class AppComponent {
  title = 'projectTabangNa';

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
