import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
 ];

 export default routes;
