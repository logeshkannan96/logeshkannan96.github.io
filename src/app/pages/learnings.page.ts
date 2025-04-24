import { injectContentFiles } from '@analogjs/content';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import PostAttributes from '../post-attributes';
import { title } from '../signals';

@Component({
  selector: 'app-learnings',
  standalone: true,
  imports: [RouterLink],
  template: `
  <p class="text-base font-medium">Things I Learned</p>
  <p class="py-2 text-zinc-500">Personal tech notebook: Short notes and learnings</p>
  <div class="py-4">
    @for (post of posts;track post.attributes.slug) {
      <div class="flex flex-row items-center gap-8 pt-4">
        <p class="text-sm font-normal italic w-[4.2rem]">{{ post.attributes.date }}</p>
        <a class="page-link" [routerLink]="['/learnings/', post.attributes.slug]">
          <h5>{{ post.attributes.title }}</h5>
        </a>
      </div>
    }
  </div>
  `,
})
export default class LearningsComponent {
  readonly posts = injectContentFiles<PostAttributes>((contentFile) => {
    return contentFile.filename.includes('/src/content/learnings')
  });
  title = title;

  constructor() {
    this.title.update(() => 'Learnings');
  }
}