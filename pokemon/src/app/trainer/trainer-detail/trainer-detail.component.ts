import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trainer } from '../Trainer';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css'],
})
export class TrainerDetailComponent implements OnInit {

  trainerId!: number;
  @Input() trainerDetail!: Trainer;

  constructor(private route: ActivatedRoute, private trainerService: TrainerService) {}

  getTrainerDetail(): void {  
    this.trainerService.getTrainerDetail(this.trainerId).subscribe(trainerDetail => this.trainerDetail = trainerDetail);
  }

  ngOnInit() {
    this.trainerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getTrainerDetail();
  }
}
