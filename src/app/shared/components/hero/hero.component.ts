import { Component } from '@angular/core';
import { calculateAge } from '../../utils/utils';
import { LinkArrowComponent } from '../link-arrow/link-arrow.component';
import { RouterLink } from '@angular/router';

interface HeroData {
  name: string;
  avatar: string;
  shortDescription: string;
  age: number;
  gender: string;
  about: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LinkArrowComponent, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  heroData: HeroData = {
    name: 'Logesh',
    avatar: 'https://avatars.githubusercontent.com/u/50928757?v=4',
    shortDescription: 'A full time learner, developer!',
    age: calculateAge('1996-08-09'),
    gender: 'he/him',
    about: '<p>I specialize in crafting systems that effortlessly grow, utilizing the latest tech for optimal performance. My strength lies in building strong, scalable structures that save resources. I specialize in crafting systems that effortlessly grow, utilizing  latest tech for optimal performance.</p> <p class="pt-4">My strength lies in building strong, scalable structures that save resources, scalable structures that save resources.</p>'
  }

}
