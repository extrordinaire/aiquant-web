import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { AppComponent } from "../app.component";

@Component({
  selector: "app-page1",
  templateUrl: "./page1.component.html",
  styleUrls: ["./page1.component.scss", "../app.shared.scss"],
})
export class Page1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
