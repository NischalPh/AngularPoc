import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';


function transformData(params: string) {
  return params + " Phuyal"
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

  // name?: string = "Nischal";
  // age = 26;
  // addresss = "thulagaun";
  // subject: any
  // isDisabled = false
  // message = "Hello"

  // testFunction(event: Event) {
  //   var input = (event.target as HTMLInputElement).value;
  //   this.message = input;
  // }


  // users = [
  //   {
  //     name: "nischal",
  //     age: 26,
  //     profession: "developer"
  //   },
  //   {
  //     name: "saroj",
  //     age: 32,
  //     profession: "marketing"
  //   },
  //   {
  //     name: "khaday",
  //     age: 26,
  //     profession: "freelancer"
  //   }
  // ]



  @Input({transform: transformData }) userName = ""
}
