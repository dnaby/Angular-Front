import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ICategorie } from 'src/app/interfaces/categorie.interface';
import { CategorieService } from 'src/app/services/categorie.service';
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  layout: "list" | "grid" = 'list';
  categorieDialog: boolean = false;
  categories!: ICategorie[];
  categorie!: ICategorie;
  selectedCategories!: ICategorie[] | null;
  submitted: boolean = false;

  constructor(private categorieService: CategorieService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categorieService.getCategories().subscribe({
      next: (value: ICategorie[]) => {
        this.categories = value;
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
    this.categorie = {};
    this.submitted = false;
    this.categorieDialog = true;
  }

  editCategorie(categorie: ICategorie) {
    this.categorie = { ...categorie };
    this.categorieDialog = true;
  }

  deleteCategorie(categorie: ICategorie) {
    this.confirmationService.confirm({
      message: 'Etes-vous sûr de vouloir supprimer la catégorie ' + categorie.nom + '?',
      header: 'Confirmmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.categorieService.deleteCategorie(categorie).subscribe({
          next: (value) => {
            this.categories = this.categories.filter((val) => val.id !== categorie.id);
            this.categorie = {};
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
    this.categorieDialog = false;
    this.submitted = false;
  }

  saveCategorie() {
    this.submitted = true;

    if (this.categorie.id) {
      this.categorieService.updateCategorie(this.categorie).subscribe({
        next: (value) => {
          this.categories[this.findIndexById(this.categorie.id!)] = value.categorie;
          this.categories = [...this.categories];
          this.categorieDialog = false;
          this.categorie = {};
          this.messageService.add({ severity: 'success', summary: "Success", detail: value.msg });
        },
        error: (error) => {
          if (error.status == 404 || error.status == 409) { this.messageService.add({ severity: 'warn', summary: error.statusText, detail: error.error.msg }); }
          else {this.messageService.add({ severity: 'error', summary: error.statusText, detail: error.message });}
        }
      });
    } else {
      this.categorieService.createNewCategorie(this.categorie).subscribe({
        next: (value) => {
          this.categories.push(value.categorie);
          this.categories = [...this.categories];
          this.categorieDialog = false;
          this.categorie = {};
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
    for (let i = 0; i < this.categories.length; i++) {
        if (this.categories[i].id == id) {
            index = i;
            break;
        }
    }
    return index;
  }
}
