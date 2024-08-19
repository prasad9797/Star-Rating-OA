import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-component',
  standalone: true,
  imports: [],
  templateUrl: './rating-component.component.html',
  styleUrl: './rating-component.component.css',
})
export class RatingComponent implements OnInit {
  @Input() name!: string;
  @Input() rate!: number;
  @Input() content!: string;
  filledStars: number[] = [];
  empltyStars: number[] = [];

  ngOnInit() {
    this.filledStars = Array(this.rate).fill(0);
    this.empltyStars = Array(5 - this.rate).fill(0);
  }
}
