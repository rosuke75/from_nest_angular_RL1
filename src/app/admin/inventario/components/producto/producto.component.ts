import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
deleteProduct(_t59: any) {
throw new Error('Method not implemented.');
}
  products:any[]=[
    {id:1,nombre:"Teclado",precio:394.96,categoria_id:5,stock:12,estado:"COMPLETO"},
    {id:1,nombre:"Teclado",precio:394.96,categoria_id:5,stock:12,estado:"COMPLETO"},
    {id:1,nombre:"Teclado",precio:394.96,categoria_id:5,stock:12,estado:"COMPLETO"},
    {id:1,nombre:"Teclado",precio:394.96,categoria_id:5,stock:12,estado:"COMPLETO"},
    {id:1,nombre:"Teclado",precio:394.96,categoria_id:5,stock:12,estado:"COMPLETO"},
    {id:1,nombre:"Teclado",precio:394.96,categoria_id:5,stock:12,estado:"COMPLETO"},
    {id:1,nombre:"Teclado",precio:394.96,categoria_id:5,stock:12,estado:"COMPLETO"},
    {id:1,nombre:"Teclado",precio:394.96,categoria_id:5,stock:12,estado:"COMPLETO"},
    {id:1,nombre:"Teclado",precio:394.96,categoria_id:5,stock:12,estado:"COMPLETO"},
    {id:1,nombre:"Teclado",precio:394.96,categoria_id:5,stock:12,estado:"COMPLETO"},
    {id:1,nombre:"Teclado",precio:394.96,categoria_id:5,stock:12,estado:"COMPLETO"},
    {id:1,nombre:"Teclado",precio:394.96,categoria_id:5,stock:12,estado:"COMPLETO"},
    {id:1,nombre:"Teclado",precio:394.96,categoria_id:5,stock:12,estado:"COMPLETO"},
    {id:1,nombre:"Teclado",precio:394.96,categoria_id:5,stock:12,estado:"COMPLETO"},
    {id:1,nombre:"Teclado",precio:394.96,categoria_id:5,stock:12,estado:"COMPLETO"},
    {id:1,nombre:"Teclado",precio:394.96,categoria_id:5,stock:12,estado:"COMPLETO"},
  ];
  cols:any[]=[]
selectedProducts: any;


  openNew(){
    
  }
  editProduct(prod:any){

  }
  deleteProductK(prod:any){

  }

}
