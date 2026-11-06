import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LinkArrowComponent } from '../shared/components/link-arrow/link-arrow.component';
import { title } from '../signals';

@Component({
  selector: 'app-still-project',
  standalone: true,
  imports: [RouterLink, LinkArrowComponent],
  templateUrl: './projects/still.component.html',
  styleUrl: './projects/projects.component.css',
})
export default class StillProjectComponent {
  constructor() {
    title.set('Still | Projects | Logesh');
  }
}
