import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementsComponent } from './components/home/achievements/achievements.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  {path:'app-achievements',component:AchievementsComponent},
  {path:'home',component:HomeComponent},
  {path:' ',component:HomeComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
