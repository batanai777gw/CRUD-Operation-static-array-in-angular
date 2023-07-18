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
  studentArray: string[] = ["John","James","Junior", "Batanai"];

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


// export class HomeComponent {

//   StudentName = "";

//   selectedStudent = null;
//   //an array of students
//   StudentArray : string[] = ["John","James","Junior", "Batanai"];

//   constructor() {}

//   ngOnInit() {}

//   //method to add a student to the student array
//   AddStudent(){
//     this.StudentArray.push(this.StudentName);
//     this.StudentName = "";
//     alert("Student added successfully")
//   }

//     //method for deleting student name

//   deleteStudent(i: any) {
//    if(confirm("Are you sure you want to delete")){
//     this.StudentArray.splice(i,1);
//    }
//   }

//     //method for selecting student name

//   selectStudent(i: any){
//     this.selectStudent = i;
//     this.StudentName = this.StudentArray[i];
//     }
  
//   EditStudent(){
//     this.StudentArray[this.selectedStudent] = this.selectedStudent;
//     this.selectedStudent = null;
//   }
// }
