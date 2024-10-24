import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects = {} as Project[];

  constructor(private projectService: ProjectsService) {
  }

  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
}
