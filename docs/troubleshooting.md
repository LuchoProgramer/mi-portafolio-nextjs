# 🐛 Troubleshooting - Portfolio Luis Viteri

Guía de solución de problemas comunes y debugging para el portfolio profesional.

## 🚨 Problemas Comunes y Soluciones

### 🔥 Firebase Issues

#### Error: "Firebase App has not been initialized"
```bash
# Problema: Firebase no está configurado correctamente
# Síntomas: Error en console al cargar la página

# ✅ Solución:
# 1. Verificar variables de entorno
echo $NEXT_PUBLIC_FIREBASE_API_KEY
echo $NEXT_PUBLIC_FIREBASE_PROJECT_ID

# 2. Verificar src/lib/firebase.ts
# Asegúrate de que todas las variables estén definidas:
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  // ... resto de config
};

# 3. Verificar que .env.local existe y tiene los valores correctos
```

#### Error: "Permission denied" en Firestore
```javascript
// Problema: Reglas de Firestore muy restrictivas
// Síntomas: No se pueden leer/escribir documentos

// ✅ Solución: Actualizar reglas en Firebase Console
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir lectura pública de blogs
    match /blogs/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Usuarios autenticados pueden gestionar sus datos
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### 🎨 Styling Issues

#### Tailwind CSS no está funcionando
```bash
# Problema: Estilos no se aplican
# Síntomas: Elementos sin estilo o con estilos básicos

# ✅ Solución:
# 1. Verificar imports en src/styles/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

# 2. Verificar tailwind.config.ts
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // ... resto de config
}

# 3. Reinstalar dependencias
rm -rf node_modules .next
npm install
npm run dev
```

#### Dark mode no funciona
```typescript
// Problema: Toggle de tema no responde
// Síntomas: Clases dark: no se aplican

// ✅ Solución: Verificar ThemeContext
// src/context/ThemeContext.tsx
useEffect(() => {
  const savedTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  
  const initialTheme = savedTheme || systemTheme;
  setTheme(initialTheme);
  
  // Aplicar clase al document
  if (initialTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, []);
```

### 📱 Mobile/Responsive Issues

#### Elementos no visibles en móvil
```typescript
// Problema: Secciones no aparecen en móvil
// Síntomas: Contenido invisible, animaciones no se activan

// ✅ Solución: Verificar hooks de mobile
// src/hooks/useIsMobile.ts debe estar correctamente implementado
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return isMobile;
};

// En componentes, usar:
const isMobile = useIsMobile();
const shouldShow = isMobile || isVisible; // Mostrar inmediatamente en móvil
```

#### Bottom navigation se oculta
```css
/* Problema: Navegación inferior no visible */
/* Síntomas: z-index incorrecto o positioning */

/* ✅ Solución: CSS en BottomNavigation */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50; /* Asegurar que esté por encima */
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
}
```

### 🖼️ Images & Media Issues

#### Imágenes de Cloudinary no cargan
```typescript
// Problema: Error 404 en imágenes
// Síntomas: Imágenes rotas o muy lentas

// ✅ Solución: Verificar configuración
// next.config.ts
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
}

// Verificar URLs de Cloudinary
const correctUrl = `https://res.cloudinary.com/${cloudName}/image/upload/w_800,h_600,c_fill,q_auto,f_webp/v123456789/image_id.jpg`;

// Debugging: Test URL directamente en navegador
```

#### Next.js Image optimization errors
```typescript
// Problema: Error en componente Image
// Síntomas: "Image with src 'X' was detected as the Largest Contentful Paint"

// ✅ Solución: Configurar correctamente
import Image from 'next/image';

<Image
  src={imageUrl}
  alt="Descripción descriptiva"
  width={800}  // Dimensiones requeridas
  height={600}
  priority={isAboveTheFold} // Solo para imágenes críticas
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..." // Base64 blur
/>
```

### ⚡ Performance Issues

#### Slow page load
```bash
# Problema: Página carga lentamente
# Síntomas: LCP > 2.5s, FID > 100ms

# ✅ Diagnóstico:
npm run lighthouse
npm run build:analyze

# Soluciones comunes:
# 1. Optimizar imágenes
# 2. Lazy loading de componentes
# 3. Code splitting
# 4. Preload critical resources
```

#### Bundle size too large
```typescript
// Problema: JavaScript bundle demasiado grande
// Síntomas: Slow First Load, poor performance

// ✅ Solución: Dynamic imports
import dynamic from 'next/dynamic';

// Lazy load componentes no críticos
const Projects = dynamic(() => import('@/components/home/Projects'), {
  loading: () => <ProjectsSkeleton />,
  ssr: false // Si no es crítico para SEO
});

const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => <div>Cargando formulario...</div>
});

// Lazy load librerías pesadas
const HeavyChart = dynamic(() => import('heavy-chart-library'), {
  ssr: false
});
```

### 🔐 Authentication Issues

#### Firebase Auth no funciona
```typescript
// Problema: Login/logout no responde
// Síntomas: Errores en console, estado auth inconsistente

// ✅ Solución: Verificar configuración auth
// src/lib/firebase.ts
import { getAuth, connectAuthEmulator } from 'firebase/auth';

export const auth = getAuth(app);

// Solo para desarrollo local
if (process.env.NODE_ENV === 'development' && !auth.emulatorConfig) {
  connectAuthEmulator(auth, 'http://localhost:9099');
}

// Verificar reglas de autenticación en Firebase Console
// Authentication > Settings > Authorized domains
// Agregar: localhost, tu-dominio.com
```

### 🌐 SEO & Meta Issues

#### Meta tags no aparecen
```typescript
// Problema: Open Graph no funciona en redes sociales
// Síntomas: Vista previa incorrecta en Facebook/LinkedIn

// ✅ Solución: Verificar metadata
// src/app/page.tsx
export const metadata: Metadata = {
  title: "Título específico para esta página",
  description: "Descripción específica para esta página",
  openGraph: {
    title: "Título para OG (puede ser diferente)",
    description: "Descripción para OG",
    images: [
      {
        url: "https://dominio.com/imagen-og.jpg", // URL absoluta requerida
        width: 1200,
        height: 630,
        alt: "Alt text descriptivo"
      }
    ],
    type: "website",
    locale: "es_ES",
  }
};

// Debug: Usar Facebook Debugger
// https://developers.facebook.com/tools/debug/
```

#### Sitemap no se genera
```bash
# Problema: Sitemap.xml vacío o error 404
# Síntomas: Google Search Console no encuentra sitemap

# ✅ Solución:
# 1. Verificar next-sitemap config
cat next-sitemap.config.js

# 2. Regenerar sitemap
npm run postbuild
# o
npx next-sitemap

# 3. Verificar archivo generado
ls -la public/sitemap.xml

# 4. Test en navegador
curl https://tu-dominio.com/sitemap.xml
```

## 🔧 Debugging Tools

### 🛠️ Development Tools

#### Console Debugging
```typescript
// Debugging hooks y estados
import { useEffect } from 'react';

const DebugComponent = () => {
  const isMobile = useIsMobile();
  const isVisible = useIntersectionObserver();
  
  useEffect(() => {
    console.log('🐛 Debug Info:', {
      isMobile,
      isVisible,
      windowWidth: window.innerWidth,
      userAgent: navigator.userAgent
    });
  }, [isMobile, isVisible]);
  
  return null;
};

// Usar solo en desarrollo
{process.env.NODE_ENV === 'development' && <DebugComponent />}
```

#### React DevTools
```bash
# Instalar React Developer Tools
# Chrome: https://chrome.google.com/webstore/detail/react-developer-tools/
# Firefox: https://addons.mozilla.org/firefox/addon/react-devtools/

# Debugging tips:
# 1. Components tab: Ver jerarquía y props
# 2. Profiler tab: Analizar performance
# 3. Console: Usar $r para referenciar componente seleccionado
```

#### Network Debugging
```javascript
// Debug de requests Firebase
// Abrir DevTools > Network > Filter: firebase

// Debug de imágenes Cloudinary
// Network > Filter: cloudinary

// Verificar headers de response
// Headers tab en cada request

// Performance tab para Core Web Vitals
// Lighthouse tab para auditoría completa
```

### 📊 Production Debugging

#### Error Tracking
```typescript
// Implementar error boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log a servicio de monitoreo
    console.error('🚨 Error caught by boundary:', error, errorInfo);
    
    // En producción, enviar a Sentry, LogRocket, etc.
    if (process.env.NODE_ENV === 'production') {
      // Sentry.captureException(error);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h2>¡Oops! Algo salió mal</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Intentar de nuevo
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
```

#### Analytics Debugging
```javascript
// Debug Google Analytics
// En DevTools Console:
gtag('config', 'GA_TRACKING_ID', {
  debug_mode: true
});

// Verificar eventos
gtag('event', 'test_event', {
  event_category: 'debug',
  event_label: 'test'
});

// Real-time reporting en GA4
// Google Analytics > Reports > Realtime
```

## 🔄 Recovery Procedures

### 💾 Backup y Restore

#### Backup de datos Firebase
```bash
# Exportar datos Firestore
npx -p @google-cloud/firestore-admin firestore-export gs://tu-bucket/backup-$(date +%Y%m%d)

# Backup manual desde console
# Firebase Console > Firestore > Import/Export
```

#### Git Recovery
```bash
# Revertir último commit
git revert HEAD

# Volver a commit específico
git reset --hard commit-hash

# Recuperar archivo borrado
git checkout HEAD~1 -- archivo-perdido.ts

# Crear branch de emergencia
git checkout -b emergency-fix

# Stash cambios temporalmente
git stash push -m "WIP: debugging issue"
git stash pop # Para recuperar después
```

### 🆘 Emergency Procedures

#### Sitio down en producción
```bash
# 1. Verificar status de servicios
curl -I https://tu-dominio.com
curl -I https://tu-dominio.netlify.app

# 2. Revert a último deploy estable
# Netlify: Site overview > Production deploys > Publish deploy anterior
# Vercel: Project dashboard > Deployments > Promote to production

# 3. Verificar variables de entorno
# Platform dashboard > Environment variables

# 4. Check logs
# Netlify: Site overview > Functions > View logs
# Vercel: Project > Functions > View logs
```

#### Database connection issues
```typescript
// Emergency fallback data
const fallbackData = {
  blogs: [
    {
      id: 'emergency-1',
      title: 'Sitio en mantenimiento',
      content: 'Estamos trabajando para resolver algunos problemas técnicos.',
      publishedAt: new Date().toISOString()
    }
  ]
};

// En componente
const { data, loading, error } = useBlogData();

if (error) {
  console.error('🚨 Database connection failed, using fallback');
  return <BlogList blogs={fallbackData.blogs} />;
}
```

## 📞 Support Resources

### 🆘 Obtener Ayuda

#### Canales de Soporte
1. **GitHub Issues:** [Reportar bug](https://github.com/LuchoProgramer/mi-portafolio-nextjs/issues)
2. **Email:** luis.viteri@pukadigital.com
3. **LinkedIn:** [luis-viteri-dev](https://linkedin.com/in/luis-viteri-dev)

#### Información para Reportes
```markdown
## Bug Report Template

### Descripción del Problema
Describe claramente qué está pasando

### Pasos para Reproducir
1. Ir a página X
2. Hacer click en Y
3. Ver error Z

### Comportamiento Esperado
Qué debería pasar normalmente

### Screenshots
Adjuntar capturas de pantalla

### Información del Sistema
- OS: macOS/Windows/Linux
- Browser: Chrome 120.x / Firefox 121.x
- Device: Desktop/Mobile
- Screen size: 1920x1080

### Console Errors
```
Error logs aquí
```

### Additional Context
Cualquier información adicional
```

#### Self-Help Resources
- **Documentation:** `/docs` folder
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Firebase Docs:** [firebase.google.com/docs](https://firebase.google.com/docs)
- **Tailwind Docs:** [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

**🐛 ¡No te preocupes! Todos los problemas tienen solución. La documentación y la comunidad están aquí para ayudarte.**