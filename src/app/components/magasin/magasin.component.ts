import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IStore } from 'src/app/interfaces/store.interface';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-magasin',
  templateUrl: './magasin.component.html',
  styleUrls: ['./magasin.component.css']
})
export class MagasinComponent implements OnInit {
  storeDialog: boolean = false;
  stores!: IStore[];
  store!: IStore;
  selectedStores!: IStore[] | null;
  submitted: boolean = false;

  constructor(private storeService: StoreService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.storeService.getStores().subscribe({
      next: (value: IStore[]) => {
        this.stores = value;
      },
      error: (error: any) => {
        this.messageService.add({ severity: 'error', summary: error.name, detail: error.message });
        console.error(error);
      },
      complete: () => {
        // Callback pour la complétion (complete)
      }
    })
  }

  openNew() {
    this.store = {};
    this.submitted = false;
    this.storeDialog = true;
  }

  deleteSelectedStores() {
    this.confirmationService.confirm({
      message: 'Etes-vous sûr de vouloir supprimer ce(s) Magasin(s) ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          
      }
  });
  }

  editStore(store: IStore) {}

  deleteStore(store: IStore) {
    this.confirmationService.confirm({
      message: 'Es-tu sûr de vouloir supprimer le magasin ' + store.nom + '?',
      header: 'Confirmmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
      }
  });
  }

  hideDialog() {
    this.storeDialog = false;
    this.submitted = false;
  }

  saveStore() {}

  onInputChange(event: Event, dt: any) {
    if (event.target instanceof HTMLInputElement) {
      const inputValue = event.target.value;
      return dt.filterGlobal(inputValue, 'contains');
    }
  }
}
