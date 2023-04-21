import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.scss']
})
export class Page5Component implements OnInit {

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
