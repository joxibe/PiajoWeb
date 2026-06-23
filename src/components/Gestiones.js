export default {
    render() {
        return `
            <div class="section-header">
                <h3>Gestiones en Línea</h3>
            </div>
            <div class="gestiones-grid">
                <div class="card gestion-card">
                    <div class="gestion-header">
                        <span class="gestion-icon flat-purple"><i class="ti ti-keyframes"></i></span>
                        <h4>Reservar Zonas Comunes</h4>
                    </div>
                    <p>Reserva el salón social, cancha sintética o asadores de forma directa y consulta disponibilidad.</p>
                    <button class="btn btn-secondary btn-sm">Reservar</button>
                </div>

                <div class="card gestion-card">
                    <div class="gestion-header">
                        <span class="gestion-icon flat-green"><i class="ti ti-credit-card"></i></span>
                        <h4>Pago Administración</h4>
                    </div>
                    <p>Consulta tu estado de cuenta y realiza el pago de tus expensas comunes vía PSE o Tarjeta.</p>
                    <button class="btn btn-secondary btn-sm">Pagar en línea</button>
                </div>

                <div class="card gestion-card">
                    <div class="gestion-header">
                        <span class="gestion-icon flat-blue"><i class="ti ti-clipboard-list"></i></span>
                        <h4>Paz y Salvos</h4>
                    </div>
                    <p>Genera y descarga al instante tus certificados de paz y salvo de administración.</p>
                    <button class="btn btn-secondary btn-sm">Generar</button>
                </div>

                <div class="card gestion-card">
                    <div class="gestion-header">
                        <span class="gestion-icon flat-yellow"><i class="ti ti-phone-call"></i></span>
                        <h4>Directorio de Contacto</h4>
                    </div>
                    <p>Números de la portería, administración, rondero y teléfonos de emergencia local.</p>
                    <button class="btn btn-secondary btn-sm">Ver Contactos</button>
                </div>
            </div>
        `;
    },

    init() {
        // No custom events needed for now
    },

    filter(query) {
        // No filtering needed for this panel
    }
};
