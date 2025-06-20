import './Flashcard.css'

function Flashcard({ cardData, isFlipped, onFlip }) {
  return (
    <div className="flashcard-wrapper">
      <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={onFlip}>
        <div className={`flashcard-front ${cardData.difficulty}`}>
          <div className="card-content">
            <h2>{cardData.question}</h2>
            <p className="flip-hint">Click to reveal answer</p>
          </div>
        </div>
        <div className={`flashcard-back ${cardData.difficulty}`}>
          <div className="card-content">
            {cardData.image && (
              <img
                src={cardData.image}
                alt={cardData.answer}
                className="card-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            )}
            <h2>{cardData.answer}</h2>
            <p className="additional-info">{cardData.details}</p>
            <p className="flip-hint">Click to see question</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flashcard