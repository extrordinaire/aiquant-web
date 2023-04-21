import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styleUrls: ['./page6.component.scss']
})
export class Page6Component implements OnInit {

  currentLang: string = ''

  constructor(
    public translate: TranslateService
  ) {
    this.currentLang = translate.defaultLang;
    this.translate.onLangChange.subscribe(
      (response: any) => {
        this.currentLang = response.lang;
      }
    )
  }

  ngOnInit(): void {
  }

}
