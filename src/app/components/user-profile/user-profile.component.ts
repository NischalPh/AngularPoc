import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountryCodePipePipe } from '../../pipes/country-code-pipe.pipe';


function transformData(params: string) {
  return params + " Phuyal"
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, CountryCodePipePipe],
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


  users = [
    {
      name: "nischal",
      Salary: 260000,
      profession: "developer",
      phoneNumber: "98411111"
    },
    {
      name: "saroj",
      Salary: 320000,
      profession: "marketing",
      phoneNumber: "9842222"
    },
    {
      name: "khaday",
      Salary: 250000.555,
      profession: "freelancer",
      phoneNumber: "9843333"
    }
  ]



  @Input({transform: transformData }) userName = ""
}
