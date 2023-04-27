import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core"
import { MatSidenav } from "@angular/material/sidenav"

@Component({
  selector: "app-page9",
  templateUrl: "./page9.component.html",
  styleUrls: ["./page9.component.scss", "../app.shared.scss"],
})
export class Page9Component {
  @Input() sidenav!: MatSidenav
  @Input() navBarOpenSideNav!: boolean
  @Output() sideNavchildToParent = new EventEmitter()

  optionFocused: boolean = false
  optionSidenav: Number = 0
  currentContentSideNav: any

  constructor() {}

  openSideNav(opt: number) {
    this.optionSidenav = opt
    this.sideNavchildToParent.emit(opt)
  }

  optionFocus() {
    this.optionFocused = true
  }

  optionLeave() {
    this.optionFocused = false
  }
}
