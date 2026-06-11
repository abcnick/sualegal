# Sua Legal - Sitio Web Profesional

Sitio web estático profesional para un abogado especializado en gerencia de familia. Diseñado para generar confianza, presentar servicios legales y facilitar el contacto con potenciales clientes.

## Stack Tecnológico

- **HTML5** — Estructura semántica y accesible
- **CSS3** — Variables CSS, diseño responsivo mobile-first, Grid/Flexbox
- **JavaScript Vanilla** — Interactividad sin frameworks ni dependencias
- **Google Fonts** — Playfair Display (encabezados) + Open Sans (cuerpo)
- **Formspree** — Procesamiento de formulario de contacto sin backend

## Estructura del Proyecto

```
sualegal/
├── index.html          # Página principal (single-page)
├── styles.css          # Estilos globales con variables CSS
├── script.js           # Navegación, validación, interactividad
├── CNAME               # Dominio personalizado para GitHub Pages
├── assets/
│   └── images/         # Imágenes optimizadas (< 200KB c/u)
└── README.md           # Este archivo
```

## Despliegue

El sitio se despliega automáticamente en **GitHub Pages** desde la rama principal del repositorio.

### Pasos para desplegar

1. Hacer push a la rama principal (`main`)
2. GitHub Pages detecta los cambios y publica automáticamente
3. El sitio estará disponible en menos de 10 minutos

### Configuración del dominio personalizado

El dominio `sualegal.com` está configurado a través de **Squarespace DNS** apuntando a GitHub Pages:

- **Archivo CNAME**: incluido en la raíz del repositorio con el dominio completo
- **DNS en Squarespace**: registro CNAME apuntando a `<usuario>.github.io`, o registros A apuntando a las IPs de GitHub Pages
- **HTTPS**: certificado SSL proporcionado automáticamente por GitHub Pages

#### IPs de GitHub Pages (registros A)

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

## Desarrollo Local

Para trabajar en el sitio localmente:

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/<usuario>/sualegal.git
   cd sualegal
   ```

2. Abrir `index.html` directamente en el navegador, o usar un servidor local:
   ```bash
   npx serve .
   ```

No se requiere proceso de compilación ni instalación de dependencias para el sitio en producción.

## Tests (desarrollo)

Los tests utilizan Vitest y fast-check como dependencias de desarrollo:

```bash
npm install
npm test
```

## Requisitos del Sitio

- Peso total de página < 1MB
- Imágenes individuales < 200KB
- Contraste WCAG 2.1 AA (4.5:1 texto normal, 3:1 texto grande)
- Responsive de 320px a 1920px sin scroll horizontal
- Navegable completamente por teclado

## Licencia

Todos los derechos reservados © Sua Legal
