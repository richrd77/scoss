import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ScossMatModule } from './common/mat/mat.module';
import { ScossCommonModule } from './common/common.module';
import {
  HomeComponent, ServiceComponent, EventsComponent,
  GalleryComponent, ContactComponent, AboutComponent,
  UnderConstructionComponent
} from './components';
import { GalleryUnitComponent } from './components/gallery-unit/gallery-unit.component';
import { DigiComponent } from './components/digital-marketing/digi.component';
import { ItinfrastructureservicesComponent } from './components/itinfrastructureservices/itinfrastructureservices.component';
import { WebdesignservicesComponent } from './components/webdesignservices/webdesignservices.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    EventsComponent,
    GalleryComponent,
    ContactComponent,
    AboutComponent,
    UnderConstructionComponent,
    GalleryUnitComponent,
    DigiComponent,
    ItinfrastructureservicesComponent,
    WebdesignservicesComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScossMatModule,
    ScossCommonModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
