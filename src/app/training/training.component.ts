import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrainingService } from 'src/services/training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  ongoingTraining:boolean = false;
  exSub!: Subscription;

  constructor(protected trainingService: TrainingService) { }

  ngOnInit(): void {
    this.exSub = this.trainingService.exerciseChanged.subscribe(ex => {
      this.ongoingTraining = ex ? true: false;
    });
  }

}
