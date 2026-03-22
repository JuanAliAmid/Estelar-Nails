# Estelar Nails 

Sitio web para un salón de uñas profesional en Rosario, Argentina. Desarrollado como proyecto final del curso de HTML y CSS en Coderhouse.

## Demo
[Ver proyecto](https://juanaliamid.github.io/Estelar-Nails/)

## Descripción

Sitio web de múltiples páginas para un negocio de nail art. Permite a las clientas conocer los servicios, explorar técnicas, ver trabajos realizados y reservar un turno mediante WhatsApp.

## Páginas

- **Home** — presentación del negocio con animaciones de entrada
- **Nuestros Trabajos** — galería de imágenes con grid layout y guía de técnicas
- **Servicios** — descripción de los servicios ofrecidos
- **Técnicas y Estilos** — detalle paso a paso de cada técnica con sistema de selección
- **Contáctanos** — formulario de reservas con mapa de ubicación integrado

## Funcionalidades

- **Selector de técnicas**: el usuario puede seleccionar una o varias técnicas y consultar directamente por WhatsApp con un mensaje pre-armado
- **Formulario de contacto**: validación de campos vacíos y formato de email, con envío por WhatsApp
- **Notificaciones**: feedback visual con Toastify para errores y validaciones
- **Año dinámico** en el footer generado con JavaScript
- **Animaciones**: Animate.css en elementos del header y AOS (Animate On Scroll) en secciones de contenido
- **Diseño responsive** con media queries para 6 breakpoints (375px, 576px, 768px, 992px, 1200px, 1400px)

## Tecnologías

- HTML5 semántico con meta tags para SEO
- SCSS con arquitectura modular (variables, mixins, extends, componentes, media queries)
- JavaScript vanilla
- Bootstrap 5
- Google Fonts (Corben)
- Animate.css
- AOS (Animate On Scroll)
- Toastify.js
- Google Maps embed

## Estructura SCSS

El proyecto usa una arquitectura de partials organizada en:
- `base/` — reset y tipografía
- `components/` — header, footer, formulario, cards, etc.
- `layout/` — textos generales
- `utilities/` — variables, mixins y extends
- `media-queries/` — responsive para todos los breakpoints

## Desafíos

- Armar el sistema de selección de técnicas con toggle y sincronización con la lista visible
- Implementar un grid layout complejo para la galería de imágenes (imagen grande + 4 chicas)
- Lograr que el sitio se vea bien en 6 tamaños de pantalla distintos manteniendo la estética
- Integrar el envío por WhatsApp tanto desde el formulario como desde el selector de técnicas