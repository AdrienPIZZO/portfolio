import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

//import { HeaderComponent } from './header/header.component';
//import { HomeComponent } from './home/home.component';
//import { NavComponent } from './nav/nav.component';
//import { AboutComponent } from './about/about.component';
//import { TechnologiesComponent } from './technologies/technologies.component';
//import { ProjectsComponent } from './projects/projects.component';
//import { ExperiencesComponent } from './experiences/experiences.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink, RouterLinkActive
    //,HeaderComponent, NavComponent, HomeComponent, AboutComponent, TechnologiesComponent, ProjectsComponent, ProjectsComponent, ExperiencesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
