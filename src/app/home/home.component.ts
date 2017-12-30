import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countNumber: number;
  btnText: string = "sathish";
  goalText: string = 'My text Goal';
  goals = [];
  constructor() { }

  ngOnInit() {
    this.countNumber = this.goals.length;
    this.goalText;
  }
  addItem() {
    // debugger;
    this.goals.push(this.goalText)
    this.goalText = this.goals.toString();
    this.countNumber = this.goals.length
  }

}
