import { ViewChild } from '@angular/core';
import { Component, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface, SwiperPaginationInterface, SwiperScrollbarInterface } from 'ngx-swiper-wrapper'; // ADD swiperDirective
declare var $: any;
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @ViewChild(SwiperDirective) directiveRef?: SwiperDirective;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  currentPage: number = 0;
  title = 'leváre';
  currentPosition = window.pageYOffset;
  scrollBlock = true;
  colorSideNav = 'white';
  currentContentSideNav: any;
  currentContentSideNavEn: any;
  optionSidenav: Number = 0;
  navBarOpenSideNav: boolean = false;
  currentLang: string = ''
  contentSideNav = [
    [
      {
        title: 'Ciclo de innovación',
        content: 'La tecnología blockchain se encuentra actualmente en una etapa muy incipiente con potencial para un gran crecimiento, a medida que aumenta su adopción, también lo hará su utilidad y valor intrínseco.'
      }, {
        title: 'Nueva clase de activo financiero',
        content: 'Los criptoactivos son cada vez mas reconocidos como una nueva clase de activo financiero por las principales instituciones y administradores de inversion.'
      },
      {
        title: 'Diversificación',
        content: 'Dada su nula correlación con activos financieros tradicionales, los criptoactivos son un instrumento financiero ideal para incluir en un portafolio de inversión.'
      }
    ],
    [
      {
        title: 'Maximización de retorno',
        content: 'A través de la diligente incorporación de marcos desarrollados internamente que logran alfa con riesgo moderado.'
      }, {
        title: 'Administración de portfolio',
        content: 'Se busca superar el rendimiento de los mayores indices de activos digitales publicados por S&P y MVIS.'
      },
      {
        title: 'Asignación del fondo',
        content: 'Dos tercios de las inversiones se asignan estratégicamente en posiciones que generan rentabilidad en el mediano y largo plazo, el otro tercio se invierte para lograr ganancias acumulativas en el corto y mediano plazo.'
      }
    ],
    [
      {
        title: 'Análisis fundamental',
        content: 'Estudio exhaustivo sobre la organización, el atractivo del mercado, la propuesta de valor, las finanzas y tokenomics, los plazos de implementación y el análisis del código.'
      }, {
        title: 'Análisis técnico',
        content: 'Análisis grafico con el fin de optimizar el momento de compra o venta.'
      },
      {
        title: 'Análisis cuantitativo',
        content: 'Herramientos de ponderaicon de activos que permiten equilibrar el riesgo y el rendimiento de nuestra cartera general'
      }
    ]
  ]

  contentSideNavEn = [
    [
      {
        title: 'Innovation cycle',
        content: 'The blockchain technology is currently at a very early stage with potential for huge growth, as its adoption increases so will its utility and intrinsic value.'
      }, {
        title: 'New asset class',
        content: 'Cryptocurrencies are starting to get recognized as a new asset class by the main institutions and financial players'
      },
      {
        title: 'Diversification',
        content: 'Given its lack of correlation with the traditional financial assets, digital assets are an ideal instrument to include in a portfolio.'
      }
    ],
    [
      {
        title: 'Return Maximization',
        content: 'Through the diligent incorporation of in-house developed frameworks that achieve alpha while mitigating for risk'
      }, {
        title: 'Portfolio Administration',
        content: 'We seek to outperform the largest digital asset indices published by S&P and MVIS.'
      },
      {
        title: 'Portfolio Balancing',
        content: 'Two thirds of the investments are strategically allocated in positions that yield return in the medium to long term, the other third is traded for cumulative gains in the short to medium term.'
      }
    ],
    [
      {
        title: 'Fundamental Analysis',
        content: 'Comprehensive study about the organisation, the attractiveness of the market, the value proposition, the financials and tokenomics, the timeline for implementation and code analysis.'
      }, {
        title: 'Technical Analysis',
        content: 'Graphic analysis to optimize the moment to buy and sell each digital asset.'
      },
      {
        title: 'Quantitative Analysis',
        content: 'Asset weighting tools that allow us to balance the risk and reward of our portfolio.'
      }
    ]
  ]


  public config: SwiperConfigInterface = {
    direction: 'vertical',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false,
    speed: 1000
  };

  private scrollbar: SwiperScrollbarInterface = {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  };

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');

    this.currentLang = translate.defaultLang;
    this.translate.onLangChange.subscribe(
      (response: any) => {
        this.currentLang = response.lang;
      }
    )
  }

  ngOnInit(): void {
    this.currentContentSideNav = this.contentSideNav[0];
    this.currentContentSideNavEn = this.contentSideNavEn[0];
  }

  public onIndexChange(index: number) {
    this.currentPage = index;
    console.log('Swiper index: ', index);
    if (index == 1 || index == 3 || index == 4 || index == 6 || index == 8) {
      this.colorSideNav = 'black';
    } else {
      this.colorSideNav = 'white';
    }
  }

  goToPage(indexPage?: any) {
    this.directiveRef?.setIndex(indexPage);
  }

  openSideNav(opt: any) {
    console.log('opt', opt);

    this.currentContentSideNav = this.contentSideNav[opt];
    this.currentContentSideNavEn = this.contentSideNavEn[opt];
    this.sidenav.open();
    this.navBarOpenSideNav = true;
  }

  closeSideNav() {
    this.sidenav.close();
  }

  sideNavClosed() {
    this.navBarOpenSideNav = false;
  }
}
