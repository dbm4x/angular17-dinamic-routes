import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
 imports: [CommonModule, RouterLink],
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent {

  integrantes = [
    { id: 1, nombre: 'Lanfranco Darel Caballero', rol: 'Desarrollador Web' },
    { id: 2, nombre: 'Luis Gerardo Catalas', rol: 'Desarrollador Web' },
    { id: 3, nombre: 'Lautaro Ancillotti', rol: 'Diseñador' },
    { id: 4, nombre: 'Gerardo Lauro Romero', rol: 'Diseñador' },
    { id: 5, nombre: 'Claudio Nicolas Audicio', rol: 'Diseñador' }
  ];

}