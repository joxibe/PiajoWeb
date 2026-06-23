import { initTheme } from './src/theme.js';
import Eventos from './src/components/Eventos.js';
import Encuestas from './src/components/Encuestas.js';
import Manuales from './src/components/Manuales.js';
import Reglamentos from './src/components/Reglamentos.js';
import Pqr from './src/components/Pqr.js';
import Gestiones from './src/components/Gestiones.js';

// Map tab keys to their component modules
const components = {
    eventos: Eventos,
    encuestas: Encuestas,
    manuales: Manuales,
    reglamentos: Reglamentos,
    pqr: Pqr,
    gestiones: Gestiones
};

let currentTab = 'eventos';

function renderCurrentTab() {
    const appContent = document.getElementById('app-content');
    const searchInput = document.getElementById('global-search');
    
    // Clear search query
    searchInput.value = '';
    
    const component = components[currentTab];
    if (component) {
        // Inject HTML template
        appContent.innerHTML = component.render();
        // Initialize dynamic component interactions
        component.init();
    }
}

function switchTab(targetTabId) {
    if (!components[targetTabId]) return;
    
    currentTab = targetTabId;
    
    // Sync desktop navigation tabs (Now using capsule-link selector)
    const desktopTabs = document.querySelectorAll('.capsule-link');
    desktopTabs.forEach(tab => {
        const isTarget = tab.getAttribute('data-tab') === targetTabId;
        tab.classList.toggle('active', isTarget);
        tab.setAttribute('aria-selected', isTarget ? 'true' : 'false');
    });

    // Sync mobile navigation dock items
    const mobileTabs = document.querySelectorAll('.nav-item');
    mobileTabs.forEach(tab => {
        const isTarget = tab.getAttribute('data-tab') === targetTabId;
        tab.classList.toggle('active', isTarget);
    });

    // Dynamic Render
    renderCurrentTab();
    
    // Scroll view back to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Theme Switcher
    initTheme();
    
    // 2. Initial Page Render
    renderCurrentTab();

    // 3. Attach Navigation Event Listeners
    const desktopTabs = document.querySelectorAll('.capsule-link');
    desktopTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            switchTab(tab.getAttribute('data-tab'));
        });
    });

    const mobileTabs = document.querySelectorAll('.nav-item');
    mobileTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            switchTab(tab.getAttribute('data-tab'));
        });
    });

    // 4. Attach Search Interactivity
    const searchInput = document.getElementById('global-search');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const component = components[currentTab];
        if (component && typeof component.filter === 'function') {
            component.filter(query);
        }
    });
});
