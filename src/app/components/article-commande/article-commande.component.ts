import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IArticleCommande } from 'src/app/interfaces/article_commande.interface';
import { ArticleCommandeService } from 'src/app/services/article_commande.service';

@Component({
  selector: 'app-article-commande',
  templateUrl: './article-commande.component.html',
  styleUrls: ['./article-commande.component.css']
})
export class ArticleCommandeComponent implements OnInit {
  articleCommandeDialog: boolean = false;
  articleCommandes!: IArticleCommande[];
  articleCommande!: IArticleCommande;
  selectedArticleCommandes!: IArticleCommande[] | null;
  submitted: boolean = false;

  constructor(private articleCommandeService: ArticleCommandeService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.getArticleCommandes();
  }

  getArticleCommandes() {
    this.articleCommandeService.getArticleCommandes().subscribe({
      next: (value: IArticleCommande[]) => {
        this.articleCommandes = value;
      },
      error: (error: any) => {
        this.messageService.add({ severity: 'error', summary: error.name, detail: error.message });
        console.error(error);
      }
    });
  }

  openNew() {
    this.articleCommande = {};
    this.submitted = false;
    this.articleCommandeDialog = true;
  }

  deleteSelectedArticleCommandes() {
    this.confirmationService.confirm({
      message: 'Etes-vous sûr de vouloir supprimer ce(s) Article(s) Commandé(s) ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          
      }
    });
  }

  editArticleCommande(articleCommande: IArticleCommande) {
    this.articleCommande = { ...articleCommande };
    this.articleCommandeDialog = true;
  }

  deleteArticleCommande(articleCommande: IArticleCommande) {
    this.confirmationService.confirm({
      message: 'Etes-vous sûr de vouloir supprimer l\' article commandé ?',
      header: 'Confirmmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
      }
    });
  }

  hideDialog() {
    this.articleCommandeDialog = false;
    this.submitted = false;
  }

  saveArticleCommande() {
    this.submitted = true;
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.articleCommandes.length; i++) {
      if (this.articleCommandes[i].id == id) {
          index = i;
          break;
      }
    }
    return index;
  }

  onInputChange(event: Event, dt: any) {
    if (event.target instanceof HTMLInputElement) {
      const inputValue = event.target.value;
      return dt.filterGlobal(inputValue, 'contains');
    }
  }
}
