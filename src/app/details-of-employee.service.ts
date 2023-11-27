import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsOfEmployeeService {

  getPersonalDetails() {
    return [
      { id: 'E001', name: 'Sooraj', age: 30, gender: 'Male' },
      { id: 'E002', name: 'Soorya', age: 25, gender: 'Female' },
      { id: 'M001', name: 'Raju', age: 28, gender: 'Male' },
      { id: 'M002', name: 'Sruthi', age: 23, gender: 'Female' },
      { id: 'M003', name: 'Lakshmi', age: 32, gender: 'Female' },
      { id: 'M004', name: 'Gopan', age: 26, gender: 'Male' },
      { id: 'M005', name: 'Gopika', age: 30, gender: 'Male' },
      { id: 'M006', name: 'Kavya', age: 29, gender: 'Female' },
      { id: 'E001', name: 'Sooraj', age: 30, gender: 'Male' },
      { id: 'E002', name: 'Soorya', age: 25, gender: 'Female' },
      { id: 'M001', name: 'Raju', age: 28, gender: 'Male' },
      { id: 'M002', name: 'Sruthi', age: 23, gender: 'Female' },
      { id: 'M003', name: 'Lakshmi', age: 32, gender: 'Female' },
      { id: 'M004', name: 'Gopan', age: 26, gender: 'Male' },
      { id: 'M005', name: 'Gopika', age: 30, gender: 'Male' },
      { id: 'M006', name: 'Kavya', age: 29, gender: 'Female' },



    ];
  }
  getOfficialDetails() {
    return [
      { index: '1', employeeId: 'E001', department: 'IT', position: 'Software Engineer' },
      { index: '2', employeeId: 'E002', department: 'HR', position: 'Human Resource Specialist' },
      { index: '3', employeeId: 'M001', department: 'Finance', position: 'Accountant' },
      { index: '4', employeeId: 'M002', department: 'Marketing', position: 'Marketing Executive' },
      { index: '5', employeeId: 'M003', department: 'Sales', position: 'Sales Manager' },
      { index: '6', employeeId: 'M004', department: 'IT', position: 'System Analyst' },
      { index: '7', employeeId: 'M005', department: 'IT', position: 'Web Developer' },
      { index: '8', employeeId: 'M006', department: 'Marketing', position: 'Content Writer' },
      { index: '9', employeeId: 'E001', department: 'IT', position: 'Software Engineer' },
      { index: '10', employeeId: 'E002', department: 'HR', position: 'Human Resource Specialist' },
      { index: '11', employeeId: 'M001', department: 'Finance', position: 'Accountant' },
      { index: '12', employeeId: 'M002', department: 'Marketing', position: 'Marketing Executive' },
      { index: '13', employeeId: 'M003', department: 'Sales', position: 'Sales Manager' },
      { index: '14', employeeId: 'M004', department: 'IT', position: 'System Analyst' },
      { index: '15', employeeId: 'M005', department: 'IT', position: 'Web Developer' },
      { index: '16', employeeId: 'M006', department: 'Marketing', position: 'Content Writer' },
    ];
  }
}

