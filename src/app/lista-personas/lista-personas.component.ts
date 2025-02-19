import { Component } from '@angular/core';
import { Persona } from '../persona';
import { NgFor } from '@angular/common';
import { PersonaRepositoryService } from '../persona-repository.service';

@Component({
  selector: 'app-lista-personas',
  imports: [NgFor],
  templateUrl: './lista-personas.component.html',
  styleUrl: './lista-personas.component.css'
})
export class ListaPersonasComponent {

  listaPersonas:Persona[]=[];
  
  constructor(private personaRepository:PersonaRepositoryService) {


    this.listaPersonas=personaRepository.buscarTodos();
    }

}
