import { Component, OnInit } from '@angular/core';
import { RatingService } from '../../services/rating-service';

@Component({
  selector: 'app-average-rating',
  standalone: true,
  imports: [],
  templateUrl: './average-rating.component.html',
  styleUrl: './average-rating.component.css',
})
export class AverageRatingComponent implements OnInit {
  avgRating!: number;
  filledStars: number[] = [];
  empltyStars: number[] = [];

  constructor(private ratingService: RatingService) {}

  ngOnInit() {
    this.avgRating = this.ratingService.getAverageRating();
    this.filledStars = Array(this.avgRating).fill(0);
    this.empltyStars = Array(5 - this.avgRating).fill(0);
  }
}
