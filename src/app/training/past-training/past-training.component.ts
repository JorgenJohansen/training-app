import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from 'src/models/exercise.model';
import { TrainingService } from 'src/services/training.service';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<Exercise>();
  displayedColumns = ['date','name', 'duration', 'calories', 'state'];
  @ViewChild(MatSort) sort!: MatSort;

  constructor(protected trainingService:TrainingService) { }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.dataSource.data = this.trainingService.getCompletedExercises();
  }

}
