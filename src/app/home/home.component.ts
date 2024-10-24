import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { HeaderComponent } from '../header/header.component';
import { NavComponent } from '../nav/nav.component';
import { AboutComponent } from '../about/about.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ExperiencesComponent } from '../experiences/experiences.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NavComponent, AboutComponent, TechnologiesComponent, ProjectsComponent, ExperiencesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Adrien PIZZO - Portfolio');
  }
}
