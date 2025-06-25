import './MasteredCards.css'

function MasteredCards({ masteredCards, onUnmaster, cardOrder, onClose }) {
  if (masteredCards.length === 0) {
    return (
      <div className="mastered-cards-modal">
        <div className="modal-header">
          <h3 className="mastered-title">
            🏆 Mastered Cards (0)
          </h3>
          <button className="close-btn" onClick={onClose} title="Close modal">
            ✕
          </button>
        </div>
        <div className="no-mastered">
          <p>No cards mastered yet. Keep practicing!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="mastered-cards-modal">
      <div className="modal-header">
        <h3 className="mastered-title">
          🏆 Mastered Cards ({masteredCards.length})
        </h3>
        <button className="close-btn" onClick={onClose} title="Close modal">
          ✕
        </button>
      </div>
      <div className="mastered-grid">
        {masteredCards.map((card, index) => {
          // Find the original card ID to pass to onUnmaster
          const cardId = cardOrder.find(id =>
            card.question === cardOrder[id] ? card.question : false
          ) || index

          return (
            <div key={`${card.question}-${index}`} className={`mastered-card ${card.difficulty}`}>
              <div className="mastered-card-content">
                <div className="mastered-question">
                  {card.question}
                </div>
                <div className="mastered-answer">
                  <strong>{card.answer}</strong>
                </div>
                <button
                  className="unmaster-btn"
                  onClick={() => onUnmaster(cardId)}
                  title="Remove from mastered list"
                >
                  ↩️ Unmaster
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MasteredCards