import { CardComponent } from './pages/portifolio/card/card.component';
import { TitleComponent } from './pages/index/title/title.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TitleComponent,
    pathMatch: 'full'
  },
  //portifolio
  //portifolio/1
  {
    path: 'portifolio', component: CardComponent, children: [
      {
        path: ':id',
        component: CardComponent
      },
    ]
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
