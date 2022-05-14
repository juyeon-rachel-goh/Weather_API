import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Location } from '../../model/location.interface';
import { GeocodeStateService } from '../../services/geocode-state/geocode-state.service';
import { GeocodeService } from '../../services/geocode/geocode.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  public searchFormControl: FormControl = new FormControl('')

  constructor(private geocodeService: GeocodeService,
    private geocodeStateService: GeocodeStateService) { }

  ngOnInit(): void {
  }

  

  public search(): void {       

    this.geocodeService.getLatLong(this.searchFormControl.value).subscribe(response => {
      if (response?.features && response.features.length > 0) {
        const properties = response.features[0].properties 
        const location: Location = {
          lat: properties.lat,
          lon: properties.lon,
          city: properties.city
        };
        this.geocodeStateService.next(location);
      }
    })
  }

}
