import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
status:String=localStorage.getItem('status');
value:String;
style;
matricule: String=localStorage.getItem('matricule');
  constructor(private _router: Router, private _service: ServiceService,public snackBar: MatSnackBar) { }

  ngOnInit() {
    this._service.status(this.matricule).subscribe((data) => {
      console.log(data);
      if(this.status){
        this.value="Activated";
        this.style='green'
      }else{
        this.value="Not yet Activeted"
        this.style='red'
      }
    },
      (error) => {
        console.log(error)
      })
   
  }

  logout(){
    localStorage.removeItem("token"),
    localStorage.removeItem("matricule"),
    localStorage.clear();
    this._router.navigate(['home']);
  }

  

}
