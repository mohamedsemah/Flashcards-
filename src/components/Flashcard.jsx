import './Flashcard.css'

function Flashcard({ cardData, isFlipped, onFlip, hasGuessed }) {
  const handleClick = () => {
    // Only allow flipping if user has made a guess or if card is already flipped
    if (hasGuessed || isFlipped) {
      onFlip()
    }
  }

  return (
    <div className="flashcard-wrapper">
      <div
        className={`flashcard ${isFlipped ? 'flipped' : ''} ${!hasGuessed && !isFlipped ? 'locked' : ''}`}
        onClick={handleClick}
      >
        <div className={`flashcard-front ${cardData.difficulty}`}>
          <div className="card-content">
            <h2>{cardData.question}</h2>
            <p className="flip-hint">
              {!hasGuessed && !isFlipped
                ? "Submit your guess below first!"
                : "Click to reveal answer"
              }
            </p>
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