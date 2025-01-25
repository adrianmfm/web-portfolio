import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  standalone: false,

  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  public gitImage: string = '/assets/images/github.svg';

  constructor(private projectsService: ProjectsService) {}
  goToGithub(url: string): void {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }


  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }
}
