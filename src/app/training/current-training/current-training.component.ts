import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Exercise } from 'src/models/exercise.model';
import { TrainingService } from 'src/services/training.service';
import { StopTrainingComponent } from './stop-training/stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress:number = 0;
  timer!: number;
  @Output() trainingExit = new EventEmitter();

  constructor(protected dialog:MatDialog, protected trainingService: TrainingService) { }

  ngOnInit(): void {
    this.startOrRestartTimer();
  }

  startOrRestartTimer(){
    if(this.trainingService.getRunningExercise()){
      const stepsInMiliseconds = (this.trainingService.getRunningExercise() as Exercise).duration / 100 * 1000;
      this.timer = window.setInterval(() => {
        this.progress += 1;
        if(this.progress === 100){
          clearInterval(this.timer);
          this.trainingService.completeExercise();
        }
      }, stepsInMiliseconds);
    }else{
      throw new Error("runningExercise is not defined");
    }
  }

  onStop(){
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {progress: this.progress}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.trainingService.cancelExercise(this.progress);
      }else{
        this.startOrRestartTimer();
      }
    });
  }

  

}
