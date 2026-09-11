import React, { useState } from 'react'
import { experienceData } from '../data/experienceData'

/**
 * Screen06Quiz — Pantalla 6: Mini-juego / Quiz interactivo
 * - Preguntas sobre la relación con respuestas múltiples y retroalimentación inmediata.
 * - Progreso paso a paso (Pregunta 1 de 3, etc.).
 * - Mensaje final de superación que desbloquea el avance a la sección secreta.
 */
export default function Screen06Quiz({ onNext, onBack }) {
  const data = experienceData.screen06
  const questions = data.questions

  const [questionIndex, setQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const currentQ = questions[questionIndex]

  const handleSelectOption = (index) => {
    if (isAnswered) return
    setSelectedOption(index)
    setIsAnswered(true)
  }

  const handleNextQuestion = () => {
    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(prev => prev + 1)
      setSelectedOption(null)
      setIsAnswered(false)
    } else {
      setIsCompleted(true)
    }
  }

  const handleRestartQuiz = () => {
    setQuestionIndex(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setIsCompleted(false)
  }

  const isCorrect = selectedOption === currentQ?.correctIndex

  return (
    <div className="screen-layout quiz-section">
      {/* Encabezado */}
      <div className="section-header">
        <span className="card-tag">{data.tag}</span>
        <h2 className="section-title">{data.title}</h2>
        <p className="section-subtitle">{data.subtitle}</p>
        <div className="luminous-divider" />
      </div>

      {!isCompleted ? (
        /* Estado: Preguntas en curso */
        <div className="quiz-card">
          {/* Barra de progreso */}
          <div className="quiz-progress-bar">
            <span className="quiz-step-indicator">
              Pregunta {questionIndex + 1} de {questions.length}
            </span>
            <div className="progress-track">
              <div 
                className="progress-fill"
                style={{ width: `${((questionIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Texto de la pregunta */}
          <h3 className="quiz-question-text">{currentQ.question}</h3>

          {/* Opciones */}
          <div className="quiz-options-list">
            {currentQ.options.map((option, idx) => {
              let optionClass = 'quiz-option-btn'
              if (isAnswered) {
                if (idx === currentQ.correctIndex) {
                  optionClass += ' is-correct'
                } else if (idx === selectedOption) {
                  optionClass += ' is-wrong'
                } else {
                  optionClass += ' is-faded'
                }
              }

              return (
                <button
                  key={idx}
                  className={optionClass}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  aria-label={`Opción ${idx + 1}: ${option}`}
                >
                  <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
                  <span className="option-text">{option}</span>
                </button>
              )
            })}
          </div>

          {/* Feedback inmediato al responder */}
          {isAnswered && (
            <div className={`quiz-feedback-box ${isCorrect ? 'correct' : 'incorrect'}`}>
              <p className="feedback-message">
                {isCorrect ? currentQ.successMessage : currentQ.failMessage}
              </p>

              <button 
                className="btn-gothic-primary feedback-continue-btn"
                onClick={handleNextQuestion}
              >
                <span>
                  {questionIndex + 1 < questions.length ? 'Siguiente Pregunta →' : 'Ver Resultado'}
                </span>
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Estado: Quiz completado */
        <div className="gothic-card quiz-completed-card">
          <span className="quiz-trophy-icon">🏆</span>
          <h3 className="card-title">¡Prueba Superada!</h3>
          <p className="poetic-paragraph">
            "{data.completionMessage}"
          </p>

          <div className="card-actions">
            <button 
              className="btn-gothic-primary"
              onClick={onNext}
              aria-label="Continuar a la siguiente sección"
            >
              <span>{data.buttonText}</span>
            </button>

            <button 
              className="btn-gothic-ghost"
              onClick={handleRestartQuiz}
              aria-label="Repetir el juego"
            >
              ↻ Repetir el juego
            </button>
          </div>
        </div>
      )}

      {/* Acción de retorno */}
      <div className="section-actions">
        {onBack && (
          <button 
            className="btn-gothic-ghost" 
            onClick={onBack}
            aria-label="Volver a cosas que amo"
          >
            ← {data.backText}
          </button>
        )}
      </div>
    </div>
  )
}
