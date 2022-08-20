import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css'],
})
export class MiddleComponent implements OnInit {
  // studentId: number = 10;
  // studentName: string = 'nathiya';
  // teacher: string = 'Muthu';
  // studentStatus: string = 'Present';

  // btnToggle: Boolean = true;

  constructor() {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.btnToggle = false;
    // }, 2000);
  }

  onToggle() {
    // if (this.studentStatus === 'Present') {
    //   this.studentStatus = 'Absent';
    // } else {
    //   this.studentStatus = 'Present';
    // }
  }
}
