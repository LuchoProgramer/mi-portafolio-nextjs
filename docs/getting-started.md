# 🚀 Guía de Inicio - Portfolio Luis Viteri

Esta guía te ayudará a configurar y personalizar el portfolio profesional de Luis Viteri paso a paso.

## 📋 Requisitos del Sistema

### Mínimos Requeridos
- **Node.js:** v18.0.0 o superior
- **npm:** v8.0.0 o superior (incluido con Node.js)
- **Git:** Para clonar el repositorio
- **Editor:** VS Code recomendado

### Recomendado para Desarrollo
- **Node.js:** v20.0.0 LTS
- **RAM:** 8GB mínimo, 16GB recomendado
- **Almacenamiento:** 2GB libres para dependencias
- **OS:** Windows 10+, macOS 12+, Ubuntu 20.04+

## ⚡ Instalación Rápida

### 1. Clonación del Proyecto
```bash
# Opción 1: HTTPS (recomendado)
git clone https://github.com/LuchoProgramer/mi-portafolio-nextjs.git

# Opción 2: SSH (si tienes configurado)
git clone git@github.com:LuchoProgramer/mi-portafolio-nextjs.git

# Navegar al directorio
cd mi-portafolio-nextjs
```

### 2. Instalación de Dependencias
```bash
# Verificar versión de Node
node --version
# Debe mostrar v18.0.0 o superior

# Instalar dependencias
npm install

# Verificar instalación
npm list --depth=0
```

### 3. Configuración de Variables de Entorno
```bash
# Copiar archivo de ejemplo
cp .env.example .env.local

# Editar variables (usar tu editor preferido)
nano .env.local
# o
code .env.local
```

### 4. Primer Arranque
```bash
# Iniciar servidor de desarrollo
npm run dev

# ✅ Si todo está correcto, verás:
# ✓ Ready in 2.1s
# ○ Local:        http://localhost:3000
```

## 🔧 Configuración Detallada

### Firebase Setup

1. **Crear Proyecto Firebase**
   - Ve a [Firebase Console](https://console.firebase.google.com/)
   - Crea un nuevo proyecto
   - Habilita Authentication y Firestore

2. **Obtener Credenciales**
   ```javascript
   // Configuración que necesitas en .env.local
   NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXX
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu-proyecto-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu-proyecto.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
   NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef123456
   ```

3. **Configurar Firestore Rules**
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Blogs públicos de lectura
       match /blogs/{document} {
         allow read: if true;
         allow write: if request.auth != null && request.auth.token.admin == true;
       }
       
       // Usuarios autenticados
       match /users/{userId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
     }
   }
   ```

### Cloudinary Setup

1. **Cuenta Cloudinary**
   - Regístrate en [Cloudinary](https://cloudinary.com/)
   - Obtén tu Cloud Name del dashboard

2. **Configuración**
   ```bash
   # En .env.local
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=tu-cloud-name
   ```

### Google Analytics (Opcional)

```bash
# En .env.local
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🎯 Verificación de Instalación

### Checklist de Funcionamiento

```bash
# 1. Verificar build
npm run build
# ✅ Debe completarse sin errores

# 2. Verificar tipos TypeScript
npm run type-check
# ✅ No debe mostrar errores de tipos

# 3. Verificar linting
npm run lint
# ✅ Código debe pasar todas las reglas

# 4. Test de producción
npm run start
# ✅ Debe servir el build en puerto 3000
```

### URLs de Verificación

Una vez iniciado `npm run dev`:

- **Homepage:** http://localhost:3000
- **Blog:** http://localhost:3000/blog
- **CMS:** http://localhost:3000/cms (requiere autenticación)

## 🐛 Solución de Problemas Comunes

### Error: "Cannot find module 'next'"
```bash
# Solución: Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

### Error: "Port 3000 is already in use"
```bash
# Solución: Usar puerto diferente
npm run dev -- -p 3001

# O matar proceso en puerto 3000
lsof -ti:3000 | xargs kill -9
```

### Error: Firebase "Auth domain not authorized"
```bash
# Solución: Agregar dominio en Firebase Console
# Authentication > Settings > Authorized domains
# Agregar: localhost
```

### Error: "Module not found: Can't resolve '@/components'"
```bash
# Verificar que tsconfig.json tenga:
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 📱 Configuración para Desarrollo

### Extensiones VS Code Recomendadas

Instala el pack de extensiones creando `.vscode/extensions.json`:

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

### Configuración del Editor

`.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  },
  "tailwindCSS.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
```

## 🔄 Actualización del Proyecto

### Actualizar Dependencias
```bash
# Ver dependencias desactualizadas
npm outdated

# Actualizar todas las dependencias menores
npm update

# Actualizar dependencia específica
npm install next@latest

# Actualizar dependencias mayores (con cuidado)
npx npm-check-updates -u
npm install
```

### Sincronizar con Upstream
```bash
# Si hiciste fork del proyecto
git remote add upstream https://github.com/LuchoProgramer/mi-portafolio-nextjs.git
git fetch upstream
git merge upstream/main
```

## 🎨 Personalización Básica

### Cambiar Información Personal

1. **Datos básicos** en `src/components/home/Home.tsx`:
   ```typescript
   const personalInfo = {
     name: "Tu Nombre",
     title: "Tu Título Profesional",
     email: "tu-email@dominio.com",
     phone: "+1234567890"
   };
   ```

2. **Información About** en `src/components/home/AboutMe.tsx`:
   ```typescript
   const stats = {
     experience: 5,  // años de experiencia
     projects: 50,   // proyectos completados
     clients: 30     // clientes felices
   };
   ```

### Cambiar Colores del Tema

En `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: '#tu-color-primario',
      secondary: '#tu-color-secundario',
      accent: '#tu-color-acento'
    }
  }
}
```

## 📚 Próximos Pasos

Después de completar esta guía:

1. **[Guía de Personalización](./customization.md)** - Personaliza diseño y contenido
2. **[Configuración Avanzada](./advanced-config.md)** - Features avanzados
3. **[SEO y Analytics](./seo-analytics.md)** - Optimización para buscadores
4. **[Despliegue](./deployment.md)** - Publicar tu portfolio

## 🆘 Soporte

Si necesitas ayuda:

- **Issues:** [GitHub Issues](https://github.com/LuchoProgramer/mi-portafolio-nextjs/issues)
- **Email:** luis.viteri@pukadigital.com
- **LinkedIn:** [luis-viteri-dev](https://linkedin.com/in/luis-viteri-dev)

---

**¡Felicidades! 🎉 Ya tienes tu portfolio funcionando localmente.**