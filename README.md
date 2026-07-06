# Buscador de Usuarios de GitHub

Aplicación web desarrollada con **HTML5, CSS3 y JavaScript** que permite buscar usuarios de GitHub utilizando la API oficial de GitHub.

---

## Características

- Búsqueda de usuarios de GitHub.
- Muestra los 3 usuarios más relevantes según la búsqueda.
- Visualización del avatar del usuario.
- Nombre y nombre de usuario.
- Empresa (si está disponible).
- Cantidad de repositorios públicos.
- Modo claro/oscuro.
- Guarda la preferencia del tema usando LocalStorage.
- Detecta automáticamente el tema del sistema operativo.
- Loader durante las búsquedas.
- Validación cuando no existen resultados.
- Búsqueda con Debounce para optimizar las consultas.
- Diseño responsive.

---

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Git
- GitHub
- GitHub REST API

---

## Estructura del proyecto

```
buscador-github/
│
├── css/
│   └── styles.css
│
├── js/
│   └── app.js
│
├── index.html
└── README.md
```

---

## ¿Cómo ejecutar el proyecto?

1. Clonar el repositorio.

```bash
git clone https://github.com/luisfernandez270406-ux/buscador-github
```

2. Abrir la carpeta del proyecto.

3. Ejecutar el archivo `index.html` en cualquier navegador moderno.
---

##  API utilizada

GitHub REST API

https://docs.github.com/es/rest

---
