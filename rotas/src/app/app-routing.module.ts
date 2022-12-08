import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portfolio/card/card.component';
import { ContactComponent } from './pages/portfolio/contact/contact.component';

const routes: Routes = [
  { path: '', component: TitleComponent, pathMatch: 'full' },
  { path: 'contact/:id', component: ContactComponent},
  //portfolio
  //portfolio/1
  //portfolio/1/abc
  {
    path: 'portfolio',
    component: CardComponent,
    children: [
      { path: ':id', component: CardComponent },
      { path: ':id/:token', component: CardComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
