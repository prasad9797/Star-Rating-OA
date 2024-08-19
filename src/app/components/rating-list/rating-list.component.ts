import { Component, OnInit } from '@angular/core';
import { Rating } from '../../interfaces/rating';
import { RatingService } from '../../services/rating-service';
import { RatingComponent } from '../rating-component/rating-component.component';

@Component({
  selector: 'app-rating-list',
  standalone: true,
  imports: [RatingComponent],
  templateUrl: './rating-list.component.html',
  styleUrl: './rating-list.component.css',
})
export class RatingListComponent implements OnInit {
  ratingData: Rating[] = [];

  constructor(private ratingService: RatingService) {}

  ngOnInit() {
    this.ratingService.getRating().subscribe((response) => {
      this.ratingData = response;
    });
  }
}
