# 🎨 Guía de Personalización - Portfolio Luis Viteri

Esta guía te enseñará cómo personalizar completamente el portfolio para que refleje tu marca personal y estilo profesional.

## 🎯 Contenido Personalizable

### 📝 Información Personal

#### 1. Datos Básicos del Hero
**Archivo:** `src/components/home/Home.tsx`

```typescript
// Líneas 20-26
const dynamicTexts = [
    "Tu Especialidad Principal",
    "Tu Segunda Especialidad", 
    "Tu Tercera Especialidad", 
    "Tu Cuarta Especialidad",
    "Tu Quinta Especialidad",
    "Tu Sexta Especialidad"
];

// Líneas 40-45
const personalInfo = {
    name: "Tu Nombre Completo",
    email: "tu-email@tudominio.com",
    profileImage: "URL_de_tu_foto_profesional",
    cvUrl: "URL_de_tu_CV"
};
```

#### 2. Información About Me
**Archivo:** `src/components/home/AboutMe.tsx`

```typescript
// Líneas 25-35
const counters = {
    experience: 5,    // Años de experiencia
    projects: 50,     // Proyectos completados  
    clients: 30       // Clientes satisfechos
};

// Líneas 120-130
const aboutText = `
Tu descripción profesional aquí. Habla sobre tu experiencia,
pasiones, y lo que te hace único como profesional.
Incluye tus fortalezas y valores principales.
`;

const skills = [
    "Skill 1", "Skill 2", "Skill 3", "Skill 4",
    "Skill 5", "Skill 6", "Skill 7", "Skill 8"
];
```

#### 3. Información de Contacto
**Archivo:** `src/components/home/Contact.tsx`

```typescript
// Líneas 65-85
const contactInfo = [
    {
        icon: <FiMail className="w-6 h-6" />,
        title: "Email",
        value: "tu-email@tudominio.com",
        link: "mailto:tu-email@tudominio.com"
    },
    {
        icon: <FiPhone className="w-6 h-6" />,
        title: "Teléfono", 
        value: "+1234567890",
        link: "tel:+1234567890"
    },
    {
        icon: <FiMapPin className="w-6 h-6" />,
        title: "Ubicación",
        value: "Tu Ciudad, Tu País",
        link: "https://maps.google.com/?q=TuCiudad"
    }
];
```

### 🚀 Sección de Empresa/Proyecto Principal

#### Personalizar PukaDigital Section
**Archivo:** `src/components/home/PukaDigital.tsx`

```typescript
// Cambiar nombre de la empresa y descripción
const companyInfo = {
    name: "Tu Empresa LLC",
    description: "Descripción de tu empresa o proyecto principal",
    status: "En Desarrollo", // o "Activo", "Próximamente"
    tagline: "Tu tagline empresarial único"
};

// Servicios de tu empresa (líneas 30-70)
const services = [
    {
        icon: <FiCode className="w-6 h-6" />,
        title: "Tu Servicio 1",
        description: "Descripción del servicio",
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
        color: "blue"
    },
    // ... más servicios
];

// Timeline de tu empresa (líneas 75-85)
const timeline = [
    { phase: "Fase 1", title: "Título Fase", status: "Estado", date: "Q1 2025" },
    // ... más fases
];
```

### 💻 Tecnologías y Skills

#### Actualizar Stack Tecnológico
**Archivo:** `src/components/home/Technologies.tsx`

```typescript
// Líneas 8-70
const technologies = [
    { 
        name: "Tu Tecnología", 
        logo: "URL_del_logo",
        level: 90,  // Porcentaje de dominio (0-100)
        category: "Frontend", // "Frontend", "Backend", "Tools"
        color: "#ColorHex"
    },
    // ... más tecnologías
];

// Personalizar categorías (línea 85)
const categories = ["All", "Frontend", "Backend", "Tools", "TuCategoria"];
```

### 💼 Proyectos Portfolio

#### Agregar/Editar Proyectos
**Archivo:** `src/components/home/Projects.tsx`

```typescript
// Líneas 15-75
const projectList = [
    {
        id: "proyecto-unico-id",
        titulo: "Nombre del Proyecto",
        descripcion: "Descripción detallada del proyecto y su impacto",
        enlace: "https://tu-proyecto.com",
        enlaceGithub: "https://github.com/tu-usuario/proyecto",
        tecnologias: ["React", "Next.js", "TypeScript"],
        imagen: "URL_imagen_del_proyecto",
        categoria: "web", // "web", "mobile", "desktop"
        tipo: "desarrollo", // "desarrollo", "marketing", "fullstack"
        metricas: {
            conversiones: "+25%",
            trafico: "10K visitas",
            roi: "200%"
        }
    },
    // ... más proyectos
];
```

### 🌐 Idiomas

#### Configurar Niveles de Idiomas
**Archivo:** `src/components/home/Languages.tsx`

```typescript
// Líneas 16-35
const languages = [
    {
        idioma: "Tu Idioma Nativo",
        nivel: 100,
        color: "#ColorHex",
        description: "Descripción del nivel"
    },
    {
        idioma: "Segundo Idioma",
        nivel: 85,
        color: "#ColorHex", 
        description: "Profesional - Fluido en negocios"
    },
    // ... más idiomas
];
```

## 🎨 Personalización Visual

### 🌈 Colores y Tema

#### Configurar Paleta de Colores
**Archivo:** `tailwind.config.ts`

```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Colores principales
        primary: {
          50: '#eff6ff',
          100: '#dbeafe', 
          500: '#3b82f6',  // Tu color principal
          600: '#2563eb',
          900: '#1e3a8a'
        },
        secondary: {
          400: '#a855f7',  // Tu color secundario
          500: '#9333ea',
          600: '#7c3aed'
        },
        accent: {
          400: '#06b6d4',  // Color de acento
          500: '#0891b2',
          600: '#0e7490'
        },
        
        // Colores personalizados para tu marca
        brand: {
          light: '#tu-color-claro',
          DEFAULT: '#tu-color-principal', 
          dark: '#tu-color-oscuro'
        }
      },
      
      // Gradientes personalizados
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #color1 0%, #color2 100%)',
        'card-gradient': 'linear-gradient(145deg, #color3 0%, #color4 100%)'
      }
    }
  }
}
```

#### Variables CSS Personalizadas
**Archivo:** `src/styles/index.css`

```css
:root {
  /* Colores de tu marca */
  --color-brand-primary: #tu-color-hex;
  --color-brand-secondary: #tu-color-hex;
  --color-brand-accent: #tu-color-hex;
  
  /* Sombras personalizadas */
  --shadow-brand: 0 10px 30px rgba(tu-color-rgb, 0.1);
  --shadow-brand-lg: 0 20px 60px rgba(tu-color-rgb, 0.15);
  
  /* Bordes y radios */
  --radius-brand: 16px;
  --border-brand: 2px solid var(--color-brand-primary);
}

/* Tema oscuro personalizado */
.dark {
  --color-brand-primary: #version-oscura-color;
  --color-brand-secondary: #version-oscura-color;
}
```

### 🖼️ Imágenes y Assets

#### Optimizar Imágenes Personales
```typescript
// Configuración recomendada para tus imágenes
const imageConfig = {
  profilePhoto: {
    cloudinary: "w_400,h_400,c_fill,f_webp,q_auto",
    alt: "Foto profesional de [Tu Nombre]"
  },
  heroBackground: {
    cloudinary: "w_1920,h_1080,c_fill,f_webp,q_auto",
    alt: "Fondo hero section"
  },
  projectImages: {
    cloudinary: "w_800,h_600,c_fill,f_webp,q_auto",
    alt: "Captura de [Nombre del Proyecto]"
  },
  ogImage: {
    cloudinary: "w_1200,h_630,c_fill,f_webp,q_auto",
    alt: "Portfolio [Tu Nombre] - Open Graph"
  }
};
```

### ✨ Animaciones Personalizadas

#### Crear Animaciones Únicas
**Archivo:** `tailwind.config.ts`

```typescript
module.exports = {
  theme: {
    extend: {
      animation: {
        // Animaciones personalizadas
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in-scale': 'fadeInScale 0.6s ease-out',
        'pulse-brand': 'pulseBrand 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        
        // Animación de escritura
        'typewriter': 'typewriter 4s steps(40) infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeInScale: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        pulseBrand: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        },
        typewriter: {
          '0%': { width: '0' },
          '50%': { width: '100%' },
          '100%': { width: '0' }
        }
      }
    }
  }
}
```

## 📱 Configuración de Navegación

### 🍔 Personalizar Bottom Navigation (Mobile)
**Archivo:** `src/components/Header/BottomNavigation.tsx`

```typescript
// Líneas 15-40
const navigationItems = [
    { 
        id: 'home', 
        label: 'Inicio', 
        icon: <FiHome className="w-5 h-5" />,
        href: '#home' 
    },
    { 
        id: 'about', 
        label: 'Sobre Mí', 
        icon: <FiUser className="w-5 h-5" />,
        href: '#about' 
    },
    // Personaliza tus secciones
    { 
        id: 'tu-seccion', 
        label: 'Tu Label', 
        icon: <TuIcono className="w-5 h-5" />,
        href: '#tu-seccion' 
    },
];
```

### 🖥️ Header Desktop
**Archivo:** `src/components/Header/Header.tsx`

```typescript
// Personalizar logo y navegación
const brandConfig = {
    logo: "Tu Logo",
    logoImage: "/ruta-a-tu-logo.svg", // opcional
    tagline: "Tu tagline profesional"
};

const desktopNavItems = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre Mí", href: "#about" },
    { name: "Tu Sección", href: "#tu-seccion" },
    // ... más items
];
```

## 🔧 Configuración Avanzada

### 📊 Métricas y Analytics Personalizadas

#### Google Analytics Events
**Archivo:** `src/utils/analytics.ts` (crear si no existe)

```typescript
// Tracking de eventos personalizados
export const trackEvent = (action: string, category: string, label?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
};

// Eventos específicos de tu portfolio
export const trackProjectView = (projectName: string) => {
  trackEvent('view_project', 'portfolio', projectName);
};

export const trackContactForm = (formType: string) => {
  trackEvent('contact_form_submit', 'engagement', formType);
};

export const trackCVDownload = () => {
  trackEvent('download_cv', 'engagement', 'cv_download');
};
```

### 🌐 Internacionalización (i18n)

#### Configuración Multi-idioma
**Archivo:** `src/lib/i18n.ts` (crear si necesitas)

```typescript
export const translations = {
  es: {
    home: {
      title: "Desarrollador Full-Stack",
      subtitle: "Especialista en React y Django",
      cta: "Ver Proyectos"
    },
    about: {
      title: "Sobre Mí",
      description: "Tu descripción en español"
    }
  },
  en: {
    home: {
      title: "Full-Stack Developer", 
      subtitle: "React & Django Specialist",
      cta: "View Projects"
    },
    about: {
      title: "About Me",
      description: "Your description in English"
    }
  }
};
```

### 📧 Configuración de Formularios

#### Integrar con EmailJS o Formspree
**Archivo:** `src/components/home/Contact.tsx`

```typescript
// Configuración EmailJS
const emailConfig = {
  serviceId: "tu_service_id",
  templateId: "tu_template_id", 
  publicKey: "tu_public_key"
};

// O configuración Formspree
const formspreeUrl = "https://formspree.io/f/tu-form-id";
```

## 🎯 SEO Personalizado

### 📈 Meta Tags Personalizados
**Archivo:** `src/app/page.tsx`

```typescript
export const metadata: Metadata = {
  title: "Tu Nombre | Tu Título Profesional | Tu Especialidad",
  description: "Tu descripción SEO optimizada con palabras clave relevantes para tu industria y especialización",
  keywords: [
    "Tu Nombre",
    "Tu Especialidad Principal",
    "Tu Especialidad Secundaria", 
    "Tu Ubicación + Tu Servicio",
    "Palabras clave de tu industria"
  ].join(", "),
  
  openGraph: {
    title: "Tu Nombre - Tu Título Profesional",
    description: "Tu descripción para redes sociales",
    images: [
      {
        url: "URL_de_tu_imagen_OG_personalizada",
        width: 1200,
        height: 630,
        alt: "Tu Nombre - Portfolio Profesional"
      }
    ]
  }
};
```

## 💡 Tips de Personalización

### ✅ Mejores Prácticas

1. **Consistencia Visual**
   - Usa máximo 3 colores principales
   - Mantén coherencia en tipografías
   - Espaciado consistente (múltiplos de 4px)

2. **Performance**
   - Optimiza todas las imágenes
   - Usa lazy loading
   - Minimiza bundle size

3. **Accesibilidad**
   - Contraste adecuado (mínimo 4.5:1)
   - Alt texts descriptivos
   - Navegación por teclado

4. **SEO**
   - URLs amigables
   - Meta descriptions únicas
   - Schema markup relevante

### 🚫 Errores Comunes a Evitar

1. **No cambiar texto lorem ipsum**
2. **Imágenes sin optimizar**
3. **Información de contacto incorrecta**
4. **Links rotos o placeholder**
5. **Colores con bajo contraste**
6. **Animaciones demasiado agresivas**

## 🔄 Actualización Continua

### 📅 Mantenimiento Regular

```bash
# Cada mes: actualizar contenido
- Agregar nuevos proyectos
- Actualizar skills y experiencia
- Revisar información de contacto

# Cada trimestre: revisar técnico
- Actualizar dependencias
- Optimizar performance
- Verificar SEO

# Cada año: rediseño parcial
- Actualizar diseño según tendencias
- Agregar nuevas funcionalidades
- Renovar fotografías profesionales
```

---

**🎨 ¡Tu portfolio personalizado está listo! Recuerda que la personalización es un proceso continuo.**