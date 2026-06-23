export default {
    render() {
        return `
            <div class="section-header">
                <h3>Encuestas Activas</h3>
                <span class="badge flat-green">Participación</span>
            </div>
            <div class="cards-grid">
                <div class="card poll-card" data-poll-id="1">
                    <span class="poll-status active-badge">Abierta</span>
                    <h4 class="card-title">¿Cambio en el horario de la piscina?</h4>
                    <p class="card-desc">Se propone extender el horario los fines de semana hasta las 9:00 PM.</p>
                    
                    <div class="poll-options">
                        <button class="poll-option-btn" data-option="a">
                            <span class="option-text">Sí, estoy de acuerdo</span>
                            <span class="option-percentage" style="display:none">64%</span>
                            <div class="poll-progress-bar" style="width: 0%"></div>
                        </button>
                        <button class="poll-option-btn" data-option="b">
                            <span class="option-text">No, prefiero mantener el actual</span>
                            <span class="option-percentage" style="display:none">36%</span>
                            <div class="poll-progress-bar" style="width: 0%"></div>
                        </button>
                    </div>
                    <div class="poll-footer">
                        <span class="votes-count"><i class="ti ti-users"></i> 118 votos registrados</span>
                    </div>
                </div>

                <div class="card poll-card" data-poll-id="2">
                    <span class="poll-status active-badge">Abierta</span>
                    <h4 class="card-title">Inversión en Parque Infantil</h4>
                    <p class="card-desc">Selecciona la mejora prioritaria para la zona de niños:</p>
                    
                    <div class="poll-options">
                        <button class="poll-option-btn" data-option="a">
                            <span class="option-text">Nuevos juegos de madera</span>
                            <span class="option-percentage" style="display:none">52%</span>
                            <div class="poll-progress-bar" style="width: 0%"></div>
                        </button>
                        <button class="poll-option-btn" data-option="b">
                            <span class="option-text">Césped sintético protector</span>
                            <span class="option-percentage" style="display:none">48%</span>
                            <div class="poll-progress-bar" style="width: 0%"></div>
                        </button>
                    </div>
                    <div class="poll-footer">
                        <span class="votes-count"><i class="ti ti-users"></i> 89 votos registrados</span>
                    </div>
                </div>
            </div>
        `;
    },

    init() {
        const pollCards = document.querySelectorAll('.poll-card');
        let votedPolls = JSON.parse(localStorage.getItem('votedPolls')) || {};

        pollCards.forEach(card => {
            const pollId = card.getAttribute('data-poll-id');
            const options = card.querySelectorAll('.poll-option-btn');
            const votesCountSpan = card.querySelector('.votes-count');

            if (votedPolls[pollId]) {
                const selectedOption = votedPolls[pollId];
                this.showPollResults(options, selectedOption, votesCountSpan, true);
            }

            options.forEach(optionBtn => {
                optionBtn.addEventListener('click', () => {
                    if (votedPolls[pollId]) return;

                    const selectedOption = optionBtn.getAttribute('data-option');
                    votedPolls[pollId] = selectedOption;
                    localStorage.setItem('votedPolls', JSON.stringify(votedPolls));

                    this.showPollResults(options, selectedOption, votesCountSpan, false);
                });
            });
        });
    },

    showPollResults(options, selectedOption, votesCountSpan, alreadyVoted) {
        options.forEach(btn => {
            const opt = btn.getAttribute('data-option');
            const percentSpan = btn.querySelector('.option-percentage');
            const progressBar = btn.querySelector('.poll-progress-bar');
            
            percentSpan.style.display = 'block';
            const percentage = percentSpan.textContent;
            progressBar.style.width = percentage;

            if (opt === selectedOption) {
                btn.classList.add('selected');
            }
            btn.style.cursor = 'default';
        });

        if (!alreadyVoted && votesCountSpan) {
            const currentVotes = parseInt(votesCountSpan.textContent.replace(/\D/g, ''));
            votesCountSpan.innerHTML = `<i class="ti ti-users"></i> ${currentVotes + 1} votos registrados (¡Gracias!)`;
        }
    },

    filter(query) {
        // Polls aren't filtered typically in this design, but empty handler satisfies the interface.
    }
};
