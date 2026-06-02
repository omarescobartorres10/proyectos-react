# 🚀 Proyectos React — Monorepo de Práctica

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![License](https://img.shields.io/badge/Licencia-MIT-green?style=for-the-badge)](#)

¡Bienvenido! Este es un repositorio estructurado como un **monorepo** para organizar, desarrollar y practicar diferentes conceptos del ecosistema de **React** utilizando **Vite** como empaquetador rápido y moderno.

---

## 📁 Proyectos Incluidos

Aquí encontrarás una colección de mini-aplicaciones que demuestran el uso de hooks, estados de React, estructuración de componentes y manejo de eventos.

### 1. 🛒 MiniTienda (`/MiniTienda`)
Una tienda de comercio electrónico básica que demuestra el flujo de datos unidireccional y manejo de carritos de compras.
- **Conceptos clave**:
  - `useState` para almacenar productos agregados.
  - Métodos declarativos de arrays (`map`, `reduce`) para mostrar la lista y calcular el total de precios dinámicamente.
  - Componentización limpia (`Header`, `Footer`, `ProductList`, `ProductCard`).

### 2. 🎴 XFollowCard (`/XFollowCard`)
Una réplica interactiva de la tarjeta de seguimiento de usuarios de la red social X (anteriormente Twitter).
- **Conceptos clave**:
  - `useState` para alternar el estado de seguimiento (Seguir / Siguiendo) de forma individual por tarjeta.
  - Transferencia de propiedades (`props`), incluyendo `children` para personalizar el contenido.
  - Renderizado condicional de estilos y textos según el estado.

### 3. ❌ tic-tac-toe (`/tic-tac-toe`)
El clásico juego del "Tres en Raya" (Gato), diseñado con un control de estados más robusto y persistencia.
- **Conceptos clave**:
  - Lógica de turnos y detección automática de ganadores o empates.
  - Renderizado dinámico de la cuadrícula de juego.
  - Gestión y reinicio del estado del juego de forma interactiva.

---

## 🛠️ Cómo Iniciar un Proyecto

Cada proyecto es independiente y tiene su propio archivo `package.json` con sus dependencias. Para ejecutar cualquiera de ellos en tu máquina local:

1. **Abre tu terminal en la carpeta del proyecto específico** que deseas correr:
   ```bash
   cd MiniTienda   # o cd XFollowCard, o cd tic-tac-toe
   ```

2. **Instala las dependencias necesarias**:
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo local**:
   ```bash
   npm run dev
   ```

4. Abre el enlace local proporcionado por la terminal (usualmente `http://localhost:5173`) en tu navegador.

---

## ⚠️ Flujo de Trabajo Profesional de Git (Monorepo)

Para evitar problemas, desconfiguraciones y "borrados" accidentales en GitHub en el futuro, sigue estrictamente estas pautas de buenas prácticas:

### 1. Trabaja SIEMPRE desde la Carpeta Raíz
Tus comandos de Git (`git status`, `git add`, `git commit`, `git push`) se deben ejecutar **únicamente** desde la raíz del repositorio principal (`c:\dev\projects`). 
- **NO** entres a carpetas como `tic-tac-toe` para usar comandos de Git.
- Si estás dentro de una carpeta de proyecto y quieres guardar tus cambios en GitHub, regresa a la raíz ejecutando:
  ```bash
  cd ..
  ```
  Y luego procede a hacer commit y push.

### 2. NUNCA inicialices Git dentro de los proyectos individuales
- **NO ejecutes `git init`** dentro de las subcarpetas (`MiniTienda`, `XFollowCard`, `tic-tac-toe`). Esto crearía sub-repositorios en conflicto que provocan que tus carpetas se vean "grises" o vacías en GitHub.
- Si por error se crea una carpeta oculta `.git` en algún subproyecto, elimínala inmediatamente usando la terminal desde la raíz:
  * **Windows (PowerShell)**:
    ```powershell
    Remove-Item -Path "nombre-del-proyecto\.git" -Recurse -Force
    ```
  * **macOS / Linux**:
    ```bash
    rm -rf nombre-del-proyecto/.git
    ```

### 3. Procedimiento Estándar para Subir Cambios
Cuando hagas cambios en uno o varios proyectos, sigue estos pasos desde la raíz:

```bash
# 1. Comprueba qué archivos han cambiado
git status

# 2. Agrega todos los cambios al área de preparación (stage)
git add .

# 3. Haz un commit descriptivo de tus cambios
git commit -m "feat: descripción de lo que agregaste o corregiste"

# 4. Sube tus cambios a GitHub de forma segura
git push origin main
```
