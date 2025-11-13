const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Cambios y Devoluciones</h1>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Última actualización:</strong> Noviembre 2024
            </p>

            {/* INTRODUCCIÓN */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-3">Introducción</h2>
              <p className="text-blue-900 mb-3">
                Esta política establece las condiciones para cambios y devoluciones de suscripciones en la
                plataforma educativa Rumbo, operada por JAKS Tech SAC.
              </p>
              <p className="text-blue-900">
                <strong>Aplica a:</strong> Todas las suscripciones de pago adquiridas a través de nuestra
                tienda online en <a href="https://www.jakstech.net" className="underline">www.jakstech.net</a>
              </p>
            </div>

            {/* PRODUCTOS Y SERVICIOS CUBIERTOS */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Productos y Servicios Cubiertos</h2>
              <p className="text-gray-700 mb-4">
                Esta política se aplica a todas las suscripciones de pago de la plataforma Rumbo:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Plan Mensual:</strong> S/ 30.00/mes - Renovación automática mensual</li>
                <li><strong>Plan Trimestral:</strong> S/ 81.00/trimestre - Pago único trimestral</li>
                <li><strong>Plan Semestral:</strong> S/ 144.00/semestre - Pago único semestral</li>
                <li><strong>Plan Anual:</strong> S/ 240.00/año - Pago único anual</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Nota:</strong> El Plan Gratuito (S/ 0.00) no requiere suscripción ni pago,
                por lo que no aplican políticas de devolución.
              </p>
            </section>

            {/* CONDICIONES PARA CAMBIOS Y DEVOLUCIONES */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Condiciones para Cambios y Devoluciones</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Plazo para Solicitar</h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                <p className="text-gray-800">
                  <strong>7 días calendario</strong> después de la fecha de compra o contratación del servicio.
                </p>
              </div>
              <p className="text-gray-700 mb-4">
                Conforme al <strong>Código de Protección y Defensa del Consumidor (Ley N° 29571)</strong>,
                los usuarios tienen derecho a ejercer el derecho de retracto dentro de este período.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Requisitos para Devoluciones</h3>
              <p className="text-gray-700 mb-4">
                Al tratarse de un <strong>servicio digital</strong>, las condiciones difieren de productos físicos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>La solicitud debe realizarse dentro de los 7 días calendario</strong> desde la contratación</li>
                <li>El <strong>uso del servicio durante este período NO impide</strong> el ejercicio del derecho de retracto</li>
                <li>No se requiere que el servicio esté "sin uso" (a diferencia de productos físicos)</li>
                <li>El usuario debe proporcionar datos de identificación y comprobante de pago</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Servicios NO Elegibles para Devolución</h3>
              <p className="text-gray-700 mb-4">
                No son elegibles para cambios o devoluciones:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Suscripciones fuera del período de 7 días</strong> (excepto causas justificadas)</li>
                <li><strong>Cuentas suspendidas</strong> por violación de Términos y Condiciones</li>
                <li><strong>Servicios usados de manera fraudulenta</strong> o con cuentas duplicadas</li>
                <li><strong>Promociones especiales</strong> con condiciones específicas (cuando apliquen)</li>
              </ul>
            </section>

            {/* PROCESO PARA SOLICITAR */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Proceso para Solicitar un Cambio o Devolución</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Contactar al Servicio de Atención al Cliente</h3>
              <p className="text-gray-700 mb-4">
                Para iniciar el proceso, debe contactar a través de:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:contacto@jakstech.net" className="text-purple-600 hover:underline">
                    contacto@jakstech.net
                  </a>
                </li>
                <li><strong>Teléfono:</strong> +51 987 654 321</li>
                <li><strong>Horario:</strong> Lunes a Viernes de 9:00 AM a 6:00 PM</li>
              </ul>
              <p className="text-gray-700">
                <strong>Asunto del correo:</strong> "Solicitud de Devolución - [Su Nombre Completo]"
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">3.2 Completar el Formulario de Solicitud</h3>
              <p className="text-gray-700 mb-4">
                Debe proporcionar la siguiente información en su solicitud:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Nombre completo</strong></li>
                <li><strong>Email registrado</strong> en la plataforma Rumbo</li>
                <li><strong>Número de transacción</strong> o ID de suscripción</li>
                <li><strong>Comprobante de pago</strong> (adjuntar screenshot o PDF del email de confirmación)</li>
                <li><strong>Motivo de la devolución</strong> (opcional pero recomendado)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">3.3 Enviar la Documentación Requerida</h3>
              <p className="text-gray-700 mb-4">
                Al enviar su solicitud, debe incluir:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Número de pedido/suscripción:</strong> ID único recibido al momento de la compra</li>
                <li><strong>Capturas de pantalla:</strong> Si hubo problemas técnicos, adjuntar evidencia</li>
                <li><strong>Comprobante de pago:</strong> Email de confirmación de Culqi o extracto bancario</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">3.4 Tiempos de Respuesta</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="list-none text-gray-700 space-y-2">
                  <li><strong>Confirmación de recepción:</strong> Máximo 24 horas</li>
                  <li><strong>Evaluación y procesamiento:</strong> Máximo 48 horas hábiles</li>
                  <li><strong>Reembolso efectivo:</strong> 5 a 10 días hábiles después de la aprobación</li>
                </ul>
              </div>
            </section>

            {/* OPCIONES DE REEMBOLSO Y CAMBIOS */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Opciones de Reembolso y Cambios</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Modalidades de Reembolso</h3>
              <p className="text-gray-700 mb-4">
                JAKS Tech SAC ofrece las siguientes opciones de reembolso:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Devolución de dinero:</strong> Reversión del cargo a la tarjeta de crédito/débito original
                </li>
                <li>
                  <strong>Saldo a favor:</strong> Crédito en la cuenta del usuario para futuras suscripciones
                  (disponible a solicitud)
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Tiempo Estimado para Procesar el Reembolso</h3>
              <p className="text-gray-700 mb-4">
                Los reembolsos se procesan de la siguiente manera:
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <ul className="list-none text-gray-700 space-y-2">
                  <li><strong>Tarjetas de crédito/débito:</strong> 5 a 10 días hábiles</li>
                  <li><strong>El monto incluye:</strong> 100% del pago realizado</li>
                  <li><strong>Sin comisiones:</strong> No se cobran cargos adicionales por procesamiento</li>
                </ul>
              </div>
              <p className="text-gray-700 text-sm">
                <strong>Nota:</strong> El tiempo exacto depende del banco emisor de la tarjeta.
                Algunos bancos pueden tomar hasta 15 días hábiles en reflejar la devolución.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.3 Opciones de Cambio de Plan</h3>
              <p className="text-gray-700 mb-4">
                En lugar de solicitar una devolución, puede optar por:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Cambio a otro plan:</strong> Upgrade o downgrade a un plan de diferente duración
                </li>
                <li>
                  <strong>Reembolso parcial:</strong> Si cambia a un plan de menor valor, recibe la diferencia
                </li>
                <li>
                  <strong>Sin comisiones:</strong> Los cambios de plan no tienen cargos adicionales
                </li>
              </ul>
            </section>

            {/* COSTOS Y RESPONSABILIDAD DEL ENVÍO */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Costos y Responsabilidad del Envío</h2>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-4">
                <h3 className="text-xl font-semibold text-green-900 mb-3">Servicio Digital - No Aplica Envío Físico</h3>
                <p className="text-gray-700 mb-3">
                  Al ser Rumbo una <strong>plataforma educativa digital</strong>, no existen costos de envío
                  ni devolución física de productos. El servicio se entrega y cancela de forma electrónica.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Sin Costos de Devolución para el Cliente</h3>
              <p className="text-gray-700 mb-4">
                En todos los casos de devolución válida:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>No hay costos de envío</strong> para el cliente (no aplica)</li>
                <li><strong>No hay penalidades</strong> por ejercer el derecho de retracto</li>
                <li><strong>Reembolso completo:</strong> 100% del monto pagado sin deducciones</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Responsabilidad en Casos Especiales</h3>
              <p className="text-gray-700 mb-4">
                JAKS Tech SAC asume la responsabilidad completa en los siguientes casos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Problemas técnicos:</strong> Si el servicio no funciona correctamente por fallas del sistema</li>
                <li><strong>Errores de facturación:</strong> Cargos duplicados o incorrectos</li>
                <li><strong>Servicios no entregados:</strong> Si la suscripción no se activa después del pago</li>
                <li><strong>Errores del comercio:</strong> Información incorrecta sobre planes o precios</li>
              </ul>
              <p className="text-gray-700 mt-4">
                En estos casos, el <strong>reembolso es gratuito e inmediato</strong> para el cliente,
                sin necesidad de esperar el período estándar.
              </p>
            </section>

            {/* EXCEPCIONES Y GARANTÍAS */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Excepciones y Garantías</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Casos Especiales - Política Especial</h3>
              <p className="text-gray-700 mb-4">
                En casos de <strong>productos dañados, defectuosos o errores en el pedido</strong>,
                se aplicará una política especial con beneficios adicionales:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Servicios no entregados:</strong> Si la suscripción no se activa después del pago,
                  reembolso inmediato sin esperas
                </li>
                <li>
                  <strong>Problemas técnicos graves:</strong> Si el servicio es inaccesible por más de 24 horas,
                  compensación automática con extensión del período
                </li>
                <li>
                  <strong>Errores de facturación:</strong> Cargos duplicados o incorrectos se reembolsan en 24-48 horas
                </li>
                <li>
                  <strong>Información incorrecta:</strong> Si se contrató un plan basado en información errónea del sitio,
                  reembolso completo garantizado
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Garantías del Fabricante/Proveedor</h3>
              <p className="text-gray-700 mb-4">
                Al ser un servicio digital desarrollado internamente:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>JAKS Tech SAC</strong> es el único responsable del servicio y su funcionamiento
                </li>
                <li>
                  No existen garantías de terceros fabricantes, ya que todo el contenido y tecnología
                  es desarrollado por nuestro equipo
                </li>
                <li>
                  Las consultas y reclamos deben gestionarse <strong>directamente con JAKS Tech SAC</strong>,
                  no con terceros
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.3 Garantías de Servicio</h3>
              <p className="text-gray-700 mb-4">
                JAKS Tech SAC garantiza:
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Disponibilidad:</strong> Servicio operativo al 99.5% mensual</li>
                  <li><strong>Seguridad:</strong> Protección de datos según Ley N° 29733</li>
                  <li><strong>Soporte técnico:</strong> Lunes a Viernes de 9:00 AM a 6:00 PM</li>
                  <li><strong>Actualizaciones:</strong> Mejoras continuas sin costo adicional</li>
                  <li><strong>Privacidad:</strong> No compartimos datos con terceros sin consentimiento</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">6.4 Excepciones - Casos NO Cubiertos</h3>
              <p className="text-gray-700 mb-4">
                No se aceptarán devoluciones en los siguientes casos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Solicitudes fuera del plazo:</strong> Después de 7 días (salvo causas justificadas)</li>
                <li><strong>Violación de términos:</strong> Uso indebido o fraude detectado</li>
                <li><strong>Cuentas suspendidas:</strong> Por actividades fraudulentas o uso no autorizado</li>
                <li><strong>Cambio de opinión:</strong> Después del período de garantía de 7 días</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Nota:</strong> JAKS Tech SAC se reserva el derecho de evaluar cada caso individualmente
                y podrá hacer excepciones basadas en circunstancias especiales documentadas.
              </p>
            </section>

            {/* CANCELACIÓN DE SUSCRIPCIÓN */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cancelación de Suscripción</h2>
              <p className="text-gray-700 mb-4">
                Puede cancelar su suscripción en cualquier momento sin penalización:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Efectividad:</strong> La cancelación se hace efectiva al final del período actual</li>
                <li><strong>Acceso continuo:</strong> Mantiene funciones premium hasta la fecha de vencimiento</li>
                <li>
                  <strong>Sin reembolsos:</strong> No se reembolsan períodos no utilizados
                  (excepto dentro del período de garantía de 7 días)
                </li>
                <li><strong>Reactivación:</strong> Puede reactivar su suscripción en cualquier momento</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Para cancelar, contacte a: <a href="mailto:contacto@jakstech.net" className="text-purple-600 hover:underline">contacto@jakstech.net</a>
              </p>
            </section>

            {/* CONTACTO Y ATENCIÓN AL CLIENTE */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contacto y Atención al Cliente</h2>
              <p className="text-gray-700 mb-4">
                Para cualquier consulta sobre cambios, devoluciones, suscripciones o reclamos:
              </p>
              <div className="bg-purple-50 p-6 rounded-lg mb-4">
                <ul className="list-none text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <strong className="w-48 flex-shrink-0">Razón Social:</strong>
                    <span>JAKS Tech SAC</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-48 flex-shrink-0">RUC:</strong>
                    <span>20608472831</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-48 flex-shrink-0">Email:</strong>
                    <a href="mailto:contacto@jakstech.net" className="text-purple-600 hover:underline">
                      contacto@jakstech.net
                    </a>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-48 flex-shrink-0">Teléfono:</strong>
                    <span>+51 987 654 321</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-48 flex-shrink-0">Horario de Atención:</strong>
                    <span>Lunes a Viernes de 9:00 AM a 6:00 PM (hora de Perú)</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-48 flex-shrink-0">Dirección:</strong>
                    <span>Av. Ejército 1009, Yanahuara, Arequipa, Perú</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700">
                <strong>Tiempo de respuesta comprometido:</strong> Máximo 48 horas hábiles para todas las consultas.
              </p>
            </section>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 mt-8">
              <h3 className="font-bold text-green-900 mb-2">Nuestro Compromiso</h3>
              <p className="text-green-800">
                En JAKS Tech SAC nos comprometemos a brindar un servicio de calidad y a resolver cualquier
                inconveniente de manera rápida y justa. Su satisfacción es nuestra prioridad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
