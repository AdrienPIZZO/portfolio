import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TechnologiesService } from '../_services/technologies.service';
import { Technology } from '../_models/Technology';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent implements OnInit {
  technologies = {} as Technology[];
  constructor(private titleService: Title, private technologiesService: TechnologiesService) {
    this.titleService.setTitle('Adrien PIZZO - Technologies');
  }

  ngOnInit(): void {
    this.technologies = this.technologiesService.GetTechnologies();
  }
}
