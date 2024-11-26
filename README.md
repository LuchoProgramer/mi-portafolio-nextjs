# Mi Proyecto en Next.js

Este es un proyecto desarrollado en **Next.js** utilizando el **App Router**, configurado con funcionalidades como Firebase, Cloudinary, y Tailwind CSS. Está modularizado para mantener una estructura limpia y escalable. Este proyecto trata de un portafolio con un blog y un CMS, para personas que no conocen nada de codigo, y puedan mejorar el seo de sus proyectos, ya que next.js es excelenete en cuato el seo de una Pagina

---

## **Índice**
1. [Características](#características)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Requisitos Previos](#requisitos-previos)
4. [Instalación](#instalación)
5. [Configuración de Variables de Entorno](#configuración-de-variables-de-entorno)
6. [Comandos Disponibles](#comandos-disponibles)
7. [Estructura Modular](#estructura-modular)
8. [Despliegue](#despliegue)
9. [Contribuciones](#contribuciones)

---

## **Características**
- **Next.js con App Router:** Manejo de rutas con layouts anidados.
- **Tailwind CSS:** Estilización moderna y responsiva.
- **Firebase:** Integración para autenticación y almacenamiento.
- **Cloudinary:** Manejo de imágenes y videos optimizado.
- **Soporte de Variables de Entorno:** Configuradas para manejar claves sensibles y configuraciones por entorno.
- **Modularización:** Estructura organizada con componentes reutilizables y lógica separada en hooks y utils.

---

## **Estructura del Proyecto**
La estructura principal del proyecto es la siguiente:













---

## **Requisitos Previos**
Asegúrate de tener instalado lo siguiente en tu sistema:
- **Node.js**: Versión 16 o superior.
- **npm** o **yarn**: Para manejar las dependencias.
- **Git**: Para clonar el repositorio.

---

## **Instalación**
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/mi-proyecto-next.git


2. Entra en la carpeta del proyecto:
    cd mi-proyecto-next


3. Instala las dependencias:
    npm install
    # o
    yarn install

---

### Configuración de Variables de Entorno
1. Crea un archivo `.env.local` en la raíz del proyecto.
2. Copia los nombres de las variables desde `.env.example`.
3. Rellena los valores necesarios (consulta al administrador del proyecto para obtener las claves API u otras configuraciones).

---

### Comandos Disponibles
## Desarrollo:
npm run dev
# o
yarn dev

Inicia el servidor de desarrollo en http://localhost:3000

## Producción:
npm run build
# o
yarn build

## Previsualización de Producción:
npm run start
# o
yarn start

Inicia el servidor para previsualizar la versión construida.

---

### Estructura Modular
El proyecto está dividido en varias carpetas para facilitar su mantenimiento:

    app/: Maneja las rutas y layouts del proyecto.
    components/: Contiene componentes reutilizables organizados en:
        layout/: Header, Footer, Sidebar, etc.
        home/: Componentes específicos de la página principal.
        common/: Componentes genéricos como botones, tarjetas, etc.
    hooks/: Hooks personalizados para manejar lógica reutilizable.
    utils/: Funciones auxiliares independientes de React.
    public/: Archivos públicos como imágenes y favicons.

---

### Despliegue

---

### Licencia

Este proyecto está bajo la licencia MIT.