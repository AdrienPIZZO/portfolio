import { Injectable } from '@angular/core';
import { Experience } from '../_models/Experience';
import { Tag } from '../_models/Tags';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {
  experiences: Experience[] = [
    {
      id: 0, name: "Software Engineer", date: "2022 - 2024", company: "ChosenTactics", location: "Grenoble, France",
      description: "Video game creation: game design, market research, technical specifications, software architecture, \
      development of terrain, characters, spells, shortest path and line-of-sight algorithms, and networking with NetCode for GameObjects.",
      tags: [Tag.CSHARP, Tag.UNITY, Tag.GIT, Tag.DOTNET]
    },
    {
      id: 1, name: "Software Engineer", date: "2021 - 2022", company: "Enedis", location: "Grenoble, France",
      description: "Developed a management tool (Symfony stack) for work contractors to reduce electrical connection lead times, \
      with features like optimized contractor assignment, work duration estimation, scheduling, and statistics; designed databases, \
      migrated data from Excel, and supervised an intern on database design and tool development.",
      tags: [Tag.PHP, Tag.PYTHON, Tag.SQL, Tag.SYMFONY, Tag.JAVASCRIPT, Tag.GIT, Tag.AZURE]
    },
    {
      id: 2, name: "Software Engineer apprentice", date: "2017 - 2020", company: "Bull", location: "Grenoble, France",
      description: "Integrated an ELK Stack into an existing product to process incoming logs and enable graphical data representation; \
      created insightful Kibana visualizations to analyze component latency, and set up a Spark/Hadoop benchmark on a cluster.",
      tags: [Tag.PYTHON, Tag.SPARK, Tag.HADOOP, Tag.ELK, Tag.DOCKER, Tag.GIT, Tag.SHELL, Tag.LINUX]
    }
  ];
  constructor() { }

  GetExperiences() {
    return this.experiences;
  }
}
