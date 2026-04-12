import { Component } from '@angular/core';
import { HeroComponent } from '../shared/components/hero/hero.component';
import { WorkedAsComponent } from '../shared/components/worked-as/worked-as.component';
import { ContactComponent } from '../shared/components/contact/contact.component';
import { title } from '../signals';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, WorkedAsComponent, ContactComponent],
  templateUrl: './home/home.component.html'
})
export default class HomeComponent {
  title = title;

  constructor() {
    this.title.update(() => 'Logesh | Lead Engineer');
  }
}
