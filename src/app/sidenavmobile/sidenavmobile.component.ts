import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
declare var $: any;

@Component({
  selector: 'app-sidenavmobile',
  templateUrl: './sidenavmobile.component.html',
  styleUrls: ['./sidenavmobile.component.scss']
})
export class SidenavmobileComponent implements OnInit {

  @Output() childToParent = new EventEmitter();

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
  }

  open() {
    document.getElementById('SideNavMobile')!.style.display = 'block';
  }

  close() {
    document.getElementById('SideNavMobile')!.style.display = 'none';
  }

  static openRemote() {
    document.getElementById('SideNavMobile')!.style.display = 'block';
  }

  goTo(indexPage?: any){
    this.close();
    this.childToParent.emit(indexPage);
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    document.getElementById('SideNavMobile')!.style.display = 'none';
  }

}