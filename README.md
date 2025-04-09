#SARADEY - WEB DE VENTAS DE AGUAS 
Este repositorio contiene el proyecto web para  "ventas de aguas" es un sitio web moderno y facil de manejar.

## Estructura del Proyecto


```
 saradey/
├── index.html                  # Página principal
├── productos.html              # Página de productos
├── carrito.html                # Página del carrito de compras
├── css/
│   └── style.css              # Estilos principales
├── js/
│   ├── main.js                # JavaScript principal
│   └── cart.js                # Funcionalidad del carrito
├── img/                       # Directorio para imágenes
│   ├── logo.png              # Logo de la empresa
│   ├── productos/            # Imágenes de productos
│   │   ├── bidon-20l.png
│   │   ├── pack-botellas.png
│   │   ├── dispensador.png
│   │   └── suscripcion.png
│   └── hero/                 # Imágenes de la sección hero
│       └── espacio.jpg
└── api/                      # API de placeholder para imágenes
    └── placeholder/
```
    
## Descripción de Archivos y Funcionalidades

### Páginas HTML
- **index.html**: Página principal del sitio con:
  - Hero section
  - Características
  - Productos destacados
  - Cómo funciona
  - Footer
- **productos.html**: Página de catálogo de productos con:
  - Lista completa de productos
  - Filtros y búsqueda
  - Funcionalidad para agregar productos al carrito
- **carrito.html**: Página para ver y gestionar el carrito de compras con:
  - Lista de productos seleccionados
  - Resumen de compra
  - Opciones de pago

### Estilos (CSS)
- **css/style.css**: Contiene todos los estilos principales del sitio, incluyendo:
  - Estilos generales (fuentes, colores, etc.)
  - Layout y grid para las secciones
  - Componentes reutilizables (botones, tarjetas de productos)
  - Media queries para garantizar que el diseño sea responsivo

### JavaScript (JS)
- **js/main.js**: Funcionalidades generales del sitio, como la navegación y comportamientos comunes.
- **js/cart.js**: Funcionalidad del carrito de compras:
  - Agregar y eliminar productos
  - Calcular el total
  - Gestionar la visualización del carrito

### Recursos
- **img/**: Carpeta que contiene todas las imágenes utilizadas en el sitio, organizada de la siguiente manera:
  - **logo.png**: Logo de la empresa.
  - **productos/**: Imágenes de productos como:
    - `bidon-20l.png`
    - `pack-botellas.png`
    - `dispensador.png`
    - `suscripcion.png`
  - **hero/**: Imágenes de la sección hero como:
    - `espacio.jpg`
  
- **api/placeholder/**: API para servicios de imágenes de marcador de posición que pueden usarse en la página hasta que se integren imágenes reales de productos.

## Secciones Principales del Sitio

### 1. **Header/Navegación**
La barra de navegación superior contiene enlaces a las principales páginas del sitio como "Inicio", "Productos" y "Carrito". Es una barra fija para facilitar el acceso rápido.

### 2. **Hero Section**
Una sección visual destacada que aparece al cargar el sitio, con una imagen de fondo y texto introductorio que invita al usuario a explorar los productos.

### 3. **Características**
Una sección que resalta las principales ventajas de comprar agua y productos relacionados con **Saradey**, tales como entrega rápida, productos de calidad y servicio al cliente.

### 4. **Productos**
En esta sección, los usuarios pueden ver los productos disponibles en el catálogo, filtrarlos por categorías y agregarlos al carrito para su compra.

### 5. **Cómo Funciona**
Una sección que explica el proceso para hacer un pedido: desde la selección de productos hasta la entrega en casa.

### 6. **Footer**
El pie de página contiene información adicional sobre la empresa, como:
  - Datos de contacto
  - Enlaces a redes sociales
  - Términos y condiciones

## Instrucciones para Desarrolladores

### Requisitos
Asegúrate de tener lo siguiente instalado en tu máquina:
- Un servidor web local, como [XAMPP](https://www.apachefriends.org/index.html), [MAMP](https://www.mamp.info/en/), o el complemento [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) para Visual Studio Code.
- Un editor de código como [Visual Studio Code](https://code.visualstudio.com/).

### Configuración

1. **Clona este repositorio** a tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/saradey.git
   cd saradey
