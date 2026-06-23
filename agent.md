# Guía de Arquitectura, Mantenibilidad y Escalabilidad - Pijao Web

Esta guía establece los principios, metodologías y reglas de desarrollo adoptados para el mantenimiento y escalado de la aplicación web de la **Unidad Residencial Pijao**.

---

## 1. Principios de Desarrollo

### SOLID
- **Single Responsibility (Responsabilidad Única)**: Cada archivo en `src/components/` debe encargarse únicamente de renderizar una pestaña del sitio web y adjuntar sus event listeners locales. No debe haber cruce de lógicas de diferentes componentes en un mismo archivo.
- **Open/Closed (Abierto/Cerrado)**: Los componentes deben ser extensibles sin alterar el orquestador principal (`app.js`). Para añadir una nueva sección, basta con crear su componente e importarlo/registrarlo en el objeto `components` de `app.js`.

### KISS (Keep It Simple, Stupid)
- Preferir APIs web nativas en lugar de librerías externas complejas. La reactividad y enrutamiento se manejan mediante código JavaScript puro (Vanilla JS) y manipulaciones directas del DOM, reduciendo la curva de aprendizaje y la probabilidad de errores de dependencias rotas.

### YAGNI (You Aren't Gonna Need It)
- No implementar gestores de estado globales pesados (ej. Redux) ni bundlers complejos a menos que los requerimientos de la aplicación lo exijan rigurosamente. Con JavaScript modular clásico y `localStorage` se cubren eficientemente todas las necesidades de persistencia actuales.

---

## 2. Metodología Mobile-First y Diseño Dribbble
- **Mobile-First Estricto**: Todo el CSS base en `styles.css` se diseña pensando en pantallas móviles de 320px a 480px (utilizando un dock flotante de navegación). Las reglas para ordenadores de escritorio se encapsulan de manera limpia dentro de media queries `@media (min-width: 768px)`.
- **Variables CSS**: Centralizar todos los tokens de diseño (colores flat, fuentes, espaciados y efectos de sombra) en el bloque `:root`. Para dar soporte al Modo Oscuro, se sobreescriben únicamente los valores de estas variables en el selector `[data-theme="dark"]`.

---

## 3. Estructura y Ciclo de Vida del Componente
Cada componente modular exporta un objeto plano con la siguiente firma estricta:

```javascript
export default {
    /**
     * Retorna la plantilla HTML semántica del componente como un string.
     */
    render() {
        return `
            <div class="section-header">
                <h3>Título Sección</h3>
            </div>
            ...
        `;
    },

    /**
     * Inicializa los escuchadores de eventos y la carga de datos del localStorage.
     * Se ejecuta inmediatamente después de inyectar el HTML en el DOM.
     */
    init() {
        // querySelectors locales y eventListeners
    },

    /**
     * Filtra los elementos dentro del componente en respuesta a la barra de búsqueda global.
     * @param {string} query - El término de búsqueda en minúsculas.
     */
    filter(query) {
        // Lógica de filtrado local
    }
};
```

---

## 4. Convenciones de Código
- **Importaciones Limpias**: Todas las rutas de importación deben incluir explícitamente la extensión `.js` (ej. `import Eventos from './src/components/Eventos.js';`) para asegurar compatibilidad nativa con ES Modules en los navegadores sin compiladores.
- **Acceso Táctil**: Todos los botones de acción y pestañas de navegación deben tener un tamaño táctil mínimo de `44px x 44px` en móviles para garantizar la accesibilidad de uso.
