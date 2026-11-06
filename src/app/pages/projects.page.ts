import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LinkArrowComponent } from '../shared/components/link-arrow/link-arrow.component';
import { title } from '../signals';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, LinkArrowComponent],
  templateUrl: './projects/projects.component.html',
  styleUrl: './projects/projects.component.css'
})
export default class ProjectsComponent {
  constructor() {
    title.set('Projects | Logesh');
  }
}
