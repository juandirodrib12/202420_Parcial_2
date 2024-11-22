import { Component, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css'],
})
export class TrainerListComponent implements OnInit {
  trainers: Array<Trainer> = [];
  selected: Boolean = false;
  selectedTrainer!: Trainer;
  constructor(private trainerService: TrainerService) {}

  ngOnInit() {
    this.trainerService.getTrainers().subscribe((trainers) => {this.trainers = trainers;});
  }

  contarPokemons(trainer: Trainer): number {
    return trainer.pokemons ? trainer.pokemons.length : 0;
  }
}
