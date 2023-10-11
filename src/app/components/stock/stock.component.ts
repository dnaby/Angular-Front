import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IStock } from 'src/app/interfaces/stock.interface';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  layout: "list" | "grid" = "list";
  stockDialog: boolean = false;
  stocks!: IStock[];
  stock!: IStock;
  selectedStocks!: IStock[] | null;
  submitted: boolean = false;

  constructor(private stockService: StockService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.getStocks();
  }

  getStocks() {
    this.stockService.getStocks().subscribe({
      next: (value: IStock[]) => {
        this.stocks = value;
      },
      error: (error: any) => {
        this.messageService.add({ severity: 'error', summary: error.name, detail: error.message });
        console.error(error);
      }
    });
  }

  openNew() {
    this.stock = {};
    this.submitted = false;
    this.stockDialog = true;
  }

  deleteSelectedStocks() {
    this.confirmationService.confirm({
      message: 'Etes-vous sûr de vouloir supprimer ce(s) Stock(s) ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          
      }
    });
  }

  editStock(stock: IStock) {
    this.stock = { ...stock };
    this.stockDialog = true;
  }

  deleteStock(stock: IStock) {

  }

  hideDialog() {
    this.stockDialog = false;
    this.submitted = false;
  }

  saveMarque() {
    this.submitted = true;
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.stocks.length; i++) {
      if (this.stocks[i].id == id) {
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
