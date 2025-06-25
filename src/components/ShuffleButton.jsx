import './ShuffleButton.css'

function ShuffleButton({ onShuffle }) {
  return (
    <button className="shuffle-button" onClick={onShuffle} title="Shuffle card order">
      <span className="shuffle-icon">🔀</span>
      <span className="shuffle-text">Shuffle</span>
    </button>
  )
}

export default ShuffleButton