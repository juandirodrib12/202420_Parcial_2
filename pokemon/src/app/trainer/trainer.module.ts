import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';
import { PokemonModule } from '../pokemon/pokemon.module';
import { HttpClientModule } from '@angular/common/http';
import { TrainerRoutingModule } from './trainer-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, PokemonModule, HttpClientModule, TrainerRoutingModule, RouterModule],
  declarations: [TrainerListComponent, TrainerDetailComponent],
  exports: [TrainerListComponent],
})
export class TrainerModule {}
