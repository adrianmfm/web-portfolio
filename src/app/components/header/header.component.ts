import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: false
})
export class HeaderComponent {
  scrollDown(section: string): void {
    // Detectar el tamaño de la ventana
    const isMobile = window.innerWidth <= 768; // Puedes ajustar este valor según necesites

    // Definir los píxeles de desplazamiento según el tipo de dispositivo
    let pixelsToScroll: number;

    switch (section) {
      case 'proyectos':
        pixelsToScroll = isMobile ? 1280 : 700;
        break;
      case 'sobre-mi':
        pixelsToScroll = isMobile ? 600 : 300;
        break;
      case 'contacto':
        pixelsToScroll = isMobile ? 2800 : 1900;
        break;
      default:
        pixelsToScroll = 0; // Si no se encuentra la sección
        break;
    }

    // Desplazar la página
    window.scrollBy({
      top: pixelsToScroll,
      behavior: 'smooth'
    });
  }
}
