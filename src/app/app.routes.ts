import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

export const routes: Routes = [
  { path: '', component: InicioComponent, title: 'Inicio' },
  { path: 'usuarios', component: UsuariosComponent, title: 'Usuarios' }
];