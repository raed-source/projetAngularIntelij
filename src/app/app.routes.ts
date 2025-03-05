import { Routes } from '@angular/router';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {SnapListComponent} from './components/snap-list/snap-list.component';
import {SnapComponent} from './components/snap/snap.component';
import {SingleSnapComponent} from './components/single-snap/single-snap.component';

export const routes: Routes = [
  {path:'snap/:id',component:SingleSnapComponent},
  {path:'',component:LandingPageComponent},
  {path:'snaps',component:SnapListComponent}
];
