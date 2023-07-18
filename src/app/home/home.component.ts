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
  StudentArray : string[] = ["student1", "student2", "student3" ];

  constructor() {}

  ngOnInit() {}

  //method to add a student to the student array
  AddStudent(){
    this.StudentArray.push(this.StudentName);
    this.StudentName = "";
    alert("Student added successfully")
  }

  deleteStudent(i: any) {
   if(confirm("Are you sure you want to delete")){
    this.StudentArray.splice(i,1);
   }
  }

  selectStudent(i: any){
    this.selectStudent = i;
    this.StudentName = this.StudentArray[i];
    }
  
  EditStudent(){
    this.StudentArray[this.selectedStudent] = this.StudentName;
    this.selectedStudent = null;
  }
}
