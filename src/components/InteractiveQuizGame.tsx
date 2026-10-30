import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Award, 
  RotateCcw, 
  ArrowRight, 
  Sparkles, 
  Trees, 
  Flame, 
  Compass,
  ArrowUpRight
} from 'lucide-react';
import { YES_NO_QUESTIONS, YesNoQuestion } from '../data/quizYesNoData';

interface InteractiveQuizGameProps {
  onExplorePage: () => void;
}

// Helper to shuffle and sample without duplicates
const QUESTIONS_PER_GAME = 10;

function getRandomQuestions(count = QUESTIONS_PER_GAME): YesNoQuestion[] {
  const shuffled = [...YES_NO_QUESTIONS];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export const InteractiveQuizGame: React.FC<InteractiveQuizGameProps> = ({ onExplorePage }) => {
  const [activeQuestions, setActiveQuestions] = useState<YesNoQuestion[]>(() => getRandomQuestions());
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [incorrectCount, setIncorrectCount] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  const totalQuestions = activeQuestions.length;
  const currentQ: YesNoQuestion = activeQuestions[currentIndex] || activeQuestions[0];

  const handleAnswer = (answer: boolean) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
    setIsAnswered(true);

    if (answer === currentQ.correctAnswer) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setIncorrectCount((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsGameOver(true);
    }
  };

  const handleRestart = () => {
    setActiveQuestions(getRandomQuestions());
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setCorrectCount(0);
    setIncorrectCount(0);
    setIsGameOver(false);
  };

  const getRecognition = () => {
    const ratio = totalQuestions > 0 ? correctCount / totalQuestions : 0;
    if (ratio >= 0.85) {
      return {
        badge: '🏆 GUARDIÁN/A DE LOS BOSQUES',
        color: 'from-amber-500 to-yellow-400',
        textColor: 'text-amber-300',
        borderColor: 'border-amber-400',
        desc: '¡Excelente! Tenés un gran conocimiento sobre prevención de incendios y resiliencia territorial.'
      };
    } else if (ratio >= 0.65) {
      return {
        badge: '🌲 PROTECTOR/A DE LA NATURALEZA',
        color: 'from-emerald-500 to-teal-400',
        textColor: 'text-emerald-300',
        borderColor: 'border-emerald-400',
        desc: '¡Muy bien! Sabés bastante sobre nuestros ecosistemas, pero todavía podés aprender más.'
      };
    } else if (ratio >= 0.4) {
      return {
        badge: '🌱 APRENDIZ AMBIENTAL',
        color: 'from-cyan-500 to-blue-400',
        textColor: 'text-cyan-300',
        borderColor: 'border-cyan-400',
        desc: '¡Vas por buen camino! Seguí explorando las regiones y los consejos de prevención.'
      };
    } else {
      return {
        badge: '🔥 ¡ES HORA DE APRENDER!',
        color: 'from-orange-500 to-red-500',
        textColor: 'text-orange-300',
        borderColor: 'border-orange-400',
        desc: 'No te preocupes: los errores son parte de aprender cómo proteger nuestros bosques nativos.'
      };
    }
  };

  const percentage = Math.round((correctCount / totalQuestions) * 100);

  return (
    <section id="juego-quiz" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
      
      {/* Title & Subtitle */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-linear-to-r from-emerald-950/80 to-amber-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>Experiencia Interactiva · EXPO TECNO ARTE</span>
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance">
          ¿CUÁNTO SABÉS SOBRE LOS INCENDIOS FORESTALES?
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Poné a prueba tus conocimientos y descubrí cuánto sabés sobre prevención, tecnología y cuidado de nuestros bosques.
        </p>
      </div>

      {/* Main Container */}
      <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-md overflow-hidden">
        
        {/* Glow ambient accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        {!isGameOver ? (
          <div className="relative z-10 space-y-6">
            
            {/* Header: Progress, Category & Question Counter */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-slate-800 text-emerald-400 border border-slate-700">
                  Pregunta {currentIndex + 1} de {totalQuestions}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {currentQ.category} · Dificultad {currentQ.difficulty}
                </span>
              </div>

              {/* Live Score Counter */}
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {correctCount} correctas
                </span>
                <span className="text-slate-600">|</span>
                <span className="text-red-400 font-bold flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5" /> {incorrectCount}
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div 
                className="h-full bg-linear-to-r from-emerald-500 via-amber-400 to-orange-500 transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>

            {/* Question Box */}
            <div className="py-4">
              <h3 className="text-lg sm:text-2xl font-bold text-white leading-snug text-balance">
                {currentQ.question}
              </h3>
            </div>

            {/* SÍ / NO Action Buttons */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-2">
              
              {/* Button SÍ */}
              <button
                type="button"
                onClick={() => handleAnswer(true)}
                disabled={isAnswered}
                className={`group py-5 px-6 rounded-2xl font-black text-lg sm:text-2xl tracking-wide transition-all flex items-center justify-center gap-3 cursor-pointer ${
                  isAnswered
                    ? currentQ.correctAnswer === true
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 scale-102 ring-2 ring-emerald-400'
                      : selectedAnswer === true
                        ? 'bg-red-950/80 border border-red-500 text-red-300 opacity-80'
                        : 'bg-slate-850 text-slate-600 border border-slate-800 opacity-40'
                    : 'bg-emerald-950/60 hover:bg-emerald-600 text-emerald-200 hover:text-white border border-emerald-500/40 hover:border-emerald-400 hover:scale-102 active:scale-98 shadow-md'
                }`}
              >
                <span>SÍ</span>
                <CheckCircle2 className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </button>

              {/* Button NO */}
              <button
                type="button"
                onClick={() => handleAnswer(false)}
                disabled={isAnswered}
                className={`group py-5 px-6 rounded-2xl font-black text-lg sm:text-2xl tracking-wide transition-all flex items-center justify-center gap-3 cursor-pointer ${
                  isAnswered
                    ? currentQ.correctAnswer === false
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 scale-102 ring-2 ring-emerald-400'
                      : selectedAnswer === false
                        ? 'bg-red-950/80 border border-red-500 text-red-300 opacity-80'
                        : 'bg-slate-850 text-slate-600 border border-slate-800 opacity-40'
                    : 'bg-orange-950/60 hover:bg-orange-600 text-orange-200 hover:text-white border border-orange-500/40 hover:border-orange-400 hover:scale-102 active:scale-98 shadow-md'
                }`}
              >
                <span>NO</span>
                <XCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </button>
            </div>

            {/* Answer Feedback Card */}
            {isAnswered && (
              <div className={`p-5 rounded-2xl border transition-all animate-fadeIn space-y-3 ${
                selectedAnswer === currentQ.correctAnswer
                  ? 'bg-emerald-950/60 border-emerald-500/70 text-emerald-100 shadow-lg shadow-emerald-950/50'
                  : 'bg-amber-950/50 border-amber-500/70 text-amber-100 shadow-lg shadow-amber-950/50'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-black text-base sm:text-lg">
                    {selectedAnswer === currentQ.correctAnswer ? (
                      <>
                        <Sparkles className="w-5 h-5 text-emerald-400" />
                        <span className="text-emerald-300">¡EXCELENTE! 🔥🌿</span>
                        <span className="text-xs bg-emerald-900/60 px-2.5 py-0.5 rounded-full text-emerald-200 ml-2 hidden sm:inline">
                          ¡Respuesta correcta!
                        </span>
                      </>
                    ) : (
                      <>
                        <HelpCircle className="w-5 h-5 text-amber-400" />
                        <span className="text-amber-300">¡CASI! NO TE PREOCUPES.</span>
                        <span className="text-xs bg-amber-900/60 px-2.5 py-0.5 rounded-full text-amber-200 ml-2">
                          La respuesta correcta era: <strong>{currentQ.correctAnswer ? 'SÍ' : 'NO'}</strong>
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {currentQ.explanation}
                </p>

                {/* Next Question CTA */}
                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="py-2.5 px-6 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-lg cursor-pointer hover:scale-103"
                  >
                    <span>{currentIndex + 1 < totalQuestions ? 'Siguiente Pregunta' : 'Ver Resultados Finales'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

          </div>
        ) : (
          /* Final Results Screen */
          <div className="relative z-10 text-center space-y-6 py-4 animate-fadeIn">
            {(() => {
              const rec = getRecognition();
              return (
                <>
                  <div className="w-20 h-20 mx-auto rounded-3xl bg-linear-to-br from-amber-500/20 to-emerald-500/20 border border-slate-700 flex items-center justify-center text-4xl shadow-xl">
                    <Award className="w-10 h-10 text-amber-400" />
                  </div>

                  <div className="space-y-2">
                    <div className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700">
                      Resultado Final del Quiz
                    </div>
                    <h3 className={`text-2xl sm:text-4xl font-black ${rec.textColor}`}>
                      {rec.badge}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto">
                      {rec.desc}
                    </p>
                  </div>

                  {/* Score breakdown metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto pt-2">
                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                      <div className="text-xs text-slate-400">Puntaje</div>
                      <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono mt-1">
                        {correctCount * 100} pts
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                      <div className="text-xs text-slate-400">Aciertos</div>
                      <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono mt-1">
                        {correctCount} / {totalQuestions}
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                      <div className="text-xs text-slate-400">Errores</div>
                      <div className="text-2xl sm:text-3xl font-black text-red-400 font-mono mt-1">
                        {incorrectCount}
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                      <div className="text-xs text-slate-400">Efectividad</div>
                      <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono mt-1">
                        {percentage}%
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={handleRestart}
                      className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-950/60"
                    >
                      <RotateCcw className="w-4 h-4" />
                      VOLVER A JUGAR
                    </button>
                    <button
                      type="button"
                      onClick={onExplorePage}
                      className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer border border-slate-700"
                    >
                      <span>VOLVER A EXPLORAR LA PÁGINA</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        )}

      </div>
    </section>
  );
};
