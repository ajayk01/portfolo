import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { OtherDetailsComponent } from './other-details/other-details.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'other-details', component: OtherDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
