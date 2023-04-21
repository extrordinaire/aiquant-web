import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-page7',
  templateUrl: './page7.component.html',
  styleUrls: ['./page7.component.scss']
})
export class Page7Component implements OnInit {

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
