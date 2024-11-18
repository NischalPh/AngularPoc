import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roots',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-poc';

  users = [{
    name: "Ram"
  },
  {
    name: "Shyam"
  },
  {
    name: "Hari"
  }]
}
