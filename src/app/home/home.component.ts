import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  StudentName = "";

  //an array of students
  StudentArray : string[] = [];

  constructor() {}

  ngOnInit() {}

  //method to add a student to the student array
  AddStudent(){
    this.StudentArray.push(this.StudentName);
    this.StudentName = ""
  }
}
