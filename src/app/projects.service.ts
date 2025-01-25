import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }
  getProjects() {
    return [
      {
        id: 1,
        title: 'Ecommerce Olivias Panadería',
        description: 'Plataforma de compras en línea con carrito, panel de administración e integración de pagos.',
        imageUrl: 'assets/images/olivias.png',
        githubUrl: 'https://github.com/adrianmfm/front-portafolio'
      },
      {
        id: 2,
        title: 'UF App',
        description: 'Consulta valores actualizados de la Unidad de Fomento (UF) en Chile.',
        imageUrl: 'assets/images/uf-app.png',
        githubUrl: 'https://github.com/adrianmfm/uf-app'
      },

      {
        id: 3,
        title: 'Login App',
        description: 'Login básico con Laravel, Vue.js y autenticación JWT.',
        imageUrl: 'assets/images/login-app.png',
        githubUrl: 'https://github.com/adrianmfm/login-app'
      },
      {
        id: 4,
        title: 'Vehicle GPS',
        description: 'Sistema de monitoreo GPS para vehículos.',
        imageUrl: 'assets/images/maps.png',
        githubUrl: 'https://github.com/adrianmfm/testVehicleGPS'

      },

    ]
  }
}
