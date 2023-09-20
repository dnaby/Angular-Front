import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { ChipModule } from 'primeng/chip';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService } from 'src/service/photo.service';
import { ImageModule } from 'primeng/image';
import { DividerModule } from 'primeng/divider';
import { PrimeNGConfig } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import { CommandeComponent } from './components/commande/commande.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { MarqueComponent } from './components/marque/marque.component';
import { ProduitComponent } from './components/produit/produit.component';
import { StockComponent } from './components/stock/stock.component';
import { ArticleCommandeComponent } from './components/article-commande/article-commande.component';
import { ClientComponent } from './components/client/client.component';
import { EmployeComponent } from './components/employe/employe.component';
import { MagasinComponent } from './components/magasin/magasin.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CommandeComponent,
    CategorieComponent,
    MarqueComponent,
    ProduitComponent,
    StockComponent,
    ArticleCommandeComponent,
    ClientComponent,
    EmployeComponent,
    MagasinComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    SidebarModule,
    ChipModule,
    GalleriaModule,
    ImageModule,
    DividerModule,
    TableModule,
    DataViewModule
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit { 
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
 }
