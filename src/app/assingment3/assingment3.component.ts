import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-assingment3",
  templateUrl: "./assingment3.component.html",
  styleUrls: ["./assingment3.component.css"]
})
export class Assingment3Component implements OnInit {
  name: String = "Gareth";
  age: String = "30";
  details: Boolean = false;
  buttonClicks: any = [0];

  constructor() {}

  ngOnInit(): void {}
  onDetailDisplay = () => {
    this.details = !this.details;
    const number = this.buttonClicks.pop();
    this.buttonClicks.push(new Date());
  };
}
