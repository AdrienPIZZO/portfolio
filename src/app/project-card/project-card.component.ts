import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../_models/Project';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project = {} as Project;
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  OpenProjectModal() {
    const modalOptions: ModalOptions = {
      class: "modal-lg",
      initialState: {
        project: this.project
      }
    }
    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions);
  }
}
