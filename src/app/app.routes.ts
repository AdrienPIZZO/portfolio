import { Routes } from '@angular/router';

//import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { AboutComponent } from './about/about.component';
//import { TechnologiesComponent } from './technologies/technologies.component';
//import { ProjectsComponent } from './projects/projects.component';
//import { ExperiencesComponent } from './experiences/experiences.component';

export const routes: Routes = [
  //{ path: '', component: AppComponent },
  //{ path: 'home', component: HomeComponent },
  //{ path: 'about', component: AboutComponent },
  //{ path: 'technologies', component: TechnologiesComponent },
  //{ path: 'projects', component: ProjectsComponent },
  //{ path: 'experiences', component: ExperiencesComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full'}
];
