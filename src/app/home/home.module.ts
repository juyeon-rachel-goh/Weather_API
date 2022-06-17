import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbCollapseModule,
  NgbTooltipModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { WeatherDataRowComponent } from './components/weather-data-row/weather-data-row.component';

@NgModule({
  declarations: [HomeComponent, SideBarComponent, WeatherDataRowComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    NgbCollapseModule,
    NgbTooltipModule,
    FormsModule,
    NgbTypeaheadModule,
  ],
  providers: [TitleCasePipe],
})
export class HomeModule {}
