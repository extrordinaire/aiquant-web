import { ViewChild } from "@angular/core";
import { Component, HostListener } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
  SwiperPaginationInterface,
  SwiperScrollbarInterface,
} from "ngx-swiper-wrapper"; // ADD swiperDirective
declare var $: any;
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  @ViewChild(SwiperDirective) directiveRef?: SwiperDirective;
  @ViewChild("sidenav") sidenav!: MatSidenav;

  currentPage: number = 0;
  title = "leváre";
  currentPosition = window.pageYOffset;
  scrollBlock = true;
  colorSideNav = "white";
  currentContentSideNav: Array<{
    titleES: string;
    titleEN: string;
    contentES: string;
    contentEN: string;
  }> = [];
  optionSidenav: Number = 0;
  navBarOpenSideNav: boolean = false;
  currentLang: string = "";
  contentSideNav: Array<
    Array<{
      titleES: string;
      titleEN: string;
      contentES: string;
      contentEN: string;
    }>
  > = [
    [
      {
        titleES: "Ciclo de innovación",
        contentES:
          "La tecnología blockchain se encuentra actualmente en una etapa muy incipiente con potencial para un gran crecimiento, a medida que aumenta su adopción, también lo hará su utilidad y valor intrínseco.",
        titleEN: "Innovation cycle",
        contentEN:
          "The blockchain technology is currently at a very early stage with potential for huge growth, as its adoption increases so will its utility and intrinsic value.",
      },
      {
        titleES: "Nueva clase de activo financiero",
        contentES:
          "Los criptoactivos son cada vez mas reconocidos como una nueva clase de activo financiero por las principales instituciones y administradores de inversion.",
        titleEN: "New asset class",
        contentEN:
          "Cryptocurrencies are starting to get recognized as a new asset class by the main institutions and financial players",
      },
      {
        titleES: "Diversificación",
        contentES:
          "Dada su nula correlación con activos financieros tradicionales, los criptoactivos son un instrumento financiero ideal para incluir en un portafolio de inversión.",
        titleEN: "Diversification",
        contentEN:
          "Given its lack of correlation with the traditional financial assets, digital assets are an ideal instrument to include in a portfolio.",
      },
    ],
    [
      {
        titleES: "Maximización de retorno",
        contentES:
          "Ejecutamos estrategias de inversión eficientemente y sin emociones, esto garantiza una ejecución rápida y precisa.",
        titleEN: "Return Maximization",
        contentEN:
          "We execute investment strategies efficiently and without emotions, ensuring fast and accurate execution.",
      },
      {
        titleES: "Administración de portfolio",
        contentES:
          "Monitoreamos y evaluamos tendencias en tiempo real, optimizando el desempeño vs el benchmark.",
        titleEN: "Portfolio Administration",
        contentEN:
          "We monitor and evaluate trends in real-time, optimizing performance vs the benchmark.",
      },
      {
        titleES: "Asignación del fondo",
        contentES:
          "Nuestros sistemas aprenden y se adaptan continuamente a medida que analizan grandes volúmenes de datos.",
        titleEN: "Portfolio Balancing",
        contentEN:
          "Our systems continuously learn and adapt as they analyze large volumes of data.",
      },
    ],
    [
      {
        titleES: "Análisis coyuntural",
        contentES:
          "Este proceso implica el seguimiento de las noticias y eventos que pueden afectar el mercado. Los algoritmos cuentan con técnicas de procesamiento de lenguaje natural y aprendizaje automático para analizar grandes cantidades de datos, como noticias, blogs y redes sociales, para identificar tendencias y patrones.",
        titleEN: "Fundamental Analysis",
        contentEN:
          "Comprehensive study about the organisation, the attractiveness of the market, the value proposition, the financials and tokenomics, the timeline for implementation and code analysis.",
      },
      {
        titleES: "Análisis técnico",
        contentES:
          "Este proceso implica el uso de herramientas técnicas para analizar los datos históricos y actuales del mercado. Se utilizan indicadores técnicos para predecir el comportamiento futuro del mercado y para identificar oportunidades de compra y venta.",
        titleEN: "Technical Analysis",
        contentEN:
          "Graphic analysis to optimize the moment to buy and sell each digital asset.",
      },
      {
        titleES: "Análisis cuantitativo",
        contentES:
          "Este proceso implica el uso de modelos matemáticos y estadísticos para evaluar la rentabilidad de las inversiones.",
        titleEN: "Quantitative Analysis",
        contentEN:
          "Asset weighting tools that allow us to balance the risk and reward of our portfolio.",
      },
    ],
  ];

  public config: SwiperConfigInterface = {
    direction: "vertical",
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false,
    speed: 1000,
  };

  private scrollbar: SwiperScrollbarInterface = {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true,
  };

  private pagination: SwiperPaginationInterface = {
    el: ".swiper-pagination",
    clickable: true,
    hideOnClick: false,
  };

  constructor(public translate: TranslateService) {
    translate.addLangs(["en", "es"]);
    translate.setDefaultLang("en");

    this.currentLang = translate.defaultLang;
    this.translate.onLangChange.subscribe((response: any) => {
      this.currentLang = response.lang;
    });
  }

  ngOnInit(): void {
    this.currentContentSideNav = this.contentSideNav[0];
  }

  public onIndexChange(index: number) {
    this.currentPage = index;

    if (index == 1 || index == 3 || index == 4 || index == 6 || index == 8) {
      this.colorSideNav = "black";
    } else {
      this.colorSideNav = "white";
    }
  }

  goToPage(indexPage?: any) {
    this.directiveRef?.setIndex(indexPage);
  }

  openSideNav(opt: any) {
    this.currentContentSideNav = this.contentSideNav[opt];
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
