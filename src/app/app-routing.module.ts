import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, ContactComponent, EventsComponent, GalleryComponent, HomeComponent, ServiceComponent, UnderConstructionComponent } from './components';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'event', component: EventsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'service', component: UnderConstructionComponent },
  { path: 'home', redirectTo: '' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
