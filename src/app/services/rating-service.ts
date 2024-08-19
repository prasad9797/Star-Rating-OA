import { Injectable } from '@angular/core';
import { Rating } from '../interfaces/rating';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  ratings: Rating[] = [
    {
      name: 'Todd Aaron',
      content:
        'Skibidibop skidadap dap, boom boom pow! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend tristique mi sed consequat. Quisque consequat lorem vel dui tincidunt euismod.',
      rate: 4,
    },
    {
      name: 'Jesse Bing',
      content:
        'Skibidibop skidadap dap, boom boom pow! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend tristique mi sed consequat. Quisque consequat lorem vel dui tincidunt euismod.',
      rate: 1,
    },
    {
      name: 'Tori Mitchell',
      content:
        'Skibidibop skidadap dap, boom boom pow! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend tristique mi sed consequat. Quisque consequat lorem vel dui tincidunt euismod.',
      rate: 2,
    },
    {
      name: 'John Nelson',
      content:
        'Skibidibop skidadap dap, boom boom pow! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend tristique mi sed consequat. Quisque consequat lorem vel dui tincidunt euismod.',
      rate: 4,
    },
  ];

  getRating() {
    return of(this.ratings);
  }

  getAverageRating() {
    const avgRating = this.ratings.reduce(
      (acc, ind) => (acc = acc + ind.rate),
      0
    );

    return Math.round(avgRating / this.ratings.length);
  }
}
