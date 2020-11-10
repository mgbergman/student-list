import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students: any [] = [];
  studentCollection: any[] = [
    { name: "Tonya", favNumber: 743999, favColor: "orange"},
    { name: "Kalil", favNumber: 743999, favColor: "orange"},
    { name: "Marc", favNumber: 743999, favColor: "orange"},
    { name: "Tina", favNumber: 743999, favColor: "orange"},
    { name: "Bruce", favNumber: 743999, favColor: "orange"},
    { name: "Oliver", favNumber: 743999, favColor: "orange"},
    { name: "Zoe", favNumber: 743999, favColor: "orange"},
  ];
  title = 'student-list';

  getStudents(): void {

    this.students = this.studentCollection;
  
  }
}
