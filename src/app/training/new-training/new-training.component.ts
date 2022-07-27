import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Exercise } from 'src/models/exercise.model';
import { TrainingService } from 'src/services/training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  @Output() trainingStart = new EventEmitter<void>();
  exercises: Exercise[] = [];

  constructor(protected trainingService: TrainingService) {

   }

  ngOnInit(): void {
    this.exercises = this.trainingService.getAvailableExercises();
  }

  onStartTraining(){
    this.trainingStart.emit();
  }

}
