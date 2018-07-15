import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private _router: Router, private _service: ServiceService, public snackBar: MatSnackBar) { }

  ngOnInit() {

  }

  onSubmit(value) {
    localStorage.setItem('matricule', value.matriculeNumber);
    this._service.login(value.matriculeNumber, value.password).subscribe((data) => {
      console.log(data);
      if (data == null) {

      } else {
        let token = btoa(value.matriculeNumber + ":" + value.password);
        localStorage.setItem('token', token);
        console.log("token" + token)
        this._router.navigate(['menu']);
      }
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

  sign_up(value) {
    console.log(value);
    this._router.navigate(['register']);
  }
}
