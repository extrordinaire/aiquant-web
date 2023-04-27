import { Component, EventEmitter, OnInit, Output } from "@angular/core"
import { TranslateService } from "@ngx-translate/core"

@Component({
  selector: "app-page10",
  templateUrl: "./page10.component.html",
  styleUrls: ["./page10.component.scss", "../app.shared.scss"],
})
export class Page10Component implements OnInit {
  currentLang: string = ""

  constructor(public translate: TranslateService) {
    this.currentLang = translate.defaultLang
    this.translate.onLangChange.subscribe((response: any) => {
      this.currentLang = response.lang
    })
  }

  ngOnInit(): void {}
}
