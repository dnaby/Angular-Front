import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IMarque } from 'src/app/interfaces/marque.interface';
import { MarqueService } from 'src/app/services/marque.service';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent implements OnInit {
  layout: "list" | "grid" = 'list';
  marqueDialog: boolean = false;
  marques!: IMarque[];
  marque!: IMarque;
  selectedMarques!: IMarque[] | null;
  submitted: boolean = false;

  constructor(private marqueService: MarqueService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.getMarques();
  }

  getMarques() {
    this.marqueService.getMarques().subscribe({
      next: (value: IMarque[]) => {
        this.marques = value;
      },
      error: (error: any) => {
        if (error.status == 500) {
          this.messageService.add({ severity: 'error', summary: "Get Marques Error", detail: "There must be a problem with the Services !" });
        } else {
          this.messageService.add({ severity: 'error', summary: error.statusText, detail: error.message }); 
        }
      }
    });
  }

  openNew() {
    this.marque = {};
    this.submitted = false;
    this.marqueDialog = true;
  }

  editMarque(marque: IMarque) {
    this.marque = { ...marque };
    this.marqueDialog = true;
  }

  deleteMarque(marque: IMarque) {
    this.confirmationService.confirm({
      message: 'Etes-vous sûr de vouloir supprimer la marque ' + marque.nom + '?',
      header: 'Confirmmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
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
      }
    });
  }

  hideDialog() {
    this.marqueDialog = false;
    this.submitted = false;
  }

  saveMarque() {
    this.submitted = true;

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
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.marques.length; i++) {
      if (this.marques[i].id == id) {
          index = i;
          break;
      }
    }
    return index;
  }
}
