# 🚀 Guía de Despliegue - Portfolio Luis Viteri

Guía completa para desplegar tu portfolio en producción con diferentes plataformas y configuraciones optimizadas.

## 🎯 Plataformas de Despliegue

### 🌐 Netlify (Recomendado)

#### ¿Por qué Netlify?
- ✅ **Despliegue automático** desde Git
- ✅ **CDN global** incluido
- ✅ **HTTPS** automático con certificados SSL
- ✅ **Preview deployments** para branches
- ✅ **Formularios** nativos para contacto
- ✅ **Edge functions** para optimización
- ✅ **Analytics** integrado

#### Configuración Paso a Paso

1. **Conectar Repositorio**
   ```bash
   # 1. Push tu código a GitHub
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   
   # 2. Ir a netlify.com y crear cuenta
   # 3. "New site from Git" > GitHub > Seleccionar repo
   ```

2. **Build Settings**
   ```yaml
   # Configuración automática detectada:
   Build command: npm run build
   Publish directory: out
   
   # O manual en netlify.toml (raíz del proyecto):
   [build]
     command = "npm run build"
     publish = "out"
   
   [build.environment]
     NODE_VERSION = "18"
     NPM_VERSION = "8"
   ```

3. **Variables de Entorno**
   ```bash
   # En Netlify Dashboard > Site settings > Environment variables
   NEXT_PUBLIC_FIREBASE_API_KEY=tu_valor
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu_valor
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu_valor
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=tu_valor
   NEXT_PUBLIC_GA_ID=tu_valor
   SITE_URL=https://tu-sitio.netlify.app
   ```

4. **Dominio Personalizado**
   ```bash
   # Si tienes dominio propio:
   # 1. Site settings > Domain management
   # 2. Add custom domain > tu-dominio.com
   # 3. Configurar DNS:
   
   # CNAME record:
   www.tu-dominio.com -> tu-sitio.netlify.app
   
   # A record (para apex domain):
   tu-dominio.com -> 75.2.60.5
   ```

5. **Optimizaciones Netlify**
   ```toml
   # netlify.toml en raíz del proyecto
   [build]
     command = "npm run build"
     publish = "out"
   
   # Configuración de headers para performance
   [[headers]]
     for = "/*"
     [headers.values]
       X-Frame-Options = "DENY"
       X-XSS-Protection = "1; mode=block"
       X-Content-Type-Options = "nosniff"
       Referrer-Policy = "strict-origin-when-cross-origin"
   
   # Headers específicos para assets
   [[headers]]
     for = "/static/*"
     [headers.values]
       Cache-Control = "public, max-age=31536000, immutable"
   
   # Redirects para SEO
   [[redirects]]
     from = "/home"
     to = "/"
     status = 301
   
   # Form handling
   [build.processing]
     skip_processing = false
   [build.processing.css]
     bundle = true
     minify = true
   [build.processing.js]
     bundle = true
     minify = true
   [build.processing.html]
     pretty_urls = true
   [build.processing.images]
     compress = true
   ```

### ▲ Vercel

#### Configuración Vercel

1. **Deploy Automático**
   ```bash
   # Instalar Vercel CLI
   npm i -g vercel
   
   # Deploy desde línea de comandos
   vercel
   
   # O conectar desde dashboard de Vercel
   ```

2. **Configuración del Proyecto**
   ```json
   // vercel.json en raíz del proyecto
   {
     "buildCommand": "npm run build",
     "outputDirectory": "out",
     "trailingSlash": false,
     "cleanUrls": true,
     "headers": [
       {
         "source": "/(.*)",
         "headers": [
           {
             "key": "X-Content-Type-Options",
             "value": "nosniff"
           },
           {
             "key": "X-Frame-Options", 
             "value": "DENY"
           },
           {
             "key": "X-XSS-Protection",
             "value": "1; mode=block"
           }
         ]
       }
     ],
     "rewrites": [
       {
         "source": "/sitemap.xml",
         "destination": "/api/sitemap"
       }
     ]
   }
   ```

### 🐳 Docker Deployment

#### Dockerfile Optimizado

```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/out ./out
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["npm", "start"]
```

#### Docker Compose
```yaml
# docker-compose.yml
version: '3.8'
services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_FIREBASE_API_KEY=${FIREBASE_API_KEY}
      - NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=${FIREBASE_AUTH_DOMAIN}
      - NEXT_PUBLIC_FIREBASE_PROJECT_ID=${FIREBASE_PROJECT_ID}
    restart: unless-stopped
    
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - portfolio
    restart: unless-stopped
```

### 🏗️ Build Optimizaciones

#### Next.js Config para Producción
```typescript
// next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para export estático
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  
  // Optimización de performance
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Configuración experimental
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['react-icons'],
  },
  
  // Headers de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

#### Package.json Scripts de Producción
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next export",
    "build:analyze": "ANALYZE=true npm run build",
    "build:prod": "NODE_ENV=production npm run build && npm run export",
    "preview": "npm run build:prod && npx serve out",
    "lighthouse": "lighthouse http://localhost:3000 --output-path=./lighthouse-report.html",
    "deploy:netlify": "npm run build:prod && netlify deploy --prod --dir=out",
    "deploy:surge": "npm run build:prod && surge out"
  }
}
```

## 🔧 Configuración de Producción

### 🌍 Variables de Entorno de Producción

#### .env.production
```bash
# URL del sitio en producción
SITE_URL=https://tu-dominio.com
NODE_ENV=production

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Firebase Producción
NEXT_PUBLIC_FIREBASE_API_KEY=prod_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=prod-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=prod-project-id

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=prod-cloud-name

# Email service (si usas)
EMAILJS_SERVICE_ID=service_xxxxxxx
EMAILJS_TEMPLATE_ID=template_xxxxxxx
EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

#### Seguridad de Variables
```bash
# Para variables sensibles, usar servicios de la plataforma:

# Netlify: Site settings > Environment variables
# Vercel: Project settings > Environment Variables  
# Railway: Variables tab
# Heroku: Config Vars

# NUNCA commitear .env.local a Git
echo ".env.local" >> .gitignore
echo ".env.production" >> .gitignore
```

### 🚀 CI/CD Automation

#### GitHub Actions para Netlify
```yaml
# .github/workflows/deploy.yml
name: Deploy to Netlify
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build project
      run: npm run build
      env:
        NEXT_PUBLIC_FIREBASE_API_KEY: ${{ secrets.FIREBASE_API_KEY }}
        NEXT_PUBLIC_GA_ID: ${{ secrets.GA_ID }}
    
    - name: Deploy to Netlify
      uses: nwtgck/actions-netlify@v1.2
      with:
        publish-dir: './out'
        production-branch: main
        github-token: ${{ secrets.GITHUB_TOKEN }}
        deploy-message: "Deploy from GitHub Actions"
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

#### Vercel Auto-Deploy
```yaml
# .github/workflows/vercel.yml
name: Vercel Production Deployment
env:
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
on:
  push:
    branches:
      - main
jobs:
  Deploy-Production:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install Vercel CLI
        run: npm install --global vercel@latest
      - name: Pull Vercel Environment Information
        run: vercel pull --yes --environment=production --token=${{ secrets.VERCEL_TOKEN }}
      - name: Build Project Artifacts
        run: vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}
      - name: Deploy Project Artifacts to Vercel
        run: vercel deploy --prebuilt --prod --token=${{ secrets.VERCEL_TOKEN }}
```

## 🔍 Monitoreo Post-Despliegue

### 📊 Health Checks

#### Uptime Monitoring
```javascript
// utils/healthCheck.js
export const healthCheck = async () => {
  const checks = {
    firebase: false,
    cloudinary: false,
    analytics: false,
    performance: false
  };

  try {
    // Test Firebase connection
    const response = await fetch('/api/health/firebase');
    checks.firebase = response.ok;

    // Test Cloudinary
    const imgTest = new Image();
    imgTest.onload = () => checks.cloudinary = true;
    imgTest.src = 'https://res.cloudinary.com/tu-cloud/image/upload/w_10,h_10/test.jpg';

    // Test Analytics
    checks.analytics = typeof window.gtag !== 'undefined';

    // Test Performance
    const perfData = performance.getEntriesByType('navigation')[0];
    checks.performance = perfData.loadEventEnd < 3000; // < 3s load time

  } catch (error) {
    console.error('Health check failed:', error);
  }

  return checks;
};
```

#### Performance Monitoring
```javascript
// utils/performance.js
export const trackCoreWebVitals = (metric) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'web_vitals', {
      event_category: 'performance',
      event_label: metric.name,
      value: Math.round(metric.value),
      custom_parameter_1: metric.id,
    });
  }
};

// En _app.tsx o layout.tsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

export function reportWebVitals(metric) {
  trackCoreWebVitals(metric);
}

// Uso
getCLS(reportWebVitals);
getFID(reportWebVitals);
getFCP(reportWebVitals);
getLCP(reportWebVitals);
getTTFB(reportWebVitals);
```

### 🛡️ Security Headers

#### Configuración de Seguridad
```typescript
// next.config.ts - Headers de seguridad completos
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com *.cloudflareinsights.com;
      style-src 'self' 'unsafe-inline' fonts.googleapis.com;
      img-src 'self' data: https: *.cloudinary.com *.googletagmanager.com;
      font-src 'self' fonts.gstatic.com;
      connect-src 'self' *.firebase.google.com *.googleapis.com *.googletagmanager.com;
      frame-src 'none';
    `.replace(/\s{2,}/g, ' ').trim()
  }
];
```

## 📈 Optimización Post-Despliegue

### ⚡ Performance Checklist

```bash
# 1. Verificar Core Web Vitals
npm run lighthouse

# 2. Analizar bundle size
npm run build:analyze

# 3. Test de velocidad
# PageSpeed Insights: https://pagespeed.web.dev/
# GTmetrix: https://gtmetrix.com/

# 4. Test de SEO
# Google Search Console
# SEMrush Site Audit
```

### 🔄 Actualizaciones Continuas

#### Script de Deploy
```bash
#!/bin/bash
# deploy.sh

echo "🚀 Starting deployment process..."

# 1. Tests
echo "🧪 Running tests..."
npm run test
npm run type-check
npm run lint

# 2. Build
echo "🏗️ Building application..."
npm run build:prod

# 3. Performance check
echo "📊 Checking performance..."
npm run lighthouse

# 4. Deploy
echo "🌐 Deploying to production..."
npm run deploy:netlify

echo "✅ Deployment completed!"
```

### 📱 PWA Configuration

#### Service Worker
```javascript
// public/sw.js
const CACHE_NAME = 'portfolio-v1';
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js',
  '/static/images/hero.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
```

---

**🚀 ¡Tu portfolio está listo para producción! Asegúrate de monitorear regularmente el rendimiento y mantener las dependencias actualizadas.**