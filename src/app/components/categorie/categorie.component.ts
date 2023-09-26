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
  sortOrder!: number;
  sortField!: string;

  constructor(private categorieService: CategorieService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.categorieService.getCategories().subscribe({
      next: (value: ICategorie[]) => {
        this.categories = value;
        console.log(value)
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
    this.categorie = {};
    this.submitted = false;
    this.categorieDialog = true;
  }

  deleteSelectedCategories() {
    this.confirmationService.confirm({
      message: 'Etes-vous sûr de vouloir supprimer ce(s) Categorie(s) ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          
      }
  });
  }

  editCategorie(categorie: ICategorie) {}

  deleteCategorie(categorie: ICategorie) {
    this.confirmationService.confirm({
      message: 'Es-tu sûr de vouloir supprimer le magasin ' + categorie.nom + '?',
      header: 'Confirmmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
      }
  });
  }

  hideDialog() {
    this.categorieDialog = false;
    this.submitted = false;
  }

  saveCategorie() {}

  onInputChange(event: Event, dt: any) {
    if (event.target instanceof HTMLInputElement) {
      const inputValue = event.target.value;
      return dt.filterGlobal(inputValue, 'contains');
    }
  }
}
