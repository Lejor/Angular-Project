import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BreadcrumpComponent } from './components/breadcrump/breadcrump.component';
import { ItensComponent } from './components/itens/itens.component';
import { MundoAbertoComponent } from './components/mundo-aberto/mundo-aberto.component';
import { RpgTurnoComponent } from './components/rpg-turno/rpg-turno.component';
import { PlataformaComponent } from './components/plataforma/plataforma.component';
import { MetroidvaniaComponent } from './components/metroidvania/metroidvania.component';
import { LutaComponent } from './components/luta/luta.component';
import { RpgTaticoComponent } from './components/rpg-tatico/rpg-tatico.component';
import { FpsComponent } from './components/fps/fps.component';
import { RpgComponent } from './components/rpg/rpg.component';
import { SoulsLikeComponent } from './components/souls-like/souls-like.component';
import { ColetatonComponent } from './components/coletaton/coletaton.component';
import { BreadcrumbModule } from "xng-breadcrumb";
import { BreadcrumbService } from 'xng-breadcrumb';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BreadcrumpComponent,
    ItensComponent,
    MundoAbertoComponent,
    RpgTurnoComponent,
    PlataformaComponent,
    MetroidvaniaComponent,
    LutaComponent,
    RpgTaticoComponent,
    FpsComponent,
    RpgComponent,
    SoulsLikeComponent,
    ColetatonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbModule,
  ],
  providers: [BreadcrumbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
