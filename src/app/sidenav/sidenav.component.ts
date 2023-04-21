import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from '../app.component';
import { SidenavmobileComponent } from '../sidenavmobile/sidenavmobile.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() optStyle: string = 'white';
  @Output() childToParent = new EventEmitter();
  currentLang:string = ''

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

  open() {
    SidenavmobileComponent.openRemote();
  }

  goTo(indexPage?: any) {
    this.childToParent.emit(indexPage);
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

}