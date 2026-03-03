# LMSGI_SamuelRuizMartin_UD03_ProyectoRA03

## Proyecto RA 03 - Piedra, Papel, Tijera, Lagarto, Spock

### Descripción del Proyecto
Implementación del juego "Piedra, Papel, Tijera, Lagarto, Spock" popularizado por la serie "The Big Bang Theory".  
El juego permite al usuario competir contra la CPU en una versión ampliada del clásico piedra, papel o tijera.

---

## Estructura del Proyecto

```
LMSGI_SamuelRuizMartin_UD03_ProyectoRA03/
│
├── index.html                 # Página principal del juego
├── estilos.css                 # Hoja de estilos CSS
├── partes_optativas.txt        # Indicación de las partes optativas realizadas
├── leeme.txt                   # Aclaraciones sobre el proyecto
│
├── imagenes/                    # Carpeta para imágenes
│   └── spock-hand-gesture.svg   # Icono de la pestaña del navegador
│
└── js/                          # Carpeta para JavaScript
    └── javascript.js            # Lógica del juego
```

---

## Funcionalidades Implementadas

### Parte Obligatoria (8 puntos)
- ✅ Interfaz completa con header, main y footer
- ✅ Selección de jugada mediante botones (Piedra, Papel, Tijera, Lagarto, Spock)
- ✅ Generación aleatoria de jugada de la CPU
- ✅ Visualización de la batalla (jugador vs CPU)
- ✅ Sistema de contadores (victorias, derrotas, empates)
- ✅ Tooltips informativos al pasar el ratón sobre las jugadas
- ✅ Efectos visuales (hover, animaciones, cambio de clases)
- ✅ Cálculo correcto de resultados según reglas del juego
- ✅ Documentación de funciones con formato Doxygen
- ✅ Manejo de errores en manipulación del DOM

### Parte Optativa Realizada
- ✅ Botón para reiniciar el juego (resetea contadores y displays)
- ✅ Botón para mostrar reglas del juego por consola
- ✅ Control por teclado:
  - Tecla `1`: Piedra
  - Tecla `2`: Papel
  - Tecla `3`: Tijera
  - Tecla `4`: Lagarto
  - Tecla `5`: Spock
  - Tecla `r`: Reiniciar juego
  - Tecla `s`: Mostrar reglas

---

## Reglas del Juego

```
Piedra 🪨 aplasta Lagarto 🦎 y Tijera ✂️
Papel 📋 desautoriza Spock 🖖 y envuelve Piedra 🪨
Tijera ✂️ decapita Lagarto 🦎 y corta Papel 📋
Lagarto 🦎 envenena Spock 🖖 y devora Papel 📋
Spock 🖖 rompe Tijera ✂️ y vaporiza Piedra 🪨
```

---

## Requisitos Técnicos Cumplidos

- **HTML5**: Estructura semántica correcta con header, main y footer
- **CSS3**: Todos los estilos proporcionados en `estilos.css` respetados
- **JavaScript**:
  - Uso de `"use strict"`
  - Evento `DOMContentLoaded` para inicialización
  - Eventos `click` en botones
  - Evento `keydown` para control por teclado
  - Manipulación del DOM para mostrar jugadas y resultados
  - Funciones documentadas con Doxygen
---