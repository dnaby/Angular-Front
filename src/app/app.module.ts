import { CUSTOM_ELEMENTS_SCHEMA, NgModule, OnInit } from '@angular/core';
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
import { PhotoService } from 'src/app/services/photo.service';
import { ImageModule } from 'primeng/image';
import { DividerModule } from 'primeng/divider';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import { DataViewLayoutOptions } from 'primeng/dataview';
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
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { StoreService } from './services/store.service';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CardModule } from 'primeng/card';
import { MarqueService } from './services/marque.service';
import { FormsModule } from '@angular/forms';
import { CategorieService } from './services/categorie.service';

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
    DataViewModule,
    HttpClientModule,
    ToastModule,
    ToolbarModule,
    InputTextModule,
    DialogModule,
    ConfirmDialogModule,
    CardModule,
    FormsModule
  ],
  providers: [
    PhotoService, 
    MessageService, 
    ConfirmationService, 
    StoreService,
    MarqueService,
    CategorieService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule implements OnInit { 
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
 }
