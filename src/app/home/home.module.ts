import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherDataRowComponent } from './components/weather-data-row/weather-data-row.component';

@NgModule({
  declarations: [HomeComponent, SideBarComponent, WeatherDataRowComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    NgbCollapseModule,
  ],
})
export class HomeModule {}
