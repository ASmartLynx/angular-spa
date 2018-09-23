import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { appRoutes } from './app.router';
import { RouterModule } from '@angular/router';
import { MainPage } from './main-page/main-page.component';
import { ApartmentsList } from './apartments-list/apartments-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ApartmentsService } from './services/apartments.service';
import { Apartment } from './apartment/apartment.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent, MainPage, ApartmentsList, Apartment
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [ApartmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
