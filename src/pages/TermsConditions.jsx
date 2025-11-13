const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Términos y Condiciones</h1>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Última actualización:</strong> Noviembre 2024
            </p>

            {/* INFORMACIÓN GENERAL DEL COMERCIO */}
            <section className="mb-8 bg-purple-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Información General del Comercio</h2>
              <ul className="list-none text-gray-700 space-y-2">
                <li><strong>Razón Social:</strong> JAKS Tech SAC</li>
                <li><strong>RUC:</strong> 20608472831</li>
                <li><strong>Dirección:</strong> Av. Ejército 1009, Yanahuara, Arequipa, Perú</li>
                <li><strong>Teléfono:</strong> +51 987 654 321</li>
                <li><strong>Correo Electrónico:</strong> contacto@jakstech.net</li>
                <li><strong>Horario de Atención:</strong> Lunes a Viernes de 9:00 AM a 6:00 PM</li>
              </ul>
            </section>

            {/* ACEPTACIÓN DE TÉRMINOS Y CONDICIONES */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de los Términos y Condiciones</h2>
              <p className="text-gray-700 mb-4">
                El uso de la plataforma Rumbo (en adelante, "la Plataforma"), operada por JAKS Tech SAC,
                implica la aceptación plena y sin reservas de los presentes Términos y Condiciones.
                Al acceder, navegar o utilizar nuestros servicios, usted declara haber leído, entendido
                y aceptado las condiciones aquí establecidas.
              </p>
              <p className="text-gray-700 mb-4">
                Si no está de acuerdo con alguna parte de estos términos, debe abstenerse de utilizar
                la Plataforma inmediatamente.
              </p>
              <p className="text-gray-700">
                <strong>Modificaciones:</strong> JAKS Tech SAC se reserva el derecho de actualizar,
                modificar o cambiar estos Términos y Condiciones en cualquier momento. Los usuarios
                serán notificados de cualquier cambio significativo a través de:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                <li>Correo electrónico registrado en la plataforma</li>
                <li>Notificaciones dentro de la aplicación móvil</li>
                <li>Aviso destacado en el sitio web</li>
              </ul>
              <p className="text-gray-700 mt-4">
                El uso continuado de la Plataforma después de la publicación de las modificaciones
                constituye la aceptación de los nuevos términos.
              </p>
            </section>

            {/* REGISTRO Y CUENTA DE USUARIO */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Registro y Cuenta de Usuario</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Requisitos para el Registro</h3>
              <p className="text-gray-700 mb-4">
                Para utilizar las funciones completas de la Plataforma y realizar suscripciones de pago,
                el usuario debe:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Ser mayor de 18 años</strong> o contar con autorización de un tutor legal</li>
                <li>Crear una cuenta proporcionando información <strong>veraz, exacta, actualizada y completa</strong></li>
                <li>Aceptar los presentes Términos y Condiciones</li>
                <li>Contar con un correo electrónico válido y acceso a un dispositivo móvil</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Datos Requeridos para el Registro</h3>
              <p className="text-gray-700 mb-4">
                Durante el proceso de registro, se solicitarán los siguientes datos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Nombre completo</li>
                <li>Correo electrónico</li>
                <li>Contraseña segura</li>
                <li>Área de estudio (opcional)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Responsabilidades del Usuario</h3>
              <p className="text-gray-700 mb-4">
                Es responsabilidad exclusiva del usuario:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Mantener la <strong>confidencialidad de su contraseña</strong> y datos de acceso</li>
                <li>Actualizar su información personal cuando sea necesario</li>
                <li>Notificar inmediatamente a JAKS Tech SAC ante cualquier uso no autorizado de su cuenta</li>
                <li><strong>No compartir su cuenta</strong> con terceros ni permitir el acceso de menores de edad sin supervisión</li>
                <li>Utilizar la Plataforma de manera responsable y conforme a la ley</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.4 Uso Indebido de la Cuenta</h3>
              <p className="text-gray-700">
                <strong>Cualquier uso indebido de la cuenta será responsabilidad del usuario titular.</strong>
                JAKS Tech SAC no se hace responsable por pérdidas o daños derivados del uso no autorizado
                de la cuenta cuando el usuario no haya tomado las precauciones necesarias para proteger
                sus credenciales.
              </p>
            </section>

            {/* PRODUCTOS Y SERVICIOS */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Productos y Servicios</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Descripción de Servicios</h3>
              <p className="text-gray-700 mb-4">
                Rumbo es una <strong>plataforma educativa digital</strong> que ofrece los siguientes servicios:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Acceso a contenido educativo interactivo:</strong> Cursos, materiales de estudio y recursos académicos organizados por área</li>
                <li><strong>Sistema de quizzes y evaluaciones:</strong> Pruebas personalizadas adaptadas al nivel del estudiante</li>
                <li><strong>Simulacros de exámenes:</strong> Preparación para exámenes de admisión y evaluaciones académicas</li>
                <li><strong>Asistente de IA (Chat educativo):</strong> Soporte académico mediante inteligencia artificial para resolver dudas</li>
                <li><strong>Seguimiento de progreso:</strong> Análisis detallado de evolución y estadísticas de aprendizaje</li>
                <li><strong>Planes de estudio personalizados:</strong> Rutas de aprendizaje adaptadas a objetivos individuales</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Tipos de Planes Disponibles</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Plan Gratuito (S/ 0.00):</strong><br />
                    Acceso limitado a funciones básicas de la plataforma de manera permanente
                  </li>
                  <li>
                    <strong>Plan Mensual (S/ 30.00/mes):</strong><br />
                    Acceso completo con renovación automática mensual
                  </li>
                  <li>
                    <strong>Plan Trimestral (S/ 81.00 - S/ 27.00/mes):</strong><br />
                    Pago único trimestral con ahorro del 10%
                  </li>
                  <li>
                    <strong>Plan Semestral (S/ 144.00 - S/ 24.00/mes):</strong><br />
                    Pago único semestral con ahorro del 20%
                  </li>
                  <li>
                    <strong>Plan Anual (S/ 240.00 - S/ 20.00/mes):</strong><br />
                    Pago único anual con ahorro del 33%
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Disponibilidad del Servicio</h3>
              <p className="text-gray-700 mb-4">
                Al tratarse de un <strong>servicio digital</strong>, no existe limitación de "stock" tradicional.
                Sin embargo:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>El acceso al servicio está sujeto a disponibilidad técnica de los servidores</li>
                <li>Ciertas funciones pueden estar temporalmente no disponibles por mantenimiento programado</li>
                <li>JAKS Tech SAC se reserva el derecho de modificar, suspender o descontinuar características específicas con previo aviso</li>
                <li>No se aplicarán restricciones de cantidad mínima o máxima de usuarios</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.4 Período de Prueba y Renovación Automática</h3>
              <p className="text-gray-700 mb-4">
                <strong>Renovación Automática:</strong> Las suscripciones de pago se renuevan automáticamente
                al finalizar cada período de facturación, a menos que el usuario cancele su suscripción antes
                de la fecha de renovación.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Notificación de renovación:</strong> Los usuarios recibirán un correo electrónico
                7 días antes de la fecha de renovación automática</li>
                <li><strong>Cancelación antes de renovación:</strong> El usuario puede cancelar en cualquier
                momento desde su cuenta o contactando a soporte</li>
                <li><strong>Cargo automático:</strong> El método de pago registrado será cargado automáticamente
                en la fecha de renovación</li>
                <li><strong>Cambio de plan:</strong> El usuario puede cambiar de plan en cualquier momento,
                aplicándose el cambio en el próximo período de facturación</li>
              </ul>
            </section>

            {/* PRECIOS Y FORMAS DE PAGO */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Precios y Formas de Pago</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Moneda y Presentación de Precios</h3>
              <p className="text-gray-700 mb-4">
                Todos los precios se presentan en <strong>Soles Peruanos (PEN - S/)</strong> e incluyen
                todos los impuestos aplicables según la legislación peruana vigente.
              </p>
              <p className="text-gray-700 mb-4">
                Los precios mostrados son finales y no se aplicarán cargos adicionales ocultos.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Métodos de Pago Aceptados</h3>
              <p className="text-gray-700 mb-4">
                JAKS Tech SAC acepta los siguientes métodos de pago a través de la pasarela segura
                <strong> Culqi</strong>:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Tarjetas de crédito: Visa, Mastercard</li>
                <li>Tarjetas de débito: Visa Débito, Mastercard Débito</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Seguridad de la Plataforma de Pagos</h3>
              <p className="text-gray-700 mb-4">
                <strong>Procesamiento seguro:</strong> Todos los pagos son procesados a través de
                <strong> Culqi</strong>, una plataforma de pagos certificada que cumple con los estándares
                internacionales de seguridad PCI-DSS.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Encriptación SSL/TLS:</strong> Todos los datos de pago se transmiten encriptados</li>
                <li><strong>No almacenamiento de datos de tarjeta:</strong> JAKS Tech SAC no almacena
                información completa de tarjetas de crédito/débito</li>
                <li><strong>Tokens de seguridad:</strong> Se utilizan tokens únicos para cada transacción</li>
                <li><strong>Validación en tiempo real:</strong> Las transacciones son validadas
                instantáneamente con el banco emisor</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.4 Responsabilidad del Cliente</h3>
              <p className="text-gray-700 mb-4">
                Es responsabilidad del cliente:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Verificar que los datos de pago ingresados sean correctos antes de confirmar</li>
                <li>Asegurar que su tarjeta tenga fondos suficientes o crédito disponible</li>
                <li>Notificar inmediatamente cualquier cargo no reconocido</li>
                <li>Mantener actualizada la información de su método de pago</li>
                <li>Proteger los datos de su tarjeta y no compartirlos con terceros</li>
              </ul>
            </section>

            {/* PROCESO DE COMPRA */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Proceso de Compra (Suscripción)</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Pasos para Realizar una Suscripción</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <ol className="list-decimal pl-6 text-gray-700 space-y-3">
                  <li>
                    <strong>Selección de Plan:</strong><br />
                    El usuario navega por los planes disponibles en https://www.jakstech.net y selecciona
                    el plan que mejor se adapte a sus necesidades
                  </li>
                  <li>
                    <strong>Registro de Datos Personales:</strong><br />
                    El usuario completa el formulario con sus datos:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Nombre y apellidos</li>
                      <li>Correo electrónico</li>
                      <li>Dirección</li>
                      <li>Teléfono</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Ingreso de Datos de Pago:</strong><br />
                    El usuario ingresa los datos de su tarjeta de manera segura en el formulario
                    protegido por Culqi
                  </li>
                  <li>
                    <strong>Confirmación de Compra:</strong><br />
                    El usuario revisa el resumen del pedido y confirma la compra aceptando los Términos
                    y Condiciones
                  </li>
                  <li>
                    <strong>Procesamiento del Pago:</strong><br />
                    Culqi procesa la transacción en tiempo real con el banco emisor
                  </li>
                  <li>
                    <strong>Confirmación y Activación:</strong><br />
                    El usuario recibe:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Pantalla de confirmación con ID de suscripción</li>
                      <li>Correo electrónico de confirmación</li>
                      <li>Activación inmediata del plan premium en la aplicación</li>
                    </ul>
                  </li>
                </ol>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Confirmación y Validación del Pedido</h3>
              <p className="text-gray-700 mb-4">
                Una vez completado el pago:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>El usuario recibe un <strong>número de confirmación único</strong></li>
                <li>Se envía un <strong>correo electrónico de confirmación</strong> con los detalles de la suscripción</li>
                <li>El servicio se activa <strong>inmediatamente</strong> y el usuario puede comenzar a utilizarlo</li>
                <li>El comprobante de pago está disponible en la bandeja de entrada del correo registrado</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.3 Motivos de Cancelación por Parte del Comercio</h3>
              <p className="text-gray-700 mb-4">
                JAKS Tech SAC se reserva el derecho de cancelar o rechazar una suscripción en los siguientes casos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Sospecha de fraude o actividad fraudulenta</li>
                <li>Datos de pago inválidos o rechazados por el banco</li>
                <li>Información personal falsa o incompleta</li>
                <li>Uso de tarjetas reportadas como robadas o clonadas</li>
                <li>Violación de los presentes Términos y Condiciones</li>
                <li>Órdenes duplicadas por error del sistema</li>
              </ul>
              <p className="text-gray-700 mt-4">
                En caso de cancelación, el usuario será notificado por correo electrónico y se realizará
                el reembolso correspondiente en un plazo de 5 a 10 días hábiles.
              </p>
            </section>

            {/* ENVÍOS Y ENTREGA */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Entrega del Servicio (No Aplica Envío Físico)</h2>
              <p className="text-gray-700 mb-4">
                Al tratarse de un <strong>servicio digital</strong>, no aplican envíos físicos ni tiempos
                de entrega tradicionales. El servicio se entrega de la siguiente manera:
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Activación del Servicio</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Activación inmediata:</strong> El servicio se activa automáticamente tras
                confirmar el pago exitoso</li>
                <li><strong>Acceso 24/7:</strong> El usuario puede acceder a la plataforma desde cualquier
                dispositivo con conexión a internet</li>
                <li><strong>Sin restricciones geográficas:</strong> El servicio está disponible en todo
                el territorio peruano y desde cualquier ubicación con acceso a internet</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Requisitos Técnicos</h3>
              <p className="text-gray-700 mb-4">
                Para utilizar el servicio, el usuario requiere:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Conexión a internet (recomendado mínimo 2 Mbps)</li>
                <li>Dispositivo móvil Android 6.0+ o iOS 12.0+</li>
                <li>Navegador web actualizado (para acceso web)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.3 Problemas Técnicos</h3>
              <p className="text-gray-700">
                En caso de problemas técnicos que impidan el acceso al servicio, el usuario debe contactar
                a soporte técnico a través de contacto@jakstech.net o al teléfono +51 987 654 321
                en horario de 9:00 AM a 6:00 PM.
              </p>
            </section>

            {/* PROTECCIÓN DE DATOS PERSONALES */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Protección de Datos Personales</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.1 Cumplimiento Legal</h3>
              <p className="text-gray-700 mb-4">
                JAKS Tech SAC cumple con la <strong>Ley N° 29733 - Ley de Protección de Datos Personales</strong>
                y su Reglamento aprobado por Decreto Supremo N° 003-2013-JUS, garantizando la protección
                de los datos personales de todos los usuarios.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.2 Datos Recopilados</h3>
              <p className="text-gray-700 mb-4">
                Recopilamos los siguientes tipos de datos personales:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li><strong>Datos de identificación:</strong> Nombre, apellidos, correo electrónico</li>
                <li><strong>Datos de contacto:</strong> Teléfono, dirección</li>
                <li><strong>Datos de pago:</strong> Información de tarjeta (procesada por Culqi, no almacenada por nosotros)</li>
                <li><strong>Datos de uso:</strong> Progreso académico, quizzes realizados, tiempo de estudio</li>
                <li><strong>Datos técnicos:</strong> Dirección IP, tipo de dispositivo, sistema operativo</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.3 Finalidad del Uso de Datos</h3>
              <p className="text-gray-700 mb-4">
                Los datos personales son utilizados para:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Proveer y administrar los servicios de la Plataforma</li>
                <li>Procesar pagos y suscripciones</li>
                <li>Personalizar la experiencia educativa del usuario</li>
                <li>Enviar notificaciones sobre el servicio y actualizaciones</li>
                <li>Mejorar la calidad del servicio mediante análisis de uso</li>
                <li>Cumplir con obligaciones legales y fiscales</li>
                <li>Prevenir fraudes y garantizar la seguridad de la plataforma</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.4 Derechos del Usuario sobre sus Datos</h3>
              <p className="text-gray-700 mb-4">
                El usuario tiene los siguientes derechos sobre su información personal:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Derecho de acceso:</strong> Conocer qué datos personales tenemos sobre usted</li>
                <li><strong>Derecho de rectificación:</strong> Corregir datos inexactos o incompletos</li>
                <li><strong>Derecho de cancelación:</strong> Solicitar la eliminación de sus datos</li>
                <li><strong>Derecho de oposición:</strong> Oponerse al tratamiento de sus datos para ciertos fines</li>
                <li><strong>Derecho de información:</strong> Conocer el tratamiento que se da a sus datos</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.5 Cómo Ejercer sus Derechos</h3>
              <p className="text-gray-700 mb-4">
                Para ejercer cualquiera de estos derechos, el usuario debe enviar una solicitud a:
              </p>
              <ul className="list-none text-gray-700 mb-4 space-y-1">
                <li><strong>Email:</strong> contacto@jakstech.net</li>
                <li><strong>Asunto:</strong> "Ejercicio de Derechos ARCO"</li>
                <li><strong>Incluir:</strong> Nombre completo, correo registrado, descripción del derecho a ejercer</li>
              </ul>
              <p className="text-gray-700">
                Responderemos a su solicitud en un plazo máximo de <strong>10 días hábiles</strong>
                según lo establecido por la normativa vigente.
              </p>
            </section>

            {/* PROPIEDAD INTELECTUAL */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Propiedad Intelectual</h2>
              <p className="text-gray-700 mb-4">
                Todo el contenido presente en la Plataforma, incluyendo pero no limitado a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Logotipos, marcas comerciales y nombres comerciales</li>
                <li>Textos, artículos y contenido educativo</li>
                <li>Imágenes, fotografías, ilustraciones y gráficos</li>
                <li>Videos, clips de audio y materiales multimedia</li>
                <li>Software, código fuente y aplicaciones</li>
                <li>Diseño, layout y estructura de la plataforma</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Está protegido por las leyes de <strong>Propiedad Intelectual de Perú</strong> y tratados
                internacionales, siendo propiedad exclusiva de JAKS Tech SAC o de sus proveedores de contenido.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">8.1 Restricciones de Uso</h3>
              <p className="text-gray-700 mb-4">
                Queda estrictamente prohibido:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Copiar, reproducir, distribuir o modificar cualquier contenido de la Plataforma sin autorización escrita</li>
                <li>Utilizar el contenido con fines comerciales sin licencia expresa</li>
                <li>Realizar ingeniería inversa del software o aplicaciones</li>
                <li>Extraer datos mediante scraping, bots o herramientas automatizadas</li>
                <li>Crear obras derivadas basadas en el contenido de la Plataforma</li>
              </ul>
            </section>

            {/* RESPONSABILIDAD Y LIMITACIONES */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Responsabilidad y Limitaciones</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">9.1 Fallos Técnicos</h3>
              <p className="text-gray-700 mb-4">
                JAKS Tech SAC no se hace responsable por:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Interrupciones del servicio por mantenimiento programado o no programado</li>
                <li>Fallos técnicos atribuibles a proveedores externos (hosting, servidores, etc.)</li>
                <li>Problemas de conectividad del usuario o su proveedor de internet</li>
                <li>Incompatibilidad con dispositivos obsoletos o no soportados</li>
                <li>Pérdida de datos por causas de fuerza mayor</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">9.2 Uso Adecuado del Servicio</h3>
              <p className="text-gray-700 mb-4">
                El usuario es responsable de:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Utilizar el servicio exclusivamente para fines educativos legítimos</li>
                <li>No hacer mal uso de las funciones de la plataforma</li>
                <li>Las decisiones académicas tomadas en base a la información proporcionada</li>
                <li>Verificar la información y complementarla con fuentes adicionales cuando sea necesario</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">9.3 Limitación de Responsabilidad</h3>
              <p className="text-gray-700 mb-4">
                JAKS Tech SAC no garantiza:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Resultados específicos en exámenes, evaluaciones o procesos de admisión</li>
                <li>La exactitud absoluta del 100% del contenido educativo</li>
                <li>La disponibilidad ininterrumpida del servicio 24/7/365</li>
              </ul>

              <p className="text-gray-700">
                <strong>La responsabilidad máxima de JAKS Tech SAC</strong> en cualquier circunstancia
                estará limitada al monto pagado por el usuario en el período de facturación actual.
              </p>
            </section>

            {/* LEGISLACIÓN APLICABLE */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Legislación Aplicable y Resolución de Conflictos</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">10.1 Ley Aplicable</h3>
              <p className="text-gray-700 mb-4">
                Estos Términos y Condiciones se rigen e interpretan de conformidad con las
                <strong> leyes de la República del Perú</strong>, incluyendo pero no limitado a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Código de Protección y Defensa del Consumidor (Ley N° 29571)</li>
                <li>Ley de Protección de Datos Personales (Ley N° 29733)</li>
                <li>Código Civil Peruano</li>
                <li>Código de Comercio</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">10.2 Resolución de Conflictos</h3>
              <p className="text-gray-700 mb-4">
                En caso de controversias o conflictos derivados de estos Términos y Condiciones,
                las partes intentarán resolverlos mediante las siguientes vías:
              </p>

              <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-3">
                <li>
                  <strong>Comunicación Directa:</strong><br />
                  El usuario deberá contactar primero a JAKS Tech SAC mediante:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Email: contacto@jakstech.net</li>
                    <li>Teléfono: +51 987 654 321</li>
                  </ul>
                </li>
                <li>
                  <strong>Conciliación Extrajudicial:</strong><br />
                  Las partes podrán someter el conflicto a un Centro de Conciliación autorizado
                </li>
                <li>
                  <strong>INDECOPI:</strong><br />
                  El usuario puede interponer una denuncia administrativa ante el Instituto Nacional
                  de Defensa de la Competencia y de la Protección de la Propiedad Intelectual (INDECOPI)
                </li>
                <li>
                  <strong>Vía Judicial:</strong><br />
                  De no resolverse el conflicto por las vías anteriores, las partes se someten a la
                  jurisdicción de los <strong>Juzgados y Tribunales de Arequipa, Perú</strong>
                </li>
              </ol>
            </section>

            {/* CONTACTO Y SOPORTE */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contacto y Soporte</h2>

              <p className="text-gray-700 mb-4">
                Para consultas, reclamos, soporte técnico o cualquier comunicación relacionada con
                estos Términos y Condiciones, puede contactarnos a través de:
              </p>

              <div className="bg-purple-50 p-6 rounded-lg">
                <ul className="list-none text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Razón Social:</strong>
                    <span>JAKS Tech SAC</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">RUC:</strong>
                    <span>20608472831</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Correo Electrónico:</strong>
                    <span>
                      <a href="mailto:contacto@jakstech.net" className="text-purple-600 hover:underline">
                        contacto@jakstech.net
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Teléfono:</strong>
                    <span>+51 987 654 321</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Horario de Atención:</strong>
                    <span>Lunes a Viernes de 9:00 AM a 6:00 PM (hora de Perú)</span>
                  </li>
                  <li className="flex items-start">
                    <strong className="w-40 flex-shrink-0">Dirección:</strong>
                    <span>Av. Ejército 1009, Yanahuara, Arequipa, Perú</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 mt-6">
                <strong>Tiempo de respuesta:</strong> Nos comprometemos a responder todas las consultas
                en un plazo máximo de <strong>48 horas hábiles</strong>.
              </p>
            </section>

            {/* NOTA FINAL */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-8">
              <p className="text-gray-800 mb-2">
                <strong>DECLARACIÓN DE ACEPTACIÓN:</strong>
              </p>
              <p className="text-gray-700">
                Al utilizar la Plataforma Rumbo y/o realizar una suscripción, usted reconoce expresamente que:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                <li>Ha leído íntegramente estos Términos y Condiciones</li>
                <li>Los ha comprendido en su totalidad</li>
                <li>Acepta estar legalmente vinculado por los mismos</li>
                <li>Es mayor de 18 años o cuenta con autorización de un tutor legal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
