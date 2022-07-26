import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
    this.startOrRestartTimer();
  }

  startOrRestartTimer(){
    this.timer = window.setInterval(() => {
      this.progress += 5;
      if(this.progress === 100){
        clearInterval(this.timer)
      }
    },1000);
  }

  onStop(){
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {progress: this.progress}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.trainingExit.emit();
      }else{
        this.startOrRestartTimer();
      }
    });
  }

  

}
