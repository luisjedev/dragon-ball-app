# 🐉 Dragon Ball Wiki App

Una aplicación web moderna para explorar el universo de Dragon Ball. Descubre todos los personajes, sus transformaciones y crea tu propia lista de favoritos.

![Dragon Ball App](https://dragon-ball-app-puce.vercel.app/logo.webp)

## ✨ Características

- 🔍 **Búsqueda inteligente** - Busca personajes con búsqueda en tiempo real y debounce
- 📱 **Diseño responsivo** - Optimizada para dispositivos móviles y escritorio
- ⭐ **Sistema de favoritos** - Guarda tus personajes favoritos localmente
- 🚀 **Navegación rápida** - Routing optimizado con TanStack Router
- 💾 **Cache inteligente** - Los datos se mantienen en cache para una experiencia fluida
- 🎨 **Interfaz moderna** - Diseño limpio inspirado en el anime

## 🛠️ Tecnologías Utilizadas

### Frontend

- **React 19** - Biblioteca principal de UI
- **TypeScript** - Tipado estático para mejor desarrollo
- **Vite** - Build tool rápido y moderno
- **CSS Modules** - Estilos encapsulados y modulares

### Estado y Datos

- **TanStack Query** - Gestión de estado del servidor y cache
- **TanStack Router** - Routing type-safe y moderno
- **Zustand** - Estado global ligero para favoritos
- **Axios** - Cliente HTTP para consumir la API

### Testing

- **Vitest** - Tests unitarios rápidos
- **Testing Library** - Utilities para testing de React
- **Playwright** - Tests end-to-end automatizados

### Linter

- **Biome** - Linter y formateador ultrarrápido
- **Ultracite** - Reglas modernas y estrictas

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js 18 o superior
- npm

### 1. Clonar el repositorio e instalar dependencias

```bash
git clone https://github.com/luisjedev/dragon-ball-app.git

cd dragon-ball-app

npm install
```

### 2. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

| Variable              | Descripción                       | Ejemplo                          | Requerida |
| --------------------- | --------------------------------- | -------------------------------- | --------- |
| `VITE_API_BASE_URL`   | URL base de la API de Dragon Ball | `https://dragonball-api.com/api` | ✅        |
| `VITE_LIMIT_PER_CALL` | Límite de personajes por consulta | `50`                             | ❌        |

## 🚀 Deployment

### 4. Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Construcción
npm run build        # Construye la aplicación para producción
npm run preview      # Previsualiza la construcción local

# Testing
npm run test         # Ejecuta tests unitarios
npm run test:e2e     # Ejecuta tests end-to-end
npm run test:e2e:ui  # Ejecuta tests E2E con interfaz gráfica
npm run test:e2e:debug # Ejecuta tests E2E en modo debug

# Linting
npm run lint         # Ejecuta el linter en todos los archivos
```

## 🏗️ Estructura del Proyecto

```
e2e/                  # Pruebas E2E
│
src/
├── assets/           # Recursos estáticos (fuentes, iconos, imágenes)
├── components/       # Componentes reutilizables
│   ├── character-card/
│   ├── character-details-card/
│   ├── header/
│   └── ...
├── config/          # Configuración de la aplicación
├── hooks/           # Custom hooks
├── mappers/         # Transformadores de datos
├── routes/          # Páginas y rutas de la aplicación
├── services/        # Servicios para consumir APIs
├── stores/          # Estado global con Zustand
├── testing/         # Configuración y mocks para testing
└── types/           # Definiciones de tipos TypeScript
```

## 🎯 Funcionalidades Principales

### Búsqueda de Personajes

- Búsqueda en tiempo real
- Filtrado por nombre
- Indicador de resultados encontrados

### Detalles de Personaje

- Información completa del personaje
- Lista de transformaciones disponibles

### Sistema de Favoritos

- Agregar/quitar personajes de favoritos
- Persistencia local con localStorage
- Página dedicada para ver todos los favoritos
- Búsqueda dentro de favoritos

## 🚀 Deployment

### Vercel

La aplicación está desplegada y puedes visitarla en:

#### https://dragon-ball-app-puce.vercel.app/

#### 🐉 ¡Disfruta explorando el universo de Dragon Ball!

---

<p align="center">
  <b>By <a href="https://github.com/luisjedev" target="_blank" style="color: #ec1d24; text-decoration: none;">luisjedev</a></b> with <span style="color: #ec1d24;">❤️</span>
</p>
