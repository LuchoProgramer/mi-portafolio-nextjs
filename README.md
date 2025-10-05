# 🚀 Luis Viteri - Portfolio Professional

<div align="center">

![Portfolio Preview](https://res.cloudinary.com/dltfsttr7/image/upload/w_800,h_400,c_fill,q_auto,f_auto/v1732480322/Screenshot_2024-11-24_at_15-31-19_netlify.app.jpg_JPEG_Image_1280_4301_pixels_l1ugdf.png)

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-10.0-orange?style=for-the-badge&logo=firebase)](https://firebase.google.com/)

[![Deploy to Netlify](https://img.shields.io/badge/Deploy%20to-Netlify-00C7B7?style=for-the-badge&logo=netlify)](https://luchodev.netlify.app/)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://luchodev.netlify.app/)

*Portafolio profesional de Luis Viteri (Luchodev) - Full-Stack Developer & Digital Marketing Strategist*

</div>

---

## 📋 **Tabla de Contenidos**

- [🎯 Características Principales](#-características-principales)
- [🏗️ Arquitectura del Proyecto](#️-arquitectura-del-proyecto)
- [🚀 Inicio Rápido](#-inicio-rápido)
- [⚙️ Configuración](#️-configuración)
- [📱 Tecnologías](#-tecnologías)
- [🎨 Diseño y UX](#-diseño-y-ux)
- [📈 SEO y Performance](#-seo-y-performance)
- [🔧 Scripts Disponibles](#-scripts-disponibles)
- [📚 Documentación](#-documentación)
- [🚀 Despliegue](#-despliegue)
- [🤝 Contribuir](#-contribuir)
- [📄 Licencia](#-licencia)
- [📧 Contacto](#-contacto)

---

## 🎯 **Características Principales**

### 💻 **Portfolio Moderno 2025**
- ✨ **Diseño Glassmorphism** con efectos visuales avanzados
- 📱 **Mobile-First** con navegación bottom-bar tipo app
- 🌙 **Dark/Light Mode** automático y manual
- ⚡ **Animaciones fluidas** con IntersectionObserver optimizado
- 🎨 **Gradientes dinámicos** y efectos blob animados

### 🛠️ **Funcionalidades Técnicas**
- 🔥 **Next.js 15.5.4** con App Router
- 📝 **TypeScript** para type safety
- 🎯 **SEO Optimizado** con Schema.org y Open Graph
- 📊 **CMS Integrado** para gestión de blog
- 🖼️ **Cloudinary** para optimización de imágenes
- 🔐 **Firebase** para autenticación y base de datos
- 📈 **Analytics Ready** con Google Analytics 4

### 🎨 **Secciones del Portfolio**
- 🏠 **Hero Section** con intro dinámica
- 👨‍💻 **About Me** con contadores animados
- 🚀 **PukaDigital** - Visión empresarial
- ⚡ **Technologies** con progress bars circulares
- 💼 **Projects** con filtros y métricas
- 🌐 **Languages** con niveles interactivos
- 📞 **Contact** con formulario funcional
- 📝 **Blog** con CMS visual

---

## 🏗️ **Arquitectura del Proyecto**

```
mi-portafolio-nextjs/
├── 📁 src/
│   ├── 📁 app/                     # App Router (Next.js 13+)
│   │   ├── 📄 layout.tsx           # Layout principal con SEO
│   │   ├── 📄 page.tsx             # Homepage
│   │   ├── 📁 blog/                # Rutas del blog
│   │   └── 📁 cms/                 # Panel administrativo
│   │
│   ├── 📁 components/              # Componentes React
│   │   ├── 📁 Header/              # Navegación y header
│   │   ├── 📁 home/                # Secciones del portfolio
│   │   ├── 📁 blogs/               # Componentes del blog
│   │   ├── 📁 cms/                 # Componentes del CMS
│   │   ├── 📁 auth/                # Autenticación
│   │   └── 📁 common/              # Componentes reutilizables
│   │
│   ├── 📁 hooks/                   # Custom React Hooks
│   │   ├── 📄 useIsMobile.ts       # Detección de móvil
│   │   ├── 📄 useIntersectionObserver.ts  # Animaciones optimizadas
│   │   ├── 📄 useModal.ts          # Modal handler
│   │   └── 📄 useUserRole.ts       # Gestión de roles
│   │
│   ├── 📁 context/                 # React Context
│   │   └── 📄 ThemeContext.tsx     # Tema dark/light
│   │
│   ├── 📁 lib/                     # Configuraciones externas
│   │   └── 📄 firebase.ts          # Config Firebase
│   │
│   ├── 📁 utils/                   # Utilidades
│   │   ├── 📄 cloudinary.ts        # Helpers Cloudinary
│   │   ├── 📄 slugGenerator.ts     # Generador de slugs
│   │   └── 📄 videoUtils.ts        # Utilidades de video
│   │
│   ├── 📁 types/                   # Tipos TypeScript
│   │   └── 📄 index.ts             # Definiciones de tipos
│   │
│   └── 📁 styles/                  # Estilos globales
│       └── 📄 index.css            # CSS + Tailwind
│
├── 📁 public/                      # Archivos estáticos
│   ├── 📄 favicon.ico              # Favicon
│   ├── 📄 manifest.json            # PWA Manifest
│   ├── 📄 robots.txt               # SEO Robots
│   ├── 📄 sitemap.xml              # Sitemap SEO
│   └── 📄 googleXXX.html           # Verificación Google
│
├── 📁 docs/                        # Documentación
├── 📄 next.config.ts               # Configuración Next.js
├── 📄 tailwind.config.ts           # Configuración Tailwind
├── 📄 next-sitemap.config.js       # SEO Sitemap
└── 📄 package.json                 # Dependencias
```

---

## 🚀 **Inicio Rápido**

### 📋 **Requisitos Previos**
- Node.js 18+ 
- npm o yarn
- Git

### ⚡ **Instalación en 3 pasos**

```bash
# 1️⃣ Clona el repositorio
git clone https://github.com/LuchoProgramer/mi-portafolio-nextjs.git
cd mi-portafolio-nextjs

# 2️⃣ Instala dependencias
npm install

# 3️⃣ Inicia el servidor de desarrollo
npm run dev
```

🎉 **¡Listo!** Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## ⚙️ **Configuración**

### 🔐 **Variables de Entorno**

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# 🔥 Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# 📷 Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name

# 📊 Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# 🌐 Site Configuration
SITE_URL=https://tu-dominio.com
```

### 🎨 **Personalización del Tema**

```typescript
// src/tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',    // Azul principal
        secondary: '#8b5cf6',  // Púrpura secundario
        accent: '#06b6d4',     // Cyan accent
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fadeInUp': 'fadeInUp 0.6s ease-out',
      }
    }
  }
}
```

---

## 📱 **Tecnologías**

### 🎯 **Frontend Stack**
- **Framework:** Next.js 15.5.4 (App Router)
- **Language:** TypeScript 5.0+
- **Styling:** Tailwind CSS 3.0
- **Animations:** Framer Motion + CSS3
- **Icons:** React Icons (Feather)
- **Charts:** React Circular Progressbar

### 🔧 **Backend & Services**
- **Database:** Firebase Firestore
- **Auth:** Firebase Authentication  
- **Storage:** Firebase Storage + Cloudinary
- **Analytics:** Google Analytics 4
- **Forms:** React Hook Form

### 📈 **SEO & Performance**
- **SEO:** Next-sitemap + Schema.org
- **Meta:** Open Graph + Twitter Cards
- **Performance:** Next.js Image Optimization
- **PWA:** Web App Manifest
- **Monitoring:** Core Web Vitals

### 🛠️ **Development Tools**
- **Linting:** ESLint + Prettier
- **Type Checking:** TypeScript
- **Git Hooks:** Husky (opcional)
- **Testing:** Jest + React Testing Library (configuración disponible)

---

## 🎨 **Diseño y UX**

### 🌈 **Filosofía de Diseño**
- **Minimalismo Elegante:** Clean, profesional, moderno
- **Glassmorphism:** Efectos de cristal y blur
- **Microinteracciones:** Feedback visual en cada acción
- **Responsive First:** Móvil como prioridad

### 📱 **Navegación Innovadora**
- **Desktop:** Header tradicional limpio
- **Mobile:** Bottom navigation tipo app
- **Accesibilidad:** ARIA labels y navegación por teclado

### 🎭 **Animaciones Inteligentes**
- **Mobile:** Contenido visible inmediatamente
- **Desktop:** Animaciones triggered por scroll
- **Performance:** Optimizado con `will-change` y `transform`

---

## 📈 **SEO y Performance**

### 🔍 **Optimización SEO**
```javascript
// Ejemplo de metadata optimizada
export const metadata = {
  title: "Luis Viteri | Full-Stack Developer & Digital Marketing Strategist",
  description: "🚀 Desarrollador especializado en React, Next.js, Django...",
  keywords: "Luis Viteri, Luchodev, Full-Stack Developer, React...",
  openGraph: {
    images: [{ url: "optimized-og-image.jpg", width: 1200, height: 630 }]
  }
}
```

### ⚡ **Performance Features**
- **Image Optimization:** Next.js Image + Cloudinary
- **Code Splitting:** Automático con App Router
- **Lazy Loading:** Componentes y imágenes
- **Preloading:** Critical resources
- **Bundle Analysis:** `npm run analyze`

### 📊 **Core Web Vitals Targets**
- **LCP:** < 2.5s ✅
- **FID:** < 100ms ✅  
- **CLS:** < 0.1 ✅
- **TTI:** < 3.5s ✅

---

## 🔧 **Scripts Disponibles**

```bash
# 🚀 Desarrollo
npm run dev          # Servidor de desarrollo (puerto 3000)
npm run dev:turbo    # Desarrollo con Turbopack (más rápido)

# 🏗️ Construcción
npm run build        # Build para producción
npm run start        # Servidor de producción
npm run export       # Exportación estática

# 🧹 Calidad de Código
npm run lint         # ESLint check
npm run lint:fix     # ESLint auto-fix
npm run type-check   # TypeScript check

# 📊 Análisis
npm run analyze      # Bundle analyzer
npm run lighthouse   # Performance audit

# 📝 SEO
npm run sitemap      # Generar sitemap
npm run seo-check    # Audit SEO

# 🧪 Testing (configuración disponible)
npm run test         # Jest + React Testing Library
npm run test:watch   # Tests en modo watch
npm run test:coverage # Coverage report
```

---

## 📚 **Documentación**

### 📖 **Guías Disponibles**
- [🚀 Guía de Inicio](./docs/getting-started.md)
- [🎨 Guía de Personalización](./docs/customization.md)
- [🔧 Configuración Avanzada](./docs/advanced-config.md)
- [📊 SEO y Analytics](./docs/seo-analytics.md)
- [🚀 Despliegue](./docs/deployment.md)
- [🐛 Troubleshooting](./docs/troubleshooting.md)

### 🔗 **Enlaces Útiles**
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Firebase Docs](https://firebase.google.com/docs)
- [Cloudinary Docs](https://cloudinary.com/documentation)

---

## 🚀 **Despliegue**

### 🌐 **Netlify (Recomendado)**
```bash
# Conecta tu repo con Netlify
# Build settings:
# Build command: npm run build
# Publish directory: .next
```

### ▲ **Vercel**
```bash
# Deploy automático con Vercel CLI
npx vercel
```

### 🐳 **Docker**
```dockerfile
# Dockerfile incluido para containerización
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### 📈 **Variables de Producción**
```env
NODE_ENV=production
SITE_URL=https://tu-dominio.com
ANALYTICS_ID=G-XXXXXXXXXX
```

---

## 🤝 **Contribuir**

### 🔄 **Proceso de Contribución**
1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### 📝 **Estándares de Código**
- **Commits:** Conventional Commits
- **Code Style:** Prettier + ESLint
- **TypeScript:** Strict mode
- **Components:** Functional components + hooks

### 🐛 **Reportar Bugs**
[Crear Issue](https://github.com/LuchoProgramer/mi-portafolio-nextjs/issues/new?template=bug_report.md)

### 💡 **Sugerir Features**
[Crear Feature Request](https://github.com/LuchoProgramer/mi-portafolio-nextjs/issues/new?template=feature_request.md)

---

## 📄 **Licencia**

Este proyecto está bajo la **MIT License**. Ver [LICENSE](./LICENSE) para más detalles.

```
MIT License - Luis Viteri (Luchodev) © 2025
```

---

## 📧 **Contacto**

<div align="center">

### 👨‍💻 **Luis Viteri (Luchodev)**

[![Email](https://img.shields.io/badge/Email-luis.viteri@pukadigital.com-blue?style=for-the-badge&logo=gmail)](mailto:luis.viteri@pukadigital.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-luis--viteri--dev-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/luis-viteri-dev)
[![GitHub](https://img.shields.io/badge/GitHub-LuchoProgramer-black?style=for-the-badge&logo=github)](https://github.com/LuchoProgramer)
[![Portfolio](https://img.shields.io/badge/Portfolio-luchodev.netlify.app-green?style=for-the-badge&logo=netlify)](https://luchodev.netlify.app)

**💼 PukaDigital LLC** | **📱 +593964065880** | **🌍 Remote Global**

</div>

---

<div align="center">

**⭐ Si este proyecto te ayudó, ¡dale una estrella en GitHub! ⭐**

*Desarrollado con ❤️ por [Luis Viteri](https://luchodev.netlify.app) - Full-Stack Developer & Digital Marketing Strategist*

</div>