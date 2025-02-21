import { Component } from '@angular/core';
import { Persona } from '../persona';
import { NgFor } from '@angular/common';
import { PersonaRepositoryService } from '../persona-repository.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-personas',
  imports: [NgFor, FormsModule],
  templateUrl: './lista-personas.component.html',
  styleUrl: './lista-personas.component.css'
})
export class ListaPersonasComponent {

  filtroNombre:string="";
  listaPersonas: Persona[] = [];
  personaInsertar: Persona = {} as Persona;
  finDeLista:boolean=false;

  constructor(private personaRepository: PersonaRepositoryService) {


    this.listaPersonas = personaRepository.buscarTodos();
  }

  insertar() {
    //objeto personainsertar 
    this.personaRepository.insertar({ ...this.personaInsertar });
  }

  filtrar() {
  
    if(this.filtroNombre!="") {
      this.listaPersonas= this.personaRepository.filtrarNombre(this.filtroNombre);
    } else {
      this.listaPersonas=this.personaRepository.buscarTodos();
    }
    console.log(this.finDeLista);
    if (this.listaPersonas.length==0) {
      this.finDeLista=true;
    }else {
      this.finDeLista=false;
    }
  }
  //metodo de borrar del componente
  borrar(nombre:string) {
    this.personaRepository.borrar(nombre);
    this.listaPersonas=this.personaRepository.buscarTodos();
    if (this.listaPersonas.length==0) {
      this.finDeLista=true;
    }else {
      this.finDeLista=false;
    }
  }

  mensajeFinTabla() {

    
  }

}
