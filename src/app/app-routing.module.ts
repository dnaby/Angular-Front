import { Injectable, NgModule } from '@angular/core';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { CommandeComponent } from './components/commande/commande.component';
import { HomeComponent } from './components/home/home.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { MarqueComponent } from './components/marque/marque.component';
import { ProduitComponent } from './components/produit/produit.component';
import { StockComponent } from './components/stock/stock.component';
import { ArticleCommandeComponent } from './components/article-commande/article-commande.component';
import { ClientComponent } from './components/client/client.component';
import { EmployeComponent } from './components/employe/employe.component';
import { MagasinComponent } from './components/magasin/magasin.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { Title } from '@angular/platform-browser';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home Page' },
  { path: 'categorie', component: CategorieComponent, title: 'Categorie Page' },
  { path: 'marque', component: MarqueComponent, title: 'Marque Page' },
  { path: 'produit', component: ProduitComponent, title: 'Product Page' },
  { path: 'stock', component: StockComponent, title: 'Stock Page' },
  { path: 'article_commande', component: ArticleCommandeComponent, title: 'Article Commande Page' },
  { path: 'client', component: ClientComponent, title: 'Client Page' },
  { path: 'order', component: CommandeComponent, title: 'Order Page' },
  { path: 'employe', component: EmployeComponent, title: 'Employe Page' },
  { path: 'store', component: MagasinComponent, title: 'Store Page' },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent, title: 'Not Found Page' }
];

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`${title}`);
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ]
})
export class AppRoutingModule { }
