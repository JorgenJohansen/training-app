import { NumberInput } from '@angular/cdk/coercion';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
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
  pageSizeOptions:number[] = [1, 5, 10, 25, 100];
  startPageSize = 5;
  itemCount?:number;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  showPaginator?: boolean;

  constructor(protected trainingService:TrainingService) { }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource.data = this.trainingService.getCompletedExercises();
    this.itemCount = this.trainingService.getDummyExercises().length;
    console.log(this.itemCount);
    //num is what we call a predicate
    this.pageSizeOptions = this.pageSizeOptions.filter(num => num <= (this.itemCount as number) + 10);
  }

  doFilter(event: KeyboardEvent){
    console.log(event);
    const filterValue = event.target instanceof HTMLInputElement ? event.target.value : "";
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  pageChange(event: PageEvent){
    this.showPaginator = event.pageSize > 10;
  }

}
