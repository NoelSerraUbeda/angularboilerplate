import { Component } from '@angular/core';
import { CrudComponent } from '../crud/crud.component';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CrudComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

}
