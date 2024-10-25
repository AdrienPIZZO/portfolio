import { Injectable } from '@angular/core';
import { Technology } from '../_models/Technology';
import { Tag } from '../_models/Tags';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {
  technologies: Technology[] = [
    {
      id: 0, name: "Python", proficiency: "Advanced", picture: "python-logo.png", tags: [Tag.DUT, Tag.ENSIMAG, Tag.PERSONNAL]
    },
    {
      id: 1, name: "C++", proficiency: "Advanced", picture: "cpp-logo.svg", tags: [Tag.DUT, Tag.ENSIMAG, Tag.PERSONNAL]
    },
    {
      id: 2, name: "C#", proficiency: "Advanced", picture: "csharp-logo.svg", tags: [Tag.CHOSENTACTICS, Tag.PERSONNAL]
    },
    {
      id: 3, name: ".NET", proficiency: "Intermediate", picture: "dotnet.png", tags: [Tag.PERSONNAL]
    },
    {
      id: 4, name: "Django", proficiency: "Intermediate", picture: "django-logo.png", tags: [Tag.ENSIMAG, Tag.PERSONNAL]
    },
    {
      id: 5, name: "Angular", proficiency: "Beginner", picture: "angular-logo.png", tags: [Tag.PERSONNAL]
    },
  ];
  constructor() { }

  GetTechnologies() {
    return this.technologies;
  }

}
