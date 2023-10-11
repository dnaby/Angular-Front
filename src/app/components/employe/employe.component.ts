import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IEmploye } from 'src/app/interfaces/employe.interface';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  employeDialog: boolean = false;
  employes!: IEmploye[];
  employe!: IEmploye;
  selectedEmployes!: IEmploye[] | null;
  submitted: boolean = false;

  constructor(private employeService: EmployeService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.getEmployes();
  }

  getEmployes() {
    this.employeService.getEmployes().subscribe({
      next: (value: IEmploye[]) => {
        this.employes = value;
      },
      error: (error: any) => {
        this.messageService.add({ severity: 'error', summary: error.name, detail: error.message });
        console.error(error);
      }
    });
  }

  openNew() {
    this.employe = {};
    this.submitted = false;
    this.employeDialog = true;
  }

  deleteSelectedEmployes() {
    this.confirmationService.confirm({
      message: 'Etes-vous sûr de vouloir supprimer ce(s) Employe(s) ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          
      }
    });
  }

  editEmploye(employe: IEmploye) {
    this.employe = { ...employe };
    this.employeDialog = true;
  }

  deleteEmploye(employe: IEmploye) {
    this.confirmationService.confirm({
      message: 'Etes-vous sûr de vouloir supprimer l\'employe ' + employe.prenom + ' ' + employe.nom + '?',
      header: 'Confirmmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
      }
    });
  }

  hideDialog() {
    this.employeDialog = false;
    this.submitted = false;
  }

  saveMarque() {
    this.submitted = true;
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.employes.length; i++) {
      if (this.employes[i].id == id) {
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
