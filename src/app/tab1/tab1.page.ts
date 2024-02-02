import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonApp } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonApp, IonContent, ExploreContainerComponent],
  template: `
  
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title>
          Tab 1
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <app-explore-container name="Tab 1 page"></app-explore-container>
    </ion-content>
  
  `,
})
export class Tab1Page {
  constructor() {}
}
