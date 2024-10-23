import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss'
})
export class ProjectModalComponent {
  @Input() project = {} as Project;
}
