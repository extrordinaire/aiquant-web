# aiquant

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### Notas de finalización de mantenimiento por parte de Maximo Angel Verzini Davico 1/07/2022

Análisis de la topología del sitio:

```js
<app-sidenavmobile (childToParent)="goToPage($event)"></app-sidenavmobile>
<app-sidenav id="PRINCIPALSIDENAV" [optStyle]="colorSideNav" (childToParent)="goToPage($event)"
  [ngClass]="{NavBarOpenSideNav: navBarOpenSideNav == true}"></app-sidenav>
<div id="SliderPage" class="swiper-container" [swiper]="config" (indexChange)="onIndexChange($event)">
  <div class="swiper-wrapper">
    <!-- SECCION 1  -->
    ...
    <!-- SECCION 2  -->
    ...
    <!-- SECCION 3  -->
    ...
    <!-- SECCION 4  -->
    <!-- ... -->
    <!-- SECCION 5  -->
    ...
    <!-- SECCION 6  -->
    <!-- ... -->
    <!-- SECCION 7  -->
    ...
    <!-- SECCION 8  -->
    ...
    <!-- SECCION 9  -->
    ...
    <!-- SECCION 10  -->
    ...
  </div>

  <div class="swiper-scrollbar" [hidden]="config.scrollbar === false"></div>
  <div class="swiper-pagination" [hidden]="config.pagination === false"></div>

  <!-- <div class="swiper-button-prev" [hidden]="config.navigation === false"></div>
  <div class="swiper-button-next" [hidden]="config.navigation === false"></div> -->
</div>
```

Tenemos un sólo archivo donde se encuentran definidas todas las secciones de la página, no se emplea correctamente la filosofía de diseño atómico, recomiendo fuertemente avanzar hacia un diseño más prolijo.

> Puede que estos problemas sean algo del framework, desconozco acerca de las decisiones que tomó el desarrollador a la hora de planificar la página

Cosas pendientes

```jsx

...
    <!-- SECCION 9  -->
    <div class="swiper-slide" style="z-index: 99;">
      <div class="SliderContent" fxLayout="column" fxLayoutAlign="center center" fxFlexFill>
        <mat-sidenav-container class="example-container">
          <mat-sidenav #sidenav mode="over" position="end" (closed)="sideNavClosed()">
            <div class="CloseSideNav" (click)="closeSideNav()">
              <span><img src="/assets/img/close-icon.svg" alt="" /></span>
            </div>
            <div class="SliderContentItems">
              <div class="SideNavItem" style="border-bottom: 1px solid #FFF;">
                <div class="SideNavImg">
                  <img src="/assets/img/img5.png" alt="">
                </div>
                <div class="SideNavItemContent" *ngIf="currentLang == 'es'">
                  <h4>{{currentContentSideNav[0].title}}</h4>
                  <div>{{currentContentSideNav[0].content}}</div>
                </div>
                <div class="SideNavItemContent" *ngIf="currentLang == 'en'">
                  <h4>{{currentContentSideNavEn[0].title}}</h4>
                  <div>{{currentContentSideNavEn[0].content}}</div>
                </div>
              </div>
              <div class="SideNavItem" style="border-bottom: 1px solid #FFF;">
                <div class="SideNavImg">
                  <img src="/assets/img/img5.png" alt="">
                </div>
                <div class="SideNavItemContent" *ngIf="currentLang == 'es'">
                  <h4>{{currentContentSideNav[1].title}}</h4>
                  <div>{{currentContentSideNav[1].content}}</div>
                </div>
                <div class="SideNavItemContent" *ngIf="currentLang == 'en'">
                  <h4>{{currentContentSideNavEn[1].title}}</h4>
                  <div>{{currentContentSideNavEn[1].content}}</div>
                </div>
              </div>
              <div class="SideNavItem">
                <div class="SideNavImg">
                  <img src="/assets/img/img5.png" alt="">
                </div>
                <div class="SideNavItemContent" *ngIf="currentLang == 'es'">
                  <h4>{{currentContentSideNav[2].title}}</h4>
                  <div>{{currentContentSideNav[2].content}}</div>
                </div>
                <div class="SideNavItemContent" *ngIf="currentLang == 'en'">
                  <h4>{{currentContentSideNavEn[2].title}}</h4>
                  <div>{{currentContentSideNavEn[2].content}}</div>
                </div>
              </div>
            </div>

        ...

      </div>
    </div>
...
```

Centrar los contenedores internos puede resultar una tarea engorrosa, ya que hay que corregir la estructura, hay mucho ruido visual, y luego de eso ver los estilos. Recomendaría tener en cuenta tecnologías como Tailwind CSS para manejar estilos responsivos de una forma más sencilla.

> En proyectos de este estilo yo tomaría en cuenta herramientas diseñadas para facilitar el desarrollo del proyecto, por ejemplo Preact.js junto a Tailwind y Sass, de esa forma evitar tanto código boilerplate.

```jsx

/*
    Ejemplo con Preact y Deno con el Framework Fresh.
    .routes/index.tsx...
*/

//** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import pages from "../pages/pages.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      { pages.map(page => return (page)) }
    </div>
  );
}

```

Y cada página tendría una forma similar mínima.
Como casi toda la página web está compuesta por elementos estáticos puede explotar la tecnología SSR con un framework FullStack como Fresh o el ya mencionado Preact, sirviendo al cliente HTML y CSS con el menor bundle de JavaScript posible, haciendo una página realmente ligera y rápida.

Recomiendo considerar el siguiente stack para futuros desarrollos web:

1. Next.js -> Solución fullStack basada en React.js con algunas mejoras
2. React.js -> Uno de los líderes del desarrollo web, es una librería y compuesta por lo básico e indispensable, tiene un ecosistema gigante con soluciones para cualquier proyecto.
3. Preact.js -> React hizo dieta, una solución más moderna mucho más ligera.
4. Deno -> Tecnología de vanguardia. Alternativa a NodeJS con mejor rendimiento.
5. Fresh.js -> Tecnología de vanguardia, Preact + Deno en un formato similar a Next.js
