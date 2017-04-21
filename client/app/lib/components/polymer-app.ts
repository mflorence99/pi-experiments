import {Component, HostListener} from '@angular/core';

declare var Polymer: any;

@Component({
  selector: 'pi-polymer-app',
  templateUrl: 'polymer-app.html',
  styleUrls: ['polymer-app.less']
})

export class PolymerAppComponent {
  loaded = false;
  loading = true;

  // https://github.com/webcomponents/webcomponentsjs#webcomponentsloaded
  @HostListener('window:WebComponentsReady') onWebComponentsReady() {
    Polymer.updateStyles();
    this.loaded = true;
    this.loading = false;
  }

}
