import {Component, inject, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Product} from '../../MODELS/product_M';
import {HttpClient, HttpHeaders, HttpParamsOptions} from '@angular/common/http';
import {NgForOf} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-inventory',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent implements OnInit {

  private modalService=inject(NgbModal);

  constructor(private http:HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'myToken',
      'Content-Type': 'application/json',

    })
  };
  apiUrl:string= 'https://localhost:44332/api/Inventory';

   inventory ={
    productId:0,
    ProductName:"",
    ProductQuantity:0,
    reorderPoint:0
  }
  inventories:Product[]=[];

  ngOnInit():void {
    this.getInventories();
  }

// CRUD functions
  getInventories(){
    this.http.get<Product[]>(this.apiUrl)
      .subscribe(data=>{
        this.inventories=data;
        console.log(this.inventories);
      });
  }

  deleteLine(productId:number):void {

  }

  onSubmit() {
    this.http.post(this.apiUrl, this.inventory, this.httpOptions)
      .subscribe({
        next: v => console.log(v),
        error: e => console.log(e),
        complete: () => {
          alert("Inventory Successfully " + JSON.stringify(this.inventory));
        }
      });
    alert('Inventory clicked!' + JSON.stringify(this.inventory));
    this.getInventories();
  }

  openConfirmDialog() {
    this.modalService.open(ConfirmDialogComponent);
  }
}
