import { Component } from '@angular/core';
import { UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btnStyle: string = "btn btn-primary";
  students: any[] = [];
  studentCollection: any[] = [
    { name: "Tonya", favNumber: 743999, favColor: "orange" },
    { name: "Kalil", favNumber: 743999, favColor: "orange" },
    { name: "Marc", favNumber: 743999, favColor: "orange" },
    { name: "Tina", favNumber: 743999, favColor: "orange" },
    { name: "Bruce", favNumber: 743999, favColor: "orange" },
    { name: "Oliver", favNumber: 743999, favColor: "orange" },
    { name: "Zoe", favNumber: 743999, favColor: "orange" },
  ];
  title = 'student-list';

  changeColor(): void {
    this.btnStyle = "btn btn-lg";

  }

  getStudents(): void {

    this.students = this.studentCollection;

  }

constructor(
  private usersvc: UserService
) {
  this.usersvc.list();
}

ngOnInit(): void {

}

}
