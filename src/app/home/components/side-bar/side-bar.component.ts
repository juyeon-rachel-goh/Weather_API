import { Component, OnInit } from '@angular/core';
import { Location } from '../../model/location.interface';
import { GeocodeService } from '../../services/geocode/geocode.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private geocodeService: GeocodeService) { }

  ngOnInit(): void {
  }

  public search(): void {       

    this.geocodeService.getLatLong('detroit').subscribe(response => {
 
      if (response?.features && response.features.length > 0) {
        const properties = response.features[0].properties 
        const location: Location = {
          lat: properties.lat,
          lon: properties.lon,
          city: properties.city
        };

      }
      console.warn(response.features[0].properties.lat)
      console.warn(response.features[0].properties.lon)
      console.warn(response.features[0].properties.city)
    })
  }

}
