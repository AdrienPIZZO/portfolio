import { Component } from '@angular/core';
import { ExperiencesService } from '../_services/experiences.service';
import { Experience } from '../_models/Experience';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  experiences = {} as Experience[];
  constructor(private experiencesService: ExperiencesService) {
  }

  ngOnInit(): void {
    this.experiences = this.experiencesService.GetExperiences();
  }
}
