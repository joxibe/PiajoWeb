export default {
    render() {
        return `
            <div class="section-header">
                <h3>Próximos Eventos</h3>
                <span class="badge flat-blue">Comunidad</span>
            </div>
            <div class="cards-grid" id="eventos-list">
                <div class="card event-card" data-search="asamblea general copropietarios salon social">
                    <div class="card-tag flat-yellow">Obligatorio</div>
                    <h4 class="card-title">Asamblea General</h4>
                    <p class="card-desc">Reunión anual de copropietarios para definir presupuestos y administración 2026.</p>
                    <div class="card-meta">
                        <span class="meta-item"><i class="ti ti-calendar"></i> 28 Jun, 9:00 AM</span>
                        <span class="meta-item"><i class="ti ti-map-pin"></i> Salón Social</span>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-primary btn-attend" data-id="1">
                            <i class="ti ti-circle-check"></i> Asistiré
                        </button>
                        <span class="attendees-count">42 asistirán</span>
                    </div>
                </div>

                <div class="card event-card" data-search="jornada vacunacion mascotas parque central canina">
                    <div class="card-tag flat-green">Salud</div>
                    <h4 class="card-title">Vacunación de Mascotas</h4>
                    <p class="card-desc">Jornada gratuita de vacunación antirrábica para perros y gatos de la copropiedad.</p>
                    <div class="card-meta">
                        <span class="meta-item"><i class="ti ti-calendar"></i> 05 Jul, 8:00 AM</span>
                        <span class="meta-item"><i class="ti ti-map-pin"></i> Parque Central</span>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-secondary btn-attend" data-id="2">
                            <i class="ti ti-plus"></i> Confirmar
                        </button>
                        <span class="attendees-count">18 asistirán</span>
                    </div>
                </div>

                <div class="card event-card" data-search="mantenimiento preventivo piscina zona humeda">
                    <div class="card-tag flat-purple">Mantenimiento</div>
                    <h4 class="card-title">Mantenimiento Piscina</h4>
                    <p class="card-desc">Cierre temporal de la zona húmeda por labores de mantenimiento profundo.</p>
                    <div class="card-meta">
                        <span class="meta-item"><i class="ti ti-calendar"></i> 30 Jun, Todo el día</span>
                        <span class="meta-item"><i class="ti ti-map-pin"></i> Piscina</span>
                    </div>
                    <div class="card-footer">
                        <span class="info-alert"><i class="ti ti-info-circle"></i> Evento Informativo</span>
                    </div>
                </div>
            </div>
        `;
    },

    init() {
        const attendButtons = document.querySelectorAll('.btn-attend');
        let attendedEvents = JSON.parse(localStorage.getItem('attendedEvents')) || {};

        attendButtons.forEach(button => {
            const eventId = button.getAttribute('data-id');
            const countSpan = button.nextElementSibling;
            let baseCount = parseInt(countSpan.textContent);

            if (attendedEvents[eventId]) {
                button.classList.add('btn-attended-active');
                button.innerHTML = '<i class="ti ti-check"></i> Asistiré';
                countSpan.textContent = `${baseCount + 1} asistirán`;
            }

            button.addEventListener('click', () => {
                const isAttending = button.classList.contains('btn-attended-active');

                if (isAttending) {
                    button.classList.remove('btn-attended-active');
                    button.innerHTML = button.getAttribute('data-id') === '1' ? 
                                        '<i class="ti ti-circle-check"></i> Asistiré' : 
                                        '<i class="ti ti-plus"></i> Confirmar';
                    countSpan.textContent = `${baseCount} asistirán`;
                    delete attendedEvents[eventId];
                } else {
                    button.classList.add('btn-attended-active');
                    button.innerHTML = '<i class="ti ti-check"></i> Inscrito';
                    countSpan.textContent = `${baseCount + 1} asistirán`;
                    attendedEvents[eventId] = true;
                }

                localStorage.setItem('attendedEvents', JSON.stringify(attendedEvents));
            });
        });
    },

    filter(query) {
        const cards = document.querySelectorAll('#eventos-list .event-card');
        cards.forEach(card => {
            const searchData = card.getAttribute('data-search') || '';
            if (searchData.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
};
