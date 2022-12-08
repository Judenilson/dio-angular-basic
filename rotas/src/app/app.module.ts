import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IndexModule } from './pages/index/index.module';
import { PortfolioModule } from './pages/portfolio/portfolio.module';
import { MenuComponent } from './shared/menu/menu.component';
import { ContactComponent } from './pages/portfolio/contact/contact.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, ContactComponent],
  imports: [BrowserModule, AppRoutingModule, IndexModule, PortfolioModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
