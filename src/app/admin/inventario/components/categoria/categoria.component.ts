import { Component, inject, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { title } from 'process';

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
        this.alerta("ACTUALIAZADO","Caterforia se modifico con exito!.","success")

      },
      (error:any)=>{
        this.alerta("ERROR AL ACTUALIZAR","Verifica los datos!","error")
      }
    )
    this.categoriaFrom.reset();
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
  eliminarCategoria(cat: Categoria) {
    Swal.fire({
      title: "¿Está seguro de eliminar la categoría?",
      text: "Una vez eliminado no se podrá recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoriaService.funEliminar(cat.id).subscribe(
          (res: any) =>{
            this.alerta("ELIMINADO!","Caterforia eliminada.","success")


            this.getCategorias();
            this.categoria_id = -1;
          },
          (error: any) => {
            this.alerta("ELIMINADO!","Caterforia eliminada.","success")
          }
        );
      }
    });
  }
  alerta(title: string, text: string, icon: 'success' | 'error' | 'info' | 'question') {
  Swal.fire({ title, text, icon });
  // title: title,
  // text: text,
  // icon: icon
}
}
