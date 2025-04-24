import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, ContactComponent, EventsComponent, GalleryComponent, HomeComponent, ServiceComponent, UnderConstructionComponent } from './components';
import { DigiComponent } from './components/digital-marketing/digi.component';
import { WebdesignservicesComponent } from './components/webdesignservices/webdesignservices.component';
import { ItinfrastructureservicesComponent } from './components/itinfrastructureservices/itinfrastructureservices.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'event', component: EventsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'service', component: UnderConstructionComponent },
  { path: 'digital-marketing', component: DigiComponent },
  { path: 'web-development', component: WebdesignservicesComponent },
  { path: 'it-infrastructure',component:ItinfrastructureservicesComponent},
  { path: 'home', redirectTo: '' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
