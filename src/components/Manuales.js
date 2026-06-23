export default {
    render() {
        return `
            <div class="section-header">
                <h3>Manuales y Guías</h3>
            </div>
            <div class="cards-grid" id="manuales-list">
                <div class="card doc-card" data-search="manual de convivencia normas vecinos">
                    <div class="doc-icon flat-blue">
                        <i class="ti ti-book-2"></i>
                    </div>
                    <div class="doc-details">
                        <h4 class="card-title">Manual de Convivencia</h4>
                        <p class="card-desc">Reglas básicas de armonía, ruido, mudanzas y uso de áreas comunes.</p>
                        <a href="#" class="btn-link"><i class="ti ti-download"></i> Descargar PDF (2.4 MB)</a>
                    </div>
                </div>

                <div class="card doc-card" data-search="guia de reciclaje clasificacion basura residuos">
                    <div class="doc-icon flat-green">
                        <i class="ti ti-recycle"></i>
                    </div>
                    <div class="doc-details">
                        <h4 class="card-title">Guía de Reciclaje</h4>
                        <p class="card-desc">Instrucciones sobre la correcta disposición de residuos sólidos y orgánicos.</p>
                        <a href="#" class="btn-link"><i class="ti ti-download"></i> Descargar PDF (1.1 MB)</a>
                    </div>
                </div>

                <div class="card doc-card" data-search="manual tenencia responsable mascotas perros gatos">
                    <div class="doc-icon flat-yellow">
                        <i class="ti ti-dog-bowl"></i>
                    </div>
                    <div class="doc-details">
                        <h4 class="card-title">Tenencia de Mascotas</h4>
                        <p class="card-desc">Normas de seguridad, higiene y permanencia de mascotas en áreas sociales.</p>
                        <a href="#" class="btn-link"><i class="ti ti-download"></i> Descargar PDF (1.8 MB)</a>
                    </div>
                </div>
            </div>
        `;
    },

    init() {
        // No custom events needed for this static list
    },

    filter(query) {
        const cards = document.querySelectorAll('#manuales-list .doc-card');
        cards.forEach(card => {
            const searchData = card.getAttribute('data-search') || '';
            if (searchData.includes(query)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
};
