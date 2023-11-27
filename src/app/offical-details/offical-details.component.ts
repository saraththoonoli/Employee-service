import { Component } from '@angular/core';
import { DetailsOfEmployeeService } from '../details-of-employee.service';

@Component({
  selector: 'app-offical-details',
  templateUrl: './offical-details.component.html',
  styleUrls: ['./offical-details.component.scss']
})
export class OfficalDetailsComponent {

  officialDetails: any[] = [];

  constructor(private employeeService: DetailsOfEmployeeService) { }

  ngOnInit() {


    this.officialDetails = this.employeeService.getOfficialDetails();
    console.log(this.officialDetails);
  }


}
