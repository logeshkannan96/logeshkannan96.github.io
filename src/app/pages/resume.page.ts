import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  template: `
    <div class="resume">
      <p class="text-base font-medium text-center mb-5">Resume</p>
      <iframe src="https://drive.google.com/file/d/13LgPJU1JoAS0uDuadG26ZDC3TMI3UjFh/preview" width="720" height="1080" allow="autoplay"></iframe>
    </div>
  `
})
export default class ResumeComponent {

}
