import './Navigation.css'

function Navigation({ onNextCard, onPreviousCard, canGoPrevious }) {
  return (
    <div className="navigation">
      <button
        className="nav-button"
        onClick={onPreviousCard}
        disabled={!canGoPrevious}
      >
        ← Previous Card
      </button>
      <button className="nav-button" onClick={onNextCard}>
        Next Card →
      </button>
    </div>
  )
}

export default Navigation