import React, { useState } from 'react'
import { experienceData } from '../data/experienceData'

/**
 * Screen06Quiz — Pantalla 6: Mini-juego / Quiz interactivo
 * - Preguntas sobre la historia compartida con consecuencias y progresión.
 * - Respuestas incorrectas con personalidad sin frustración ("Casi...", "Eso era una trampa").
 * - Al completar el quiz se desbloquea el acceso a la siguiente fase con un logro narrativo.
 */
export default function Screen06Quiz({ onNext, onBack }) {
  const data = experienceData.screen06
  const questions = data.questions

  const [questionIndex, setQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [answeredHistory, setAnsweredHistory] = useState([])

  const currentQ = questions[questionIndex]

  const handleSelectOption = (index) => {
    if (isAnswered) return
    setSelectedOption(index)
    setIsAnswered(true)
    const isCorrect = index === currentQ.correctIndex
    setAnsweredHistory(prev => [...prev, isCorrect])
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
    setAnsweredHistory([])
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
          {/* Indicadores de progresión estilo pasos */}
          <div className="quiz-steps-tracker">
            {questions.map((q, idx) => {
              const isPast = idx < questionIndex
              const isCurrent = idx === questionIndex
              const pastSuccess = answeredHistory[idx] === true

              return (
                <div key={q.id || idx} className="step-dot-wrapper">
                  <span className={`quiz-step-dot ${isCurrent ? 'active' : ''} ${isPast ? (pastSuccess ? 'passed' : 'attempted') : ''}`}>
                    {isPast ? (pastSuccess ? '✓' : '•') : `0${idx + 1}`}
                  </span>
                  {idx < questions.length - 1 && <span className="step-connector-line" />}
                </div>
              )
            })}
          </div>

          {/* Pregunta actual */}
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
                  {questionIndex + 1 < questions.length ? 'Siguiente Pregunta →' : 'Desbloquear Resultado'}
                </span>
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Estado: Quiz completado y Acceso Desbloqueado */
        <div className="gothic-card quiz-completed-card">
          <div className="quiz-unlock-badge">
            <span className="badge-pulse-glow" />
            <span>ACCESO DESBLOQUEADO</span>
          </div>

          <h3 className="card-title">{data.unlockTitle}</h3>
          
          <p className="poetic-paragraph">
            "{data.unlockMessage}"
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
