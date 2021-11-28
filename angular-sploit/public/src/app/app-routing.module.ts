import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ItensComponent } from './components/itens/itens.component';
import { MundoAbertoComponent } from './components/mundo-aberto/mundo-aberto.component';
import { RpgTurnoComponent } from './components/rpg-turno/rpg-turno.component';
import { PlataformaComponent } from './components/plataforma/plataforma.component';
import { MetroidvaniaComponent } from './components/metroidvania/metroidvania.component'
import { LutaComponent } from './components/luta/luta.component'
import { RpgTaticoComponent } from './components/rpg-tatico/rpg-tatico.component'
import { FpsComponent } from './components/fps/fps.component'
import { RpgComponent } from './components/rpg/rpg.component'
import { SoulsLikeComponent } from './components/souls-like/souls-like.component'
import { ColetatonComponent } from './components/coletaton/coletaton.component'


const routes: Routes = [

  {
    path: 'home', 
    component: HomeComponent,
    children: [
    {
      path:'mundoaberto',
      component: MundoAbertoComponent,
      data: {breadcrumb: {alias:'Mundo Aberto'} },
    },
    {
      path:'rpgturno',
      component: RpgTurnoComponent,
      data: {breadcrumb: {alias:'RPG de Turno'}},
      children: [
        {
        path:'itens',
        component: ItensComponent,
        data: {breadcrumb: {alias:'Itens'}}
        }
      ]
    },
    {
      path:'plataforma',
      component: PlataformaComponent,
      data: {breadcrumb: {alias:'Plataforma'}},
    },
    {
      path:'metroidvania',
      component: MetroidvaniaComponent
    },
    {
      path:'luta',
      component: LutaComponent,
      data: {breadcrumb: {alias:'Luta'}},
    },
    {
      path:'rpg-tatico',
      component: RpgTaticoComponent,
      data: {breadcrumb: {alias:'RPG Tático'}},
    },
    {
      path:'fps',
      component: FpsComponent,
      data: {breadcrumb: {alias:'FPS'}},
    },
    {
      path:'rpg',
      component: RpgComponent,
      data: {breadcrumb: {alias:'RPG'}},
    },
    {
      path:'souls-like',
      component: SoulsLikeComponent,
      data: {breadcrumb: {alias:'Souls Like'}},
    },
    {
      path:'coletaton',
      component: ColetatonComponent,
      data: {breadcrumb: {alias:'Coletaton'}},
    }
  ],
  

  
  

}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
