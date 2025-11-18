# 🎬 Peliculas2025

<div align="center">

![Movies](https://img.shields.io/badge/Movies-2025-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
![CSS3](https://img.shields.io/badge/CSS-3-blue)
![TMDb](https://img.shields.io/badge/TMDb-API-01d277)
![License](https://img.shields.io/badge/License-MIT-green)

**Gestor de películas favoritas con integración a The Movie Database (TMDb)**

[Características](#-características) • [Instalación](#-instalación) • [Uso](#-uso) • [API](#-configuración-de-api) • [Contribuir](#-contribuir)

</div>

---

## 📋 Descripción

**Peliculas2025** es una aplicación web moderna y minimalista para gestionar tu colección de películas favoritas. Permite buscar películas desde la base de datos de TMDb, añadirlas a tu lista personal, editarlas y organizarlas. Toda la información se almacena localmente en tu navegador usando localStorage.

### ¿Por qué usar Peliculas2025?

- ✨ **Interfaz intuitiva**: Diseño limpio y fácil de usar
- 🔍 **Búsqueda avanzada**: Integración completa con TMDb API
- 🏷️ **Palabras clave**: Descubre películas similares por keywords
- 💾 **Sin backend**: Todo funciona en tu navegador
- ⚡ **Rápido y ligero**: Sin dependencias, JavaScript vanilla puro
- 🎨 **Diseño responsive**: Funciona en cualquier dispositivo

---

## ✨ Características

### Gestión de Películas
- ➕ **Añadir películas manualmente** con título, director y miniatura
- ✏️ **Editar información** de películas existentes
- 🗑️ **Eliminar películas** de tu colección
- 👁️ **Ver detalles** completos incluyendo calificación, géneros y resumen
- 🔄 **Resetear lista** para empezar de nuevo

### Integración con TMDb
- 🔎 **Búsqueda de películas** en la base de datos de TMDb
- 📊 **Información completa**: Posters, directores, calificaciones, géneros
- 🏷️ **Búsqueda por palabras clave** (keywords)
- 🎯 **Descubrir películas similares** basadas en keywords
- 🖼️ **Imágenes de alta calidad** directamente desde TMDb

### Experiencia de Usuario
- 🎯 **Vista de tarjetas** visual y atractiva
- 🔔 **Validación de duplicados** al añadir películas
- 🖼️ **Fallback de imágenes** con placeholder automático
- ⌨️ **Atajos de teclado** (Enter para buscar)
- 📱 **Diseño responsive** adaptable a móviles y tablets

---

## 🚀 Tecnologías

Este proyecto está construido con tecnologías web modernas:

| Tecnología | Descripción |
|------------|-------------|
| ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white) | Estructura semántica y accesible |
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white) | Estilos modernos con Flexbox y Grid |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black) | Lógica de aplicación (ES6+) |
| ![TMDb API](https://img.shields.io/badge/-TMDb_API-01D277?logo=themoviedatabase&logoColor=white) | Base de datos de películas |
| ![LocalStorage](https://img.shields.io/badge/-LocalStorage-4285F4?logo=google-chrome&logoColor=white) | Almacenamiento local en navegador |

**Características técnicas:**
- ✅ Sin frameworks ni librerías externas
- ✅ JavaScript ES6+ (async/await, arrow functions, destructuring)
- ✅ Arquitectura MVC (Model-View-Controller)
- ✅ API REST con fetch
- ✅ Event delegation para mejor rendimiento
- ✅ Responsive design con Flexbox/Grid

---

## 📦 Requisitos Previos

Para usar esta aplicación solo necesitas:

- 🌐 Un navegador web moderno (Chrome, Firefox, Safari, Edge)
- 🔑 Una API key de [The Movie Database (TMDb)](https://www.themoviedb.org/settings/api) (gratis)
- 📄 Un servidor web local o simplemente abrir el archivo HTML

**Navegadores compatibles:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## 🛠️ Instalación

### Opción 1: Descarga directa

1. **Clona el repositorio:**
```bash
git clone https://github.com/hugorollan/Peliculas2025.git
cd Peliculas2025
```

2. **Configura tu API key de TMDb** (ver [sección de configuración](#-configuración-de-api))

3. **Abre el archivo en tu navegador:**
```bash
# Simplemente abre index.html con tu navegador
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### Opción 2: Servidor local

Si prefieres usar un servidor local:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

---

## 🎮 Uso

### Inicio Rápido

1. **Abre la aplicación** en tu navegador
2. Verás 3 películas de ejemplo pre-cargadas
3. Usa los botones del menú superior para:
   - 🏠 **Inicio**: Volver a la vista principal
   - ➕ **Añadir película**: Crear una entrada manual
   - 🔍 **Buscar película**: Buscar en TMDb
   - 🔄 **Resetear lista**: Eliminar todas las películas

### Funcionalidades Detalladas

#### 📝 Añadir Película Manualmente
1. Click en **"Añadir película"**
2. Completa los campos:
   - **Título**: Nombre de la película
   - **Director**: Nombre del director
   - **Miniatura**: URL de la imagen (opcional)
3. Click en **"Crear"**

#### 🔍 Buscar en TMDb
1. Click en **"Buscar película"**
2. Escribe el título de la película
3. Presiona **Enter** o click en **"Buscar Película"**
4. Explora los resultados
5. Click en **"Añadir"** para añadir a tu lista

#### 🏷️ Búsqueda por Keywords
1. Desde la búsqueda, click en **"Buscar Keyword"**
2. Ingresa un término (ej: "space", "superhero")
3. Selecciona una palabra clave de los resultados
4. Descubre películas relacionadas

#### 👁️ Ver Detalles
1. En cualquier película, click en **"Ver"**
2. Verás información completa:
   - Poster en alta calidad
   - Director
   - Calificación
   - Géneros
   - Resumen
   - Palabras clave (si está disponible)

#### ✏️ Editar y Eliminar
- **Editar**: Click en "Editar" → Modifica campos → "Actualizar"
- **Eliminar**: Click en "Borrar" → Confirmar eliminación

---

## 🔑 Configuración de API

Esta aplicación utiliza la API de [The Movie Database (TMDb)](https://www.themoviedb.org/) para buscar películas.

### Obtener tu API Key

1. **Regístrate en TMDb:**
   - Visita [https://www.themoviedb.org/signup](https://www.themoviedb.org/signup)
   - Crea una cuenta gratuita

2. **Solicita una API key:**
   - Ve a tu perfil → **Settings** → **API**
   - Solicita una API key (selecciona "Developer")
   - Acepta los términos de uso

3. **Configura la aplicación:**
   - Abre el archivo `script.js`
   - Localiza la línea 4:
   ```javascript
   const TMDB_API_KEY = 'tu-api-key-aqui';
   ```
   - Reemplaza `'tu-api-key-aqui'` con tu Bearer Token (API Read Access Token)

### Ejemplo de Configuración

```javascript
// En script.js, línea 4
const TMDB_API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTgxNWVj...';
```

**⚠️ Importante:**
- La API key es gratuita con límites generosos (ej: 1000 requests/día)
- NO compartas tu API key públicamente
- Para producción, considera usar variables de entorno

---

## 📁 Estructura del Proyecto

```
Peliculas2025/
│
├── index.html              # Página principal (HTML + estilos inline)
├── script.js               # Lógica de la aplicación (MVC)
├── styles.css              # Estilos adicionales
├── README.md               # Este archivo
│
├── files/                  # Recursos estáticos
│   ├── superlopez.png      # Imagen de ejemplo
│   ├── jurassicpark.png    # Imagen de ejemplo
│   ├── interstellar.png    # Imagen de ejemplo
│   ├── placeholder.png     # Imagen por defecto
│   └── enunciado.png       # Documentación adicional
│
└── tests/                  # Tests y verificaciones
    ├── checks.js           # Scripts de verificación
    └── testutils.js        # Utilidades de testing
```

### Arquitectura de script.js

El archivo `script.js` sigue el patrón **MVC** (Model-View-Controller):

```javascript
// MODELO DE DATOS
- mis_peliculas[]              // Array de películas
- localStorage API functions   // Persistencia

// VISTAS
- indexView()                  // Lista de películas
- showView()                   // Detalle de película
- editView()                   // Formulario de edición
- newView()                    // Formulario de creación
- searchView()                 // Búsqueda
- resultsView()                // Resultados de búsqueda
- keywordSearchResultsView()   // Resultados de keywords

// CONTROLADORES
- initContr()                  // Inicialización
- indexContr()                 // Vista principal
- createContr()                // Crear película
- updateContr()                // Actualizar película
- deleteContr()                // Eliminar película
- searchContr()                // Buscar en TMDb
- searchKeywordContr()         // Buscar keywords
- addFromAPIContr()            // Añadir desde TMDb

// ROUTER
- Event delegation system      // Manejo de eventos
```

---

## 🎨 Personalización

### Cambiar Colores

En `index.html` (línea 30) puedes modificar las variables CSS:

```css
body {
    --primary: #6200ee;    /* Color principal */
    --secondary: #29b6f6;  /* Color secundario */
}
```

### Películas Iniciales

En `script.js` (líneas 6-10) puedes cambiar las películas de ejemplo:

```javascript
let mis_peliculas_iniciales = [
    {titulo: "Tu Película", director: "Director", miniatura: "files/imagen.png"},
    // Añade más películas...
];
```

### Estilos de Tarjetas

En `index.html` (líneas 63-72) puedes ajustar el diseño de las tarjetas:

```css
div.movie {
    width: 200px;        /* Ancho de tarjeta */
    padding: 10px;       /* Espaciado interno */
    box-shadow: ...      /* Sombra */
}
```

---

## 🧪 Testing

El proyecto incluye verificaciones en la carpeta `tests/`:

- `testutils.js`: Utilidades para testing
- `checks.js`: Verificaciones de funcionalidad
- `TEST_VERIFICATION.html`: Página de verificación de integración TMDb

### Ejecutar Tests

Simplemente abre `TEST_VERIFICATION.html` en tu navegador para ver el estado de la implementación.

---

## 🐛 Solución de Problemas

### La búsqueda no funciona

**Problema:** Error al buscar películas en TMDb

**Soluciones:**
- ✅ Verifica que tu API key esté configurada correctamente
- ✅ Asegúrate de tener conexión a Internet
- ✅ Revisa la consola del navegador (F12) para errores
- ✅ Verifica que no haya bloqueadores de ads/scripts activos
- ✅ Prueba con un servidor web local en lugar de `file://`

### Las imágenes no cargan

**Problema:** Miniaturas rotas o no se muestran

**Soluciones:**
- ✅ Verifica que las URLs de las imágenes sean válidas
- ✅ Asegúrate de que los archivos en `/files/` existen
- ✅ La aplicación tiene fallback automático a `placeholder.png`
- ✅ Para TMDb, verifica que tu API key tenga permisos de lectura

### Los datos desaparecen

**Problema:** Las películas no se guardan

**Soluciones:**
- ✅ Verifica que tu navegador permita localStorage
- ✅ No uses modo incógnito (se borra al cerrar)
- ✅ Revisa que no estés limpiando datos del navegador
- ✅ Prueba en otro navegador para descartar problemas

### Error CORS

**Problema:** "CORS policy" en consola al buscar

**Soluciones:**
- ✅ Usa un servidor web local (no abras el HTML directamente)
- ✅ Usa extensiones como "CORS Unblock" (solo desarrollo)
- ✅ Verifica que tu API key sea válida

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si quieres mejorar este proyecto:

### Cómo Contribuir

1. **Fork el proyecto**
2. **Crea una rama** para tu feature:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. **Commit tus cambios**:
   ```bash
   git commit -m 'Añade nueva funcionalidad'
   ```
4. **Push a la rama**:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. **Abre un Pull Request**

### Ideas para Contribuir

- 🌍 **Internacionalización**: Añadir soporte para múltiples idiomas
- 🎬 **Series de TV**: Extender para gestionar series
- 📊 **Estadísticas**: Panel con estadísticas de tu colección
- 🔖 **Categorías**: Sistema de etiquetas personalizadas
- ⭐ **Calificaciones propias**: Sistema de rating personal
- 🌙 **Tema oscuro**: Modo dark theme
- 📤 **Export/Import**: Exportar datos a JSON/CSV
- 🔐 **Autenticación**: Login con cuenta de TMDb
- 🎯 **Filtros avanzados**: Filtrar por género, año, director

### Lineamientos

- ✅ Mantén el código limpio y comentado
- ✅ Sigue el estilo de código existente
- ✅ Prueba tus cambios en múltiples navegadores
- ✅ Actualiza la documentación si es necesario
- ✅ Usa commits descriptivos

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente para proyectos personales o comerciales.

```
MIT License

Copyright (c) 2025 Hugo Rollán

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👤 Autor

**Hugo Rollán**

- GitHub: [@hugorollan](https://github.com/hugorollan)
- Proyecto: [Peliculas2025](https://github.com/hugorollan/Peliculas2025)

---

## 🙏 Agradecimientos

- [The Movie Database (TMDb)](https://www.themoviedb.org/) por su excelente API gratuita
- [Google Fonts](https://fonts.google.com/) por la fuente Roboto
- Comunidad de desarrolladores por las mejores prácticas

---

## 📚 Recursos Adicionales

### Documentación de TMDb API
- [Getting Started](https://developers.themoviedb.org/3/getting-started/introduction)
- [Search Movies](https://developers.themoviedb.org/3/search/search-movies)
- [Movie Details](https://developers.themoviedb.org/3/movies/get-movie-details)
- [Keywords](https://developers.themoviedb.org/3/movies/get-movie-keywords)

### Tecnologías Usadas
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [LocalStorage API](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- [Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- [CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

<div align="center">

**⭐ Si te gusta este proyecto, dale una estrella en GitHub ⭐**

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red)
![Powered by TMDb](https://img.shields.io/badge/Powered%20by-TMDb-01d277)

</div>