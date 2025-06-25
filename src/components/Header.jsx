import './Header.css'

function Header({ title, description, totalCards, currentCard, activeCards, masteredCount }) {
  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      <p className="header-description">{description}</p>
      <div className="card-count">
        <span className="count-badge">
          {activeCards !== undefined ? (
            <>Card {currentCard} of {activeCards} Active</>
          ) : (
            <>Card {currentCard} of {totalCards}</>
          )}
        </span>
        {masteredCount !== undefined && masteredCount > 0 && (
          <span className="mastered-badge">
            {masteredCount} Mastered
          </span>
        )}
      </div>
    </header>
  )
}

export default Header