import React, { useState, useEffect, useRef } from 'react';
import { X, Upload, MapPin, Clock, Flame, CheckCircle2, AlertOctagon, RefreshCw, Eye } from 'lucide-react';
import { ReportData } from '../types';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  isExhibitionMode?: boolean;
}

export const ReportModal: React.FC<ReportModalProps> = ({ isOpen, onClose, isExhibitionMode }) => {
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoName, setPhotoName] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [isLocating, setIsLocating] = useState<boolean>(false);
  const [locationStatus, setLocationStatus] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [incidentType, setIncidentType] = useState<ReportData['incidentType']>('Columna de humo grande');
  const [description, setDescription] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      const now = new Date();
      setTime(now.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }));
      setIsSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUseLocation = () => {
    setIsLocating(true);
    setLocationStatus('Obteniendo coordenadas GPS...');

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude.toFixed(4);
          const lng = position.coords.longitude.toFixed(4);
          setLocation(`Coordenadas GPS: ${lat}, ${lng} (Ubicación del dispositivo)`);
          setLocationStatus('Ubicación detectada');
          setIsLocating(false);
        },
        (error) => {
          console.warn('Geolocation error:', error);
          setLocation('Bariloche / Parque Nacional Nahuel Huapi (Ejemplo de referencia)');
          setLocationStatus('Permiso no otorgado. Se cargó ejemplo de referencia.');
          setIsLocating(false);
        },
        { timeout: 8000 }
      );
    } else {
      setLocation('San Martín de los Andes, Neuquén (Ejemplo)');
      setLocationStatus('Geolocalización no soportada en este navegador.');
      setIsLocating(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setPhotoPreview(null);
    setPhotoName('');
    setLocation('');
    setLocationStatus('');
    setDescription('');
    setIncidentType('Columna de humo grande');
    setIsSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className={`relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto ${isExhibitionMode ? 'text-base' : 'text-sm'}`}>
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30">
              <Flame className="w-5 h-5 animate-pulse" />
            </span>
            <div>
              <h3 className={`font-bold text-white ${isExhibitionMode ? 'text-xl' : 'text-lg'}`}>
                Sistema de Reporte Temprano
              </h3>
              <p className="text-xs text-slate-400">
                Módulo ciudadano de registro y alerta comunitaria
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="py-6 text-center space-y-5">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-white">REPORTE REGISTRADO</h4>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-emerald-950/60 text-emerald-300 border border-emerald-700/50">
                  Simulación de EXPO TECNO ARTE
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-left space-y-2 text-xs md:text-sm">
                <div className="font-semibold text-slate-300 border-b border-slate-700 pb-1.5">
                  Resumen del evento registrado:
                </div>
                <div className="grid grid-cols-2 gap-2 text-slate-400">
                  <div><strong className="text-slate-200">Tipo:</strong> {incidentType}</div>
                  <div><strong className="text-slate-200">Hora:</strong> {time}</div>
                  <div className="col-span-2"><strong className="text-slate-200">Ubicación:</strong> {location || 'No especificada'}</div>
                  {description && (
                    <div className="col-span-2"><strong className="text-slate-200">Detalle:</strong> {description}</div>
                  )}
                </div>
                {photoPreview && (
                  <div className="mt-2 pt-2 border-t border-slate-700/50 flex items-center gap-3">
                    <img src={photoPreview} alt="Evidencia cargada" className="w-16 h-16 object-cover rounded-lg border border-slate-600" />
                    <span className="text-xs text-slate-400">Fotografía anexada al expediente educativo</span>
                  </div>
                )}
              </div>

              {/* Crucial Educational Disclaimer */}
              <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-600/40 text-amber-200 text-xs md:text-sm flex items-start gap-3 text-left">
                <AlertOctagon className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p>
                  <strong>Aviso Importante:</strong> Este formulario es una <strong>simulación educativa</strong> para nuestra exposición escolar. No se envía a ninguna autoridad. Ante una emergencia real con riesgo para personas o bosques, comunicate inmediatamente con los servicios oficiales (<strong>911</strong> o <strong>100 Bomberos</strong>).
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  onClick={resetForm}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Registrar otro reporte
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-colors"
                >
                  Entendido, volver a la app
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Educational banner */}
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/70 text-slate-300 text-xs flex items-center gap-2.5">
                <Eye className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  La detección temprana ciudadana es el primer eslabón para que los centros de monitoreo despachen brigadas a tiempo.
                </span>
              </div>

              {/* Photo Upload */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  1. Fotografía del avistamiento
                </label>
                
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handlePhotoUpload}
                  accept="image/*"
                  className="hidden"
                />

                {photoPreview ? (
                  <div className="relative rounded-xl overflow-hidden border border-slate-700 max-h-48 group">
                    <img src={photoPreview} alt="Preview" className="w-full h-44 object-cover" />
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="px-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg hover:bg-slate-700"
                      >
                        Cambiar foto
                      </button>
                      <button
                        type="button"
                        onClick={() => { setPhotoPreview(null); setPhotoName(''); }}
                        className="px-3 py-1.5 bg-red-900/80 text-white text-xs rounded-lg hover:bg-red-800"
                      >
                        Quitar
                      </button>
                    </div>
                    <div className="absolute bottom-2 left-2 text-[11px] bg-slate-900/80 px-2 py-0.5 rounded text-slate-200">
                      {photoName || 'Imagen cargada'}
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full border-2 border-dashed border-slate-700 hover:border-slate-500 rounded-xl p-5 text-center transition-colors flex flex-col items-center justify-center gap-2 group cursor-pointer"
                  >
                    <div className="p-3 rounded-full bg-slate-800 group-hover:bg-slate-700 text-slate-400 group-hover:text-emerald-400 transition-colors">
                      <Upload className="w-5 h-5" />
                    </div>
                    <div className="text-sm font-medium text-slate-300">
                      Seleccionar fotografía o arrastrar archivo
                    </div>
                    <div className="text-xs text-slate-500">
                      Permite georreferenciar columnas de humo y evaluar densidad
                    </div>
                  </button>
                )}
              </div>

              {/* Location */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="report-location-input" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    2. Ubicación o punto de referencia
                  </label>
                  <button
                    type="button"
                    onClick={handleUseLocation}
                    disabled={isLocating}
                    className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-medium disabled:opacity-50"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    {isLocating ? 'Detectando GPS...' : 'Usar mi ubicación GPS'}
                  </button>
                </div>
                <input
                  id="report-location-input"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Ej: Ruta 40 Km 1980 / Cerca del Lago Gutiérrez / Salta - Cerro San Bernardo"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-emerald-500 text-sm"
                />
                {locationStatus && (
                  <p className="text-[11px] text-slate-400 italic">{locationStatus}</p>
                )}
              </div>

              {/* Time & Incident Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="report-time-input" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    3. Hora del avistamiento
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      id="report-time-input"
                      type="text"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      placeholder="HH:MM"
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-100 text-sm font-mono focus:outline-hidden focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="report-type-select" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    4. ¿Qué visualizaste?
                  </label>
                  <select
                    id="report-type-select"
                    value={incidentType}
                    onChange={(e) => setIncidentType(e.target.value as ReportData['incidentType'])}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-100 text-sm focus:outline-hidden focus:border-emerald-500"
                  >
                    <option value="Humo">Humo incipiente / tenue</option>
                    <option value="Fuego">Fuego activo visible</option>
                    <option value="Columna de humo grande">Columna de humo grande y densa</option>
                    <option value="Fuego cerca de viviendas">Fuego próximo a viviendas o interfaz</option>
                    <option value="Otro">Otro indicio sospechoso</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label htmlFor="report-description-input" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  5. Descripción de lo observado
                </label>
                <textarea
                  id="report-description-input"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  placeholder="Detallar color del humo, dirección del viento, accesos para vehículos o presencia de personas..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-hidden focus:border-emerald-500"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-linear-to-r from-red-600 via-orange-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold tracking-wide shadow-lg shadow-red-900/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Flame className="w-5 h-5" />
                  🚨 ENVIAR REPORTE
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  Registro educativo instantáneo para demostración en stand
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
