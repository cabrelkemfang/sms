import { Component, OnInit, ViewChild } from '@angular/core';
//import { Result } from '../class/Result';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar, MatPaginator, MatTableDataSource } from '@angular/material';
import { Result } from '../../class/Result';

@Component({
  selector: 'app-viewresult',
  templateUrl: './viewresult.component.html',
  styleUrls: ['./viewresult.component.css']
})
export class ViewresultComponent implements OnInit {
  displayedColumns: string[] = ['id', 'student_name', 'matricule_number', 'status', 'course_code', 'credit_value', 'c_a', 'exam', 'total', 'grades'];
  ELEMENT_DATA: Result[] = [];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<Result>(this.ELEMENT_DATA);
  constructor(private _router: Router, private _service: ServiceService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator; 

    this._service.result().subscribe((data) => {
      console.log(data);
      this.ELEMENT_DATA = data;
      //this.dataSource = data;
    },
      (error) => {
        this.openSnackBar(error._body);
        console.log(error)
      })
      
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, " ", {
      duration: 5000,
    });
  }

 send(ELEMENT_DATA){
  this._service.sensResult(ELEMENT_DATA).subscribe((data) => {
    console.log(data);
  },
    (error) => {
      this.openSnackBar(error._body);
      console.log(error)
    })
 }
}
