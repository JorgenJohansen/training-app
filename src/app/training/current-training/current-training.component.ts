import { Component, OnInit } from '@angular/core';
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

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
    this.timer = window.setInterval(() => {
      this.progress += 5;
      if(this.progress === 100){
        clearInterval(this.timer)
      }
    },1000)
  }

  onStop(){
    clearInterval(this.timer);
    this.dialog.open(StopTrainingComponent);
  }

}