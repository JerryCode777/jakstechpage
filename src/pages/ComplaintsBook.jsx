import { useState } from 'react';

const ComplaintsBook = () => {
  const [formData, setFormData] = useState({
    // Datos del consumidor
    tipoDocumento: 'DNI',
    numeroDocumento: '',
    nombres: '',
    apellidos: '',
    direccion: '',
    telefono: '',
    email: '',

    // Identificación del bien contratado
    tipoBien: 'servicio',
    montoReclamado: '',
    descripcionBien: '',
    fechaReclamo: new Date().toISOString().split('T')[0], // Fecha del reclamo

    // Detalle de la reclamación
    tipoReclamacion: 'reclamo',
    detalle: '',
    pedido: '',

    // Observaciones
    observaciones: '',

    // Firma virtual (aceptación)
    aceptaFirmaVirtual: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.numeroDocumento) newErrors.numeroDocumento = 'Campo requerido';
    if (!formData.nombres) newErrors.nombres = 'Campo requerido';
    if (!formData.apellidos) newErrors.apellidos = 'Campo requerido';
    if (!formData.direccion) newErrors.direccion = 'Campo requerido';
    if (!formData.telefono) newErrors.telefono = 'Campo requerido';
    if (!formData.email) newErrors.email = 'Campo requerido';
    if (!formData.descripcionBien) newErrors.descripcionBien = 'Campo requerido';
    if (!formData.detalle) newErrors.detalle = 'Campo requerido';
    if (!formData.pedido) newErrors.pedido = 'Campo requerido';
    if (!formData.aceptaFirmaVirtual) newErrors.aceptaFirmaVirtual = 'Debe aceptar la firma virtual';

    // Validate email format
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Here you would normally send to backend
    // For now, just simulate submission
    console.log('Formulario enviado:', formData);

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      // Reset form
      setFormData({
        tipoDocumento: 'DNI',
        numeroDocumento: '',
        nombres: '',
        apellidos: '',
        direccion: '',
        telefono: '',
        email: '',
        tipoBien: 'servicio',
        montoReclamado: '',
        descripcionBien: '',
        fechaReclamo: new Date().toISOString().split('T')[0],
        tipoReclamacion: 'reclamo',
        detalle: '',
        pedido: '',
        observaciones: '',
        aceptaFirmaVirtual: false
      });
    }, 1000);
  };

  if (submitted) {
    const numeroReclamo = `LR-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;

    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¡Reclamo Registrado Exitosamente!</h2>
            <p className="text-gray-600 mb-6">
              Su reclamo ha sido registrado exitosamente en nuestro Libro de Reclamaciones Virtual conforme a la Ley N° 29571.
            </p>

            {/* NÚMERO DE RECLAMO */}
            <div className="bg-purple-50 border-2 border-purple-600 rounded-lg p-6 mb-6">
              <p className="text-purple-900 text-lg mb-2">
                <strong>Código de Identificación:</strong>
              </p>
              <p className="text-3xl font-bold text-purple-600 mb-4">{numeroReclamo}</p>
              <p className="text-gray-700 text-sm">
                Guarde este número para futuras consultas sobre su reclamo
              </p>
            </div>

            {/* INFORMACIÓN IMPORTANTE */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6 text-left">
              <h3 className="font-bold text-blue-900 mb-3 text-center">Información Importante</h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span><strong>Copia del reclamo:</strong> Recibirá una copia completa de su reclamo en el correo electrónico proporcionado.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span><strong>Plazo de respuesta:</strong> JAKS Tech SAC le responderá en un plazo <strong>máximo de 30 días calendario</strong> según lo establecido por INDECOPI.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span><strong>Contacto:</strong> Puede consultar el estado de su reclamo escribiendo a contacto@jakstech.net con su código de identificación.</span>
                </li>
              </ul>
            </div>

            {/* AVISO INDECOPI */}
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 mb-6 text-left">
              <p className="text-yellow-900 text-sm">
                <strong>Recuerde:</strong> Si su reclamo no es atendido o la respuesta no es satisfactoria,
                puede interponer una denuncia administrativa ante <strong>INDECOPI</strong>
                (Instituto Nacional de Defensa de la Competencia y de la Protección de la Propiedad Intelectual).
              </p>
            </div>

            <button
              onClick={() => setSubmitted(false)}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Registrar Otro Reclamo
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          {/* TÍTULO */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Libro de Reclamaciones Virtual</h1>
            <p className="text-gray-600">Conforme a la Ley N° 29571 - Código de Protección y Defensa del Consumidor</p>
          </div>

          {/* DATOS DEL PROVEEDOR */}
          <section className="mb-8 bg-purple-50 border-2 border-purple-600 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">Datos del Proveedor</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
              <div>
                <p className="text-sm font-semibold text-gray-600">Razón Social:</p>
                <p className="font-bold">JAKS Tech SAC</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">RUC:</p>
                <p className="font-bold">20608472831</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm font-semibold text-gray-600">Dirección del Establecimiento:</p>
                <p className="font-bold">Av. Ejército 1009, Yanahuara, Arequipa, Perú</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">Teléfono:</p>
                <p className="font-bold">+51 987 654 321</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">Correo Electrónico:</p>
                <p className="font-bold">contacto@jakstech.net</p>
              </div>
            </div>
          </section>

          {/* AVISO OBLIGATORIO */}
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
            <h3 className="font-bold text-yellow-900 mb-3 text-lg">⚠️ Aviso Obligatorio - INDECOPI</h3>
            <ul className="text-yellow-900 text-sm space-y-2">
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>La formulación del reclamo <strong>no impide acudir a otras vías</strong> de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI.</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>El proveedor deberá dar respuesta al reclamo en un plazo <strong>no mayor a 30 días calendario</strong>.</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>En caso de que su reclamo no sea atendido o se haya resuelto de manera desfavorable, puede interponer una <strong>denuncia administrativa ante INDECOPI</strong>.</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span><strong>Supervisión:</strong> INDECOPI puede solicitar este Libro de Reclamaciones en cualquier momento para verificar el cumplimiento de la normativa.</span>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Sección 1: Identificación del Consumidor */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-purple-600 pb-2">
                1. Identificación del Consumidor Reclamante
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tipo de Documento *
                  </label>
                  <select
                    name="tipoDocumento"
                    value={formData.tipoDocumento}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option value="DNI">DNI</option>
                    <option value="CE">Carnet de Extranjería</option>
                    <option value="Pasaporte">Pasaporte</option>
                    <option value="RUC">RUC</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Número de Documento *
                  </label>
                  <input
                    type="text"
                    name="numeroDocumento"
                    value={formData.numeroDocumento}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                      errors.numeroDocumento ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Ej: 12345678"
                  />
                  {errors.numeroDocumento && <p className="text-red-500 text-sm mt-1">{errors.numeroDocumento}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombres *
                  </label>
                  <input
                    type="text"
                    name="nombres"
                    value={formData.nombres}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                      errors.nombres ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.nombres && <p className="text-red-500 text-sm mt-1">{errors.nombres}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Apellidos *
                  </label>
                  <input
                    type="text"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                      errors.apellidos ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.apellidos && <p className="text-red-500 text-sm mt-1">{errors.apellidos}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Dirección *
                  </label>
                  <input
                    type="text"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                      errors.direccion ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.direccion && <p className="text-red-500 text-sm mt-1">{errors.direccion}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono/Celular *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                      errors.telefono ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Ej: 987654321"
                  />
                  {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="correo@ejemplo.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
            </section>

            {/* Sección 2: Identificación del Bien Contratado */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-purple-600 pb-2">
                2. Identificación del Bien Contratado
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Fecha del Reclamo *
                  </label>
                  <input
                    type="date"
                    name="fechaReclamo"
                    value={formData.fechaReclamo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-gray-50"
                    readOnly
                  />
                  <p className="text-xs text-gray-500 mt-1">Fecha automática del reclamo</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tipo *
                  </label>
                  <select
                    name="tipoBien"
                    value={formData.tipoBien}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option value="producto">Producto</option>
                    <option value="servicio">Servicio</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Descripción del Servicio/Producto *
                  </label>
                  <textarea
                    name="descripcionBien"
                    value={formData.descripcionBien}
                    onChange={handleChange}
                    rows={3}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                      errors.descripcionBien ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Ej: Suscripción Plan Mensual Rumbo - Fecha de contratación: 01/11/2024"
                  />
                  {errors.descripcionBien && <p className="text-red-500 text-sm mt-1">{errors.descripcionBien}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Monto Reclamado (Si aplica)
                  </label>
                  <input
                    type="text"
                    name="montoReclamado"
                    value={formData.montoReclamado}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Ej: S/ 30.00"
                  />
                  <p className="text-xs text-gray-500 mt-1">Solo si reclama un monto específico</p>
                </div>
              </div>
            </section>

            {/* Sección 3: Detalle de la Reclamación */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-purple-600 pb-2">
                3. Detalle de la Reclamación y Pedido del Consumidor
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tipo *
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="tipoReclamacion"
                        value="reclamo"
                        checked={formData.tipoReclamacion === 'reclamo'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span className="text-gray-700">
                        <strong>Reclamo:</strong> Disconformidad relacionada a los productos o servicios
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="tipoReclamacion"
                        value="queja"
                        checked={formData.tipoReclamacion === 'queja'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span className="text-gray-700">
                        <strong>Queja:</strong> Disconformidad no relacionada a los productos o servicios, o malestar o descontento respecto a la atención al público
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Detalle del Reclamo/Queja *
                  </label>
                  <textarea
                    name="detalle"
                    value={formData.detalle}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                      errors.detalle ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Describa detalladamente su reclamo o queja..."
                  />
                  {errors.detalle && <p className="text-red-500 text-sm mt-1">{errors.detalle}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pedido del Consumidor *
                  </label>
                  <textarea
                    name="pedido"
                    value={formData.pedido}
                    onChange={handleChange}
                    rows={3}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                      errors.pedido ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="¿Qué solicita como solución a su reclamo?"
                  />
                  {errors.pedido && <p className="text-red-500 text-sm mt-1">{errors.pedido}</p>}
                </div>
              </div>
            </section>

            {/* Sección 4: Observaciones */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-purple-600 pb-2">
                4. Observaciones y Acciones Adoptadas por el Proveedor
              </h2>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Observaciones Adicionales (Opcional)
                </label>
                <textarea
                  name="observaciones"
                  value={formData.observaciones}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Información adicional que desee agregar..."
                />
              </div>
            </section>

            {/* Sección 5: FIRMA DEL CONSUMIDOR (Virtual) */}
            <section className="border-t-2 border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-purple-600 pb-2">
                5. Firma del Consumidor Reclamante
              </h2>

              <div className="bg-blue-50 border border-blue-300 rounded-lg p-6">
                <p className="text-gray-800 mb-4 text-sm">
                  <strong>Firma Virtual:</strong> Al marcar la casilla a continuación y enviar este formulario,
                  usted declara bajo juramento que la información proporcionada es veraz y completa.
                  Esta acción constituye su firma electrónica conforme al artículo 141 del Código Civil Peruano
                  y tiene la misma validez legal que una firma manuscrita.
                </p>

                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    name="aceptaFirmaVirtual"
                    checked={formData.aceptaFirmaVirtual}
                    onChange={(e) => {
                      setFormData(prev => ({
                        ...prev,
                        aceptaFirmaVirtual: e.target.checked
                      }));
                      if (errors.aceptaFirmaVirtual) {
                        setErrors(prev => ({
                          ...prev,
                          aceptaFirmaVirtual: ''
                        }));
                      }
                    }}
                    className={`mt-1 w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500 ${
                      errors.aceptaFirmaVirtual ? 'border-red-500' : ''
                    }`}
                  />
                  <span className="ml-3 text-gray-800 font-semibold">
                    Acepto que la información proporcionada es correcta y constituye mi firma electrónica en este reclamo *
                  </span>
                </label>
                {errors.aceptaFirmaVirtual && (
                  <p className="text-red-500 text-sm mt-2 ml-8">{errors.aceptaFirmaVirtual}</p>
                )}

                <div className="mt-4 pt-4 border-t border-blue-300">
                  <p className="text-xs text-gray-600">
                    <strong>Nota Legal:</strong> La firma electrónica tiene plena validez jurídica según el
                    Código Civil (Art. 141) y la Ley de Firmas y Certificados Digitales (Ley N° 27269).
                    Al enviar este formulario, recibirá una copia completa por email que servirá como comprobante
                    de su reclamo.
                  </p>
                </div>
              </div>
            </section>

            {/* Respuesta de la Empresa */}
            <section className="bg-gray-50 border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                📋 Respuesta de la Empresa
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Plazo de Respuesta:</strong> JAKS Tech SAC responderá a su reclamo en un plazo
                máximo de <strong className="text-purple-600">30 días calendario</strong> a partir de la
                fecha de registro.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Medio de Respuesta:</strong> La respuesta será enviada al correo electrónico proporcionado
                y podrá consultarla utilizando su código de identificación.
              </p>
              <p className="text-gray-700">
                <strong>Medidas Adoptadas:</strong> La empresa evaluará su caso y le informará sobre las
                acciones tomadas para resolver su reclamo.
              </p>
            </section>

            {/* Botones */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => window.history.back()}
                className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700"
              >
                Enviar Reclamo
              </button>
            </div>
          </form>

          {/* Información Legal Final */}
          <div className="mt-12 pt-8 border-t-2 border-gray-300">
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">📢 Información Legal Importante</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <strong>Base Legal:</strong> Libro de Reclamaciones Virtual conforme a la
                  <strong> Ley N° 29571</strong> (Código de Protección y Defensa del Consumidor) y
                  <strong> D.S. N° 011-2011-PCM</strong> (Reglamento del Libro de Reclamaciones).
                </p>
                <p>
                  <strong>Supervisión:</strong> INDECOPI (Instituto Nacional de Defensa de la Competencia
                  y de la Protección de la Propiedad Intelectual) puede solicitar este Libro de Reclamaciones
                  en cualquier momento.
                </p>
                <p>
                  <strong>Sanciones:</strong> La falta del Libro de Reclamaciones o negarse a recibirlo puede
                  generar multas de hasta 3 UIT según normativa vigente.
                </p>
                <p>
                  <strong>Contacto INDECOPI:</strong> Para consultas: 224-7777 (Lima) |
                  Web: <a href="https://www.indecopi.gob.pe" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">www.indecopi.gob.pe</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsBook;
