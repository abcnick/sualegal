# Requirements Document

## Introduction

Sitio web profesional estático para un abogado especializado en gerencia de familia. El sitio sirve como carta de presentación digital, mostrando los servicios legales ofrecidos, información de contacto y generando confianza con potenciales clientes. El sitio debe ser moderno, familiar pero completamente serio y profesional. Se desplegará en GitHub Pages (hosting gratuito) y usará el dominio personalizado "sualegal" configurado desde Squarespace DNS.

## Glossary

- **Sitio_Web**: El sitio web estático compuesto por HTML, CSS y JavaScript que se despliega en GitHub Pages.
- **Visitante**: Persona que accede al sitio web buscando información sobre los servicios legales.
- **Sección_Contacto**: Área del sitio que muestra email, teléfono y otros datos de contacto del abogado.
- **Sección_Servicios**: Área del sitio que describe los servicios de gerencia de familia ofrecidos.
- **Sección_Hero**: Área principal visible al cargar la página con mensaje de bienvenida y propuesta de valor.
- **Sección_Acerca**: Área que presenta al abogado, su experiencia y credenciales profesionales.
- **Paleta_Colores**: Conjunto de colores definidos para el sitio, orientados a transmitir seriedad profesional con calidez familiar.
- **Diseño_Responsivo**: Capacidad del sitio de adaptarse correctamente a diferentes tamaños de pantalla (móvil, tablet, escritorio).
- **GitHub_Pages**: Servicio gratuito de hosting de sitios estáticos proporcionado por GitHub.

## Requirements

### Requisito 1: Estructura General del Sitio

**Historia de Usuario:** Como visitante, quiero acceder a un sitio web bien estructurado y de carga rápida, para poder encontrar fácilmente la información que necesito sobre el abogado.

#### Criterios de Aceptación

1. THE Sitio_Web SHALL presentar una página única (single-page) con navegación interna a las diferentes secciones mediante anclas HTML (id).
2. THE Sitio_Web SHALL estar compuesto exclusivamente por archivos HTML, CSS y JavaScript sin dependencias de backend ni frameworks que requieran compilación.
3. THE Sitio_Web SHALL tener un peso total de página (incluyendo todos los recursos) inferior a 1MB para garantizar carga rápida.
4. THE Sitio_Web SHALL incluir metadatos SEO: un elemento title con el nombre del abogado y especialidad, una meta description de máximo 160 caracteres, y etiquetas Open Graph (og:title, og:description, og:image, og:url).
5. THE Sitio_Web SHALL utilizar las tipografías Playfair Display para encabezados y Open Sans para cuerpo de texto, cargadas desde Google Fonts con font-display: swap.

### Requisito 2: Diseño Visual y Paleta de Colores

**Historia de Usuario:** Como visitante, quiero percibir un sitio profesional y confiable con una estética cálida y familiar, para sentir confianza al considerar los servicios legales.

#### Criterios de Aceptación

1. THE Paleta_Colores SHALL definir como color primario el azul oscuro (#1B3A5C), aplicándolo a la barra de navegación, encabezados principales y pie de página.
2. THE Paleta_Colores SHALL definir como color secundario el dorado (#C9A84C), aplicándolo a botones de llamada a la acción, íconos destacados y acentos decorativos.
3. THE Paleta_Colores SHALL utilizar como color de fondo un blanco cálido (#FAFAFA) y un gris claro (#F0F0F0) para secciones alternas.
4. THE Paleta_Colores SHALL utilizar como color de texto principal un gris oscuro (#2D2D2D) que cumpla un ratio de contraste mínimo de 4.5:1 sobre todos los fondos definidos (#FAFAFA y #F0F0F0).
5. THE Paleta_Colores SHALL cumplir con un ratio de contraste mínimo de 4.5:1 para texto normal y 3:1 para texto grande (18px o superior) según las pautas WCAG 2.1 nivel AA, en todas las combinaciones de texto y fondo utilizadas.
6. THE Sitio_Web SHALL aplicar exclusivamente los colores de la Paleta_Colores en todas las secciones, incluyendo los estados interactivos de los elementos (hover, focus y active).
7. WHEN un elemento interactivo cambia de estado (hover, focus o active), THE Sitio_Web SHALL mostrar una variación visual perceptible utilizando únicamente colores derivados de la Paleta_Colores definida.

### Requisito 3: Diseño Responsivo

**Historia de Usuario:** Como visitante, quiero acceder al sitio desde cualquier dispositivo, para poder consultar la información del abogado desde mi teléfono, tablet o computadora.

#### Criterios de Aceptación

1. THE Diseño_Responsivo SHALL adaptar el layout para pantallas de 320px a 1920px de ancho sin generar scroll horizontal, sin superposición de elementos y sin desbordamiento de contenido fuera de su contenedor.
2. WHILE el ancho de pantalla es menor a 768px, THE Sitio_Web SHALL mostrar el menú de navegación en formato hamburguesa.
3. WHILE el ancho de pantalla es mayor o igual a 768px, THE Sitio_Web SHALL mostrar el menú de navegación completo en formato horizontal.
4. THE Sitio_Web SHALL utilizar imágenes optimizadas que no excedan 200KB por archivo individual.
5. WHILE el ancho de pantalla es menor a 768px, THE Diseño_Responsivo SHALL garantizar que los elementos táctiles tengan un área mínima de 44x44 píxeles.
6. WHILE el ancho de pantalla es mayor a 1920px, THE Sitio_Web SHALL centrar el contenido con un ancho máximo de 1920px.

### Requisito 4: Sección Hero

**Historia de Usuario:** Como visitante, quiero ver inmediatamente quién es el abogado y qué ofrece, para decidir rápidamente si sus servicios son relevantes para mi situación.

#### Criterios de Aceptación

1. THE Sección_Hero SHALL mostrar el nombre completo del abogado como encabezado principal (h1) y su especialidad en gerencia de familia como texto secundario inmediatamente debajo.
2. THE Sección_Hero SHALL incluir un mensaje de propuesta de valor de máximo 20 palabras que describa el beneficio principal para el cliente.
3. THE Sección_Hero SHALL incluir un botón de llamada a la acción con texto que indique intención de contacto, que dirija a la Sección_Contacto mediante navegación interna.
4. THE Sección_Hero SHALL ocupar al menos el 80% de la altura visible de la pantalla (viewport height).
5. WHILE el ancho de pantalla está entre 320px y 1920px, THE Sección_Hero SHALL mostrar todo su contenido (nombre, especialidad, propuesta de valor y botón) sin requerir desplazamiento horizontal.

### Requisito 5: Sección de Servicios

**Historia de Usuario:** Como visitante, quiero conocer los servicios específicos de gerencia de familia que ofrece el abogado, para evaluar si puede ayudarme con mi caso.

#### Criterios de Aceptación

1. THE Sección_Servicios SHALL listar entre 4 y 8 servicios específicos de gerencia de familia.
2. WHEN un servicio es presentado, THE Sección_Servicios SHALL mostrar un ícono, un título del servicio de máximo 40 caracteres y una descripción de máximo 50 palabras.
3. WHEN el ancho de pantalla es menor a 768px, THE Sección_Servicios SHALL organizar los servicios en una cuadrícula de 1 columna; WHEN el ancho es entre 768px y 1199px, en 2 columnas; WHEN el ancho es 1200px o mayor, en 3 columnas.
4. THE Sección_Servicios SHALL incluir un encabezado de nivel h2 visible que contenga una referencia textual a los servicios ofrecidos.

### Requisito 6: Sección Acerca del Abogado

**Historia de Usuario:** Como visitante, quiero conocer la experiencia y trayectoria del abogado, para evaluar su competencia profesional antes de contactarlo.

#### Criterios de Aceptación

1. THE Sección_Acerca SHALL incluir un elemento img para la foto profesional del abogado con dimensiones mínimas de 200x200 píxeles y atributo alt descriptivo.
2. THE Sección_Acerca SHALL presentar una biografía profesional que incluya: universidad de egreso, título obtenido, años de experiencia y áreas principales de práctica.
3. THE Sección_Acerca SHALL mostrar la especialización en gerencia de familia mediante un encabezado o texto destacado visualmente diferenciado del párrafo de biografía.
4. THE Sección_Acerca SHALL presentar el contenido en un layout de dos columnas (foto y texto) en pantallas mayores a 768px, y en una columna (foto arriba, texto abajo) en pantallas menores.

### Requisito 7: Sección de Contacto

**Historia de Usuario:** Como visitante, quiero encontrar fácilmente las formas de contactar al abogado, para poder comunicarme y solicitar una consulta.

#### Criterios de Aceptación

1. THE Sección_Contacto SHALL mostrar la dirección de correo electrónico del abogado como enlace clicable (mailto).
2. THE Sección_Contacto SHALL mostrar el número de teléfono del abogado como enlace clicable (tel:) para dispositivos móviles.
3. WHERE la dirección física de la oficina está disponible, THE Sección_Contacto SHALL mostrarla como texto visible dentro de la sección.
4. WHERE el abogado proporciona un número de WhatsApp, THE Sección_Contacto SHALL incluir un enlace directo a la API de WhatsApp (wa.me) que abra una conversación nueva.
5. THE Sección_Contacto SHALL ser accesible desde la barra de navegación principal y estar ubicada como última sección antes del pie de página.
6. THE Sección_Contacto SHALL incluir un formulario de contacto con los campos: nombre (requerido, máximo 100 caracteres), email (requerido, con validación de formato de correo electrónico), teléfono (opcional, máximo 20 caracteres) y mensaje (requerido, máximo 1000 caracteres).
7. WHEN el visitante intenta enviar el formulario sin completar los campos requeridos o con formato de email inválido, THE Sitio_Web SHALL mostrar un mensaje de error junto al campo correspondiente indicando el problema, sin enviar el formulario.
8. WHEN el formulario de contacto es enviado exitosamente, THE Sitio_Web SHALL procesar el envío mediante un servicio gratuito de formularios (Formspree o similar) y mostrar un mensaje de confirmación indicando que el mensaje fue recibido.
9. IF el envío del formulario falla por error de red o del servicio, THEN THE Sitio_Web SHALL mostrar un mensaje de error indicando que el envío no se completó y que el visitante puede intentar nuevamente o usar los otros canales de contacto.

### Requisito 8: Navegación

**Historia de Usuario:** Como visitante, quiero navegar fácilmente entre las secciones del sitio, para acceder rápidamente a la información que me interesa.

#### Criterios de Aceptación

1. THE Sitio_Web SHALL incluir una barra de navegación fija (sticky) en la parte superior de la página.
2. WHEN un enlace de navegación es seleccionado, THE Sitio_Web SHALL desplazar la vista suavemente (smooth scroll) a la sección correspondiente, compensando la altura de la barra de navegación fija para que el inicio de la sección sea visible y no quede oculto.
3. THE Sitio_Web SHALL incluir enlaces de navegación a todas las secciones principales: Inicio, Servicios, Acerca, Contacto.
4. THE Sitio_Web SHALL mostrar el logotipo o nombre del despacho en la barra de navegación.
5. WHILE el Visitante se desplaza por la página, THE Sitio_Web SHALL resaltar visualmente el enlace de navegación correspondiente a la sección actualmente visible en el viewport.
6. WHEN un enlace de navegación es seleccionado en el menú hamburguesa (pantallas menores a 768px), THE Sitio_Web SHALL cerrar el menú de navegación después de iniciar el desplazamiento a la sección correspondiente.

### Requisito 9: Pie de Página (Footer)

**Historia de Usuario:** Como visitante, quiero ver información legal y enlaces adicionales al final del sitio, para acceder a datos complementarios del despacho.

#### Criterios de Aceptación

1. THE Sitio_Web SHALL incluir un pie de página con aviso de derechos de autor que muestre el año actual generado dinámicamente mediante JavaScript.
2. THE Sitio_Web SHALL mostrar en el pie de página la dirección de correo electrónico como enlace clicable (mailto) y el número de teléfono como enlace clicable (tel:), consistentes con los datos de la Sección_Contacto.
3. WHERE el abogado proporcione perfiles en redes sociales (LinkedIn, Facebook u otras plataformas profesionales), THE Sitio_Web SHALL mostrar enlaces con íconos identificables a dichos perfiles en el pie de página.
4. WHEN un enlace de red social en el pie de página es seleccionado, THE Sitio_Web SHALL abrir el perfil correspondiente en una nueva pestaña del navegador e incluir una indicación accesible de que el enlace abre en ventana nueva.

### Requisito 10: Hosting y Despliegue

**Historia de Usuario:** Como propietario del sitio, quiero que el hosting sea gratuito y el despliegue sencillo, para mantener el sitio sin costos recurrentes adicionales.

#### Criterios de Aceptación

1. THE Sitio_Web SHALL desplegarse en GitHub_Pages desde el repositorio del proyecto utilizando la rama principal o una rama gh-pages.
2. THE Sitio_Web SHALL ser accesible a través del dominio personalizado "sualegal" configurado en Squarespace DNS mediante registros CNAME o A apuntando a GitHub Pages.
3. THE Sitio_Web SHALL servirse mediante HTTPS con certificado SSL proporcionado por GitHub_Pages, y las solicitudes HTTP deberán redirigir automáticamente a HTTPS.
4. WHEN se realiza un push a la rama de despliegue del repositorio, THE GitHub_Pages SHALL actualizar el sitio automáticamente en un plazo máximo de 10 minutos.
5. THE Sitio_Web SHALL incluir un archivo CNAME en la raíz del repositorio con el dominio personalizado completo para la configuración de GitHub_Pages.

### Requisito 11: Accesibilidad

**Historia de Usuario:** Como visitante con necesidades de accesibilidad, quiero poder navegar y consumir el contenido del sitio, para acceder a los servicios legales sin barreras.

#### Criterios de Aceptación

1. THE Sitio_Web SHALL incluir atributos alt descriptivos en todas las imágenes, con texto que describa el contenido o función de la imagen en máximo 125 caracteres.
2. THE Sitio_Web SHALL ser navegable completamente mediante teclado, incluyendo acceso a todos los enlaces, botones y campos de formulario mediante la tecla Tab.
3. THE Sitio_Web SHALL utilizar una estructura semántica de encabezados (h1-h6) jerárquica y lógica, con exactamente un h1 por página.
4. THE Sitio_Web SHALL utilizar etiquetas HTML semánticas (header, nav, main, section, footer) y declarar el atributo lang="es" en el elemento html.
5. WHEN un elemento interactivo recibe el foco mediante teclado, THE Sitio_Web SHALL mostrar un indicador de foco visible con un outline de al menos 2px de grosor.
6. THE Sitio_Web SHALL asociar cada campo de formulario con una etiqueta label explícita mediante el atributo for/id.
7. THE Sitio_Web SHALL no transmitir información exclusivamente mediante color; toda indicación visual de estado (errores, éxito, enlaces) deberá complementarse con texto o iconografía.
