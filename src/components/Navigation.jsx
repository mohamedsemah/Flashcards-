import './Navigation.css'

function Navigation({ onNextCard, onPreviousCard, canGoPrevious, canGoNext }) {
  return (
    <div className="navigation">
      <button
        className="nav-button"
        onClick={onPreviousCard}
        disabled={!canGoPrevious}
        title={!canGoPrevious ? "You're at the first card" : "Go to previous card"}
      >
        ← Previous Card
      </button>
      <button
        className="nav-button"
        onClick={onNextCard}
        disabled={!canGoNext}
        title={!canGoNext ? "You've reached the last card" : "Go to next card"}
      >
        Next Card →
      </button>
    </div>
  )
}

export default Navigation