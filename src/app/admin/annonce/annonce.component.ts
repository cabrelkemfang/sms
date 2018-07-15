import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {

  constructor(private _router: Router, private _service: ServiceService, public snackBar: MatSnackBar) { }
  @ViewChild('form') mytemplateForm: NgForm;
  ngOnInit() {
  }

  onSubmit(value) {
    console.log(value);
    this._service.sendAnnonce(value.message, value.title).subscribe((data) => {
      this.openSnackBar("The Annonce was send successfully");
      this.mytemplateForm.reset();
      console.log(data);
      //value.resetForm(); // or
    },
      (error) => {
        console.log(error._body);
        console.log(error)
      })
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, " ", {
      duration: 5000,
    });
  }

}
