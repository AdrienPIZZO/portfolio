import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tags';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
      id: 0, name: "Portfolio", pictures: [], projectLink: "",
      description: "Building a responsive portfolio, leveraging Angular for dynamic content, ensuring clean code structure and following best development practices.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
    },
    {
      id: 1, name: "Calculator", pictures: ["calculator1.PNG", "calculator2.PNG", "calculator3.PNG"], projectLink: "https://gitlab.com/AdrienPIZZO/qtcalculator",
      description: "Creating a user interface, using Qt for event handling, integrating unit tests, setting up a CI pipeline with GitLab CI.", tags: [Tag.CPP, Tag.QT]
    },
    {
      id: 2, name: "Minesweeper", pictures: ["minesweeper1.PNG", "minesweeper2.PNG", "minesweeper3.PNG", "minesweeper4.PNG"], projectLink: "",
      description: "Developing the graphical interface, managing pointers and memory, adhering to best development practices.", tags: [Tag.CPP, Tag.QT]
    },
  ];
  constructor() { }

  GetProjects() {
    return this.projects;
  }

  //GetProjectById(id: number): Project {
  //  let project = this.projects.find(project => project.id === id);

  //  if (project === undefined) {
  //    throw new TypeError('There is no project that matches the id: ' + id);
  //  }

  //  return project;
  //}

}
