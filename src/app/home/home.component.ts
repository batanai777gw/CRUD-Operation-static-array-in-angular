import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  studentName = "";

  selectedStudentIndex = 0;

  //array of students
  studentArray: string[] = [];

  constructor() {}

  ngOnInit() {}

  //adding a student to an array
  addStudent(){
    this.studentArray.push(this.studentName);
    this.studentName = "";
    alert("Student added successfully");
  }

  //deleting a student from array

  deleteStudent(i: any){
    if(confirm("Are you sure you want to delete!")){
      this.studentArray.splice(i,1);
    }
  }

  //selecting a student
  selectStudent(i: any){
    this.selectedStudentIndex = i;
    this.studentName = this.studentArray[i];
  }

  editStudent(){
    this.studentArray[this.selectedStudentIndex] = this.studentName;
    this.selectedStudentIndex = 0;
    this.studentName = "";
  }
}
