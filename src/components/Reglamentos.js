export default {
    render() {
        return `
            <div class="section-header">
                <h3>Reglamento de Propiedad Horizontal</h3>
            </div>
            <div class="reglamentos-container" id="reglamentos-list">
                <div class="rule-item" data-search="art 15 mudanzas trasteos horarios depositos">
                    <button class="rule-trigger">
                        <span class="rule-title">Art. 15 - Horarios de Mudanzas</span>
                        <i class="ti ti-chevron-down rule-icon"></i>
                    </button>
                    <div class="rule-content">
                        <p>Las mudanzas o trasteos deberán realizarse únicamente de Lunes a Sábado en el horario de 8:00 AM a 5:00 PM. Se debe notificar a administración con 48 horas de anticipación y dejar un depósito de garantía.</p>
                    </div>
                </div>

                <div class="rule-item" data-search="art 22 niveles ruido permitidos fiestas musica">
                    <button class="rule-trigger">
                        <span class="rule-title">Art. 22 - Control de Ruido y Fiestas</span>
                        <i class="ti ti-chevron-down rule-icon"></i>
                    </button>
                    <div class="rule-content">
                        <p>El uso de equipos de sonido, instrumentos musicales y la realización de reuniones sociales deben mantener un nivel de decibelios moderado. A partir de las 10:00 PM de Domingo a Jueves, y de las 12:00 AM los Viernes y Sábados, queda prohibido cualquier ruido que perturbe la tranquilidad ajena.</p>
                    </div>
                </div>

                <div class="rule-item" data-search="art 37 parqueadero visitantes vehiculos motos">
                    <button class="rule-trigger">
                        <span class="rule-title">Art. 37 - Uso de Parqueadero de Visitantes</span>
                        <i class="ti ti-chevron-down rule-icon"></i>
                    </button>
                    <div class="rule-content">
                        <p>Los estacionamientos de visitantes son de uso exclusivo para personas ajenas a la copropiedad y por un periodo máximo continuo de 4 horas. No está permitido el parqueo nocturno sin previa autorización escrita de la administración.</p>
                    </div>
                </div>
            </div>
        `;
    },

    init() {
        const ruleTriggers = document.querySelectorAll('.rule-trigger');

        ruleTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const item = trigger.parentElement;
                const isActive = item.classList.contains('active');

                document.querySelectorAll('.rule-item').forEach(el => el.classList.remove('active'));

                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    },

    filter(query) {
        const items = document.querySelectorAll('#reglamentos-list .rule-item');
        items.forEach(item => {
            const searchData = item.getAttribute('data-search') || '';
            if (searchData.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
};
