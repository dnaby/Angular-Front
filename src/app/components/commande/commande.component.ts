import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ICommande } from 'src/app/interfaces/commande.interface';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  commandeDialog: boolean = false;
  commandes!: ICommande[];
  commande!: ICommande;
  selectedCommandes!: ICommande[] | null;
  submitted: boolean = false;

  constructor(private commandeService: CommandeService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.getCommandes();
  }

  getCommandes() {
    this.commandeService.getCommandes().subscribe({
      next: (value: ICommande[]) => {
        this.commandes = value;
      },
      error: (error: any) => {
        this.messageService.add({ severity: 'error', summary: error.name, detail: error.message });
        console.error(error);
      }
    });
  }

  openNew() {
    this.commande = {};
    this.submitted = false;
    this.commandeDialog = true;
  }

  deleteSelectedCommandes() {
    this.confirmationService.confirm({
      message: 'Etes-vous sûr de vouloir supprimer ce(s) Commande(s) ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          
      }
    });
  }

  editCommande(commande: ICommande) {
    this.commande = { ...commande };
    this.commandeDialog = true;
  }

  deleteCommande(commande: ICommande) {
    this.confirmationService.confirm({
      message: 'Etes-vous sûr de vouloir supprimer cette commande ?',
      header: 'Confirmmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
      }
    });
  }

  hideDialog() {
    this.commandeDialog = false;
    this.submitted = false;
  }

  saveCommande() {
    this.submitted = true;
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.commandes.length; i++) {
      if (this.commandes[i].id == id) {
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
