import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RatingListComponent } from './app/components/rating-list/rating-list.component';
import { AverageRatingComponent } from './app/components/average-rating/average-rating.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RatingListComponent, AverageRatingComponent],
  template: `
    <app-rating-list/>
    <app-average-rating/>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
