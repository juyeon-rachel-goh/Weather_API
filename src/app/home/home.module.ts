import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule, 
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
