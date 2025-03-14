import { Routes } from '@angular/router';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {SnapListComponent} from './components/snap-list/snap-list.component';
import {SnapComponent} from './components/snap/snap.component';
import {SingleSnapComponent} from './components/single-snap/single-snap.component';
import {UserComponent} from './CRUD/user/user.component';
import {MenuComponent} from './FULLSTACK/menu/menu.component';
import {InventoryComponent} from './FULLSTACK/inventory/inventory.component';
import {MenuMatComponent} from './FULLSTACK/menu-mat/menu-mat.component';

export const routes: Routes = [
  {path:'inventory', component: InventoryComponent},
  {path: 'menu-boot', component: MenuComponent},
  {path: 'menu-mat', component: MenuMatComponent},
  {path: 'user', component: UserComponent},
  {path:'snap/:id',component:SingleSnapComponent},
  {path:'home',component:LandingPageComponent},
  {path:'snaps',component:SnapListComponent}
];
