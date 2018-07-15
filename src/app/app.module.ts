import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatTooltipModule,
  MatCardModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatStepperModule
} from '@angular/material';
import { MenuComponent } from './admin/menu/menu.component';
import { SignUpComponent } from './home/sign-up/sign-up.component';
import { RegisterComponent } from './home/register/register.component';
import { ServiceService } from './services/service.service';
import { HttpModule } from '@angular/http';
import { ViewresultComponent } from './admin/viewresult/viewresult.component';
import { ViewstudentComponent } from './admin/viewstudent/viewstudent.component';
import { CreateUserComponent } from './admin/create-user/create-user.component';
import { AnnonceComponent } from './admin/annonce/annonce.component';
import { DataMigrationComponent } from './test/data-migration/data-migration.component';
import { ActivateComponent } from './student/activate/activate.component';



const route: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SignUpComponent },
  {
    path: 'menu', component: MenuComponent, children:[

      { path: 'view_student', component: ViewstudentComponent },
      { path: 'view_result', component: ViewresultComponent },
      { path: 'create_user', component: CreateUserComponent },
      { path: 'annonce', component: AnnonceComponent },
      //Student view
      { path: 'activate', component: ActivateComponent },

    ]
  },
  { path: 'register', component: RegisterComponent }
]; 
@NgModule({
  declarations: [ 
    AppComponent,
    MenuComponent,
    SignUpComponent,
    RegisterComponent,
    ViewresultComponent,
    ViewstudentComponent,
    CreateUserComponent,
    AnnonceComponent,
    DataMigrationComponent,
    ActivateComponent,
    
  ],
  imports: [
    HttpModule,
    FormsModule,
    RouterModule.forRoot(route),
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatStepperModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
