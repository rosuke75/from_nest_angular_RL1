import { Component, inject, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { FormControl, FormGroup } from '@angular/forms';

interface Categoria {
detalles: any;
  id?: number;
  nombre: string;
  detalle?: string;
}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent implements OnInit {

   private categoriaService=inject(CategoriaService)

   categorias: Categoria[] =[]
   visible:boolean=false
   categoriaFrom=new FormGroup({
    nombre:new FormControl(""),
    detalle:new FormControl("")
   });

  ngOnInit(): void {
    this.getCategorias();
  }
  getCategorias(){
    this.categoriaService.funListar().subscribe(
      (res:any) => {
        this.categorias = res;
      },
      (error:any) => {
        console.log(error);
      }
    )
  }
  mostrarDialog(){
    this.visible=true
  }
  guardarCategoria(){
    this.categoriaService.funGuardar(this.categoriaFrom.value).subscribe(
      (res:any)=>{
        this.visible=false;
        this.getCategorias();

      },

      (error:any)=>{
        console.log(error);
      }
    )

  }
}
