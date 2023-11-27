import { Component, OnInit } from '@angular/core';
import { DetailsOfEmployeeService } from '../details-of-employee.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  personalDetails: any[] = []

  constructor(private employeeService: DetailsOfEmployeeService) { }

  ngOnInit() {
    this.personalDetails = this.employeeService.getPersonalDetails();
    console.log(this.personalDetails);

  }

}
