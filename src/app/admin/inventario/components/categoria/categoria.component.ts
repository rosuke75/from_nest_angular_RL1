import { Component, inject, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

interface Categoria {
  detalles: any;
  id: number;
  nombre: string;
  detalle: string;
}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent implements OnInit {

   private categoriaService=inject(CategoriaService)

   categorias: Categoria[] =[]
   visible:boolean=false;
   categoria_id:number=-1; 
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
    if(this.categoria_id>0){
    this.categoriaService.funModificar(this.categoria_id,this.categoriaFrom.value).subscribe(
      (res:any)=>{
        this.visible=false;
        this.getCategorias();
        this.categoria_id=-1;


        Swal.fire({
          title: "good job!",
          text: "You clicked the button!",
          icon: "success",
          
        });

      },
      (error:any)=>{
        console.log(error);
      }
    )
  }
  else{
    this.categoriaService.funGuardar(this.categoriaFrom.value).subscribe(
      (res:any)=>{
        this.visible=false;
        this.getCategorias();

         Swal.fire({
          title: "REGISTRADO",
          text: "la categoria se creo con exito",
          icon: "success",
          
        });
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }
  }

  editarCategoria(cat:Categoria){
    this.visible=true
    this.categoria_id=cat.id
    this.categoriaFrom.setValue({nombre:cat.nombre,detalle:cat.detalle})

  }
  eliminirCategoria(categoria:Categoria){

  }
}
