export default {
    render() {
        return `
            <div class="section-header">
                <h3>Registrar PQR</h3>
            </div>
            <div class="card pqr-card">
                <form id="pqr-form">
                    <div class="form-group">
                        <label for="pqr-name">Nombre Completo</label>
                        <input type="text" id="pqr-name" placeholder="Ej. Juan Pérez" required>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="pqr-apt">Torre / Apto</label>
                            <input type="text" id="pqr-apt" placeholder="Ej. T2 - 402" required>
                        </div>
                        <div class="form-group">
                            <label for="pqr-type">Tipo de Solicitud</label>
                            <select id="pqr-type" required>
                                <option value="" disabled selected>Selecciona una opción</option>
                                <option value="peticion">Petición</option>
                                <option value="queja">Queja</option>
                                <option value="reclamo">Reclamo</option>
                                <option value="sugerencia">Sugerencia</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="pqr-subject">Asunto</label>
                        <input type="text" id="pqr-subject" placeholder="Resumen corto de tu caso" required>
                    </div>

                    <div class="form-group">
                        <label for="pqr-desc">Descripción Detallada</label>
                        <textarea id="pqr-desc" rows="4" placeholder="Explica detalladamente la situación..." required></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary btn-block">
                        <i class="ti ti-send"></i> Enviar PQR
                    </button>
                </form>

                <div id="pqr-success" class="pqr-success-message" style="display:none;">
                    <div class="success-icon">
                        <i class="ti ti-circle-check"></i>
                    </div>
                    <h4>¡PQR Recibida con éxito!</h4>
                    <p>Hemos registrado tu solicitud bajo el radicado <strong id="radicado-num">#2026-0000</strong>. Nos pondremos en contacto contigo pronto.</p>
                    <button id="pqr-reset-btn" class="btn btn-secondary">Crear otra solicitud</button>
                </div>
            </div>
        `;
    },

    init() {
        const pqrForm = document.getElementById('pqr-form');
        const pqrSuccess = document.getElementById('pqr-success');
        const radicadoNum = document.getElementById('radicado-num');
        const pqrResetBtn = document.getElementById('pqr-reset-btn');

        if (pqrForm) {
            pqrForm.addEventListener('submit', (e) => {
                e.preventDefault();

                const submitBtn = pqrForm.querySelector('button[type="submit"]');
                const originalBtnContent = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="ti ti-loader-2 ti-spin"></i> Registrando...';
                submitBtn.disabled = true;

                setTimeout(() => {
                    const year = new Date().getFullYear();
                    const randomId = Math.floor(1000 + Math.random() * 9000);
                    radicadoNum.textContent = `#PQR-${year}-${randomId}`;

                    pqrForm.style.display = 'none';
                    pqrSuccess.style.display = 'block';

                    submitBtn.innerHTML = originalBtnContent;
                    submitBtn.disabled = false;
                }, 1000);
            });

            pqrResetBtn.addEventListener('click', () => {
                pqrForm.reset();
                pqrSuccess.style.display = 'none';
                pqrForm.style.display = 'block';
            });
        }
    },

    filter(query) {
        // PQR Form doesn't need text search filter
    }
};
