import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CricketClubComponent } from "./cricket-club/cricket-club.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CricketClubComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
