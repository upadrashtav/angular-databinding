import { Component } from '@angular/core';
import { EventBindingComponent } from './eventbinding/eventbinding.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Akash";
  id: number = 100;
  country: string = "India";
  city: string = "Bengaluru";
  fullstackSME: boolean = true;
}
