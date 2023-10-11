import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IProduit } from 'src/app/interfaces/produit.interface';
import { ProductService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  productDialog: boolean = false;
  products!: IProduit[];
  product!: IProduit;
  selectedProducts!: IProduit[] | null;
  submitted: boolean = false;

  constructor(private productService: ProductService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (value: IProduit[]) => {
        this.products = value;
      },
      error: (error: any) => {
        this.messageService.add({ severity: 'error', summary: error.name, detail: error.message });
        console.error(error);
      }
    });
  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Etes-vous sûr de vouloir supprimer ce(s) Produit(s) ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          
      }
    });
  }

  editProduct(product: IProduit) {
    this.product = { ...product };
    this.productDialog = true;
  }

  deleteProduct(product: IProduit) {
    this.confirmationService.confirm({
      message: 'Etes-vous sûr de vouloir supprimer le produit ' + product.nom + '?',
      header: 'Confirmmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        /*
        this.marqueService.deleteMarque(marque).subscribe({
          next: (value) => {
            this.marques = this.marques.filter((val) => val.id !== marque.id);
            this.marque = {};
            this.messageService.add({ severity: 'success', summary: "Success", detail: value.msg });
          },
          error: (error) => {
            if (error.status == 404) { this.messageService.add({ severity: 'warn', summary: error.statusText, detail: error.error.msg }); }
            else {this.messageService.add({ severity: 'error', summary: error.statusText, detail: error.message });}
          }
        })
        */
      }
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveMarque() {
    this.submitted = true;
    /*
    if (this.marque.id) {
      this.marqueService.updateMarque(this.marque).subscribe({
        next: (value) => {
          this.marques[this.findIndexById(this.marque.id!)] = value.marque;
          this.marques = [...this.marques];
          this.marqueDialog = false;
          this.marque = {};
          this.messageService.add({ severity: 'success', summary: "Success", detail: value.msg });
        },
        error: (error) => {
          if (error.status == 404 || error.status == 409) { this.messageService.add({ severity: 'warn', summary: error.statusText, detail: error.error.msg }); }
          else {this.messageService.add({ severity: 'error', summary: error.statusText, detail: error.message });}
        }
      });
    } else {
      this.marqueService.createNewMarque(this.marque).subscribe({
        next: (value) => {
          this.marques.push(value.marque);
          this.marques = [...this.marques];
          this.marqueDialog = false;
          this.marque = {};
          this.messageService.add({ severity: 'success', summary: "Success", detail: value.msg });
        },
        error: (error) => {
          if (error.status == 409) { this.messageService.add({ severity: 'warn', summary: error.statusText, detail: error.error.msg }); }
          else {this.messageService.add({ severity: 'error', summary: error.statusText, detail: error.message });}
        }
      });
    }
    */
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
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
