import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  StudentName = "";

  selectedStudent = null;
  //an array of students
  StudentArray : string[] = ["John","James","Junior", "Batanai"];

  constructor() {}

  ngOnInit() {}

  //method to add a student to the student array
  AddStudent(){
    this.StudentArray.push(this.StudentName);
    this.StudentName = "";
    alert("Student added successfully")
  }

    //method for deleting student name

  deleteStudent(i: any) {
   if(confirm("Are you sure you want to delete")){
    this.StudentArray.splice(i,1);
   }
  }

    //method for selecting student name

  selectStudent(i: any){
    this.selectStudent = i;
    this.StudentName = this.StudentArray[i];
    }
  
    //method for editing student name
  EditStudent(){
    this.StudentArray[this.selectedStudent] = this.selectedStudent;
    this.selectedStudent = null;
  }
}
