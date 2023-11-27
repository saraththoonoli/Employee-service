import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { OfficalDetailsComponent } from './offical-details/offical-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'personal-details',component:PersonalDetailsComponent},
  {path:'official-details',component:OfficalDetailsComponent},
  {path:'',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
