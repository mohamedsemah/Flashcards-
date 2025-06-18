import './Navigation.css'

function Navigation({ onNextCard }) {
  return (
    <div className="navigation">
      <button className="next-button" onClick={onNextCard}>
        Next Card →
      </button>
    </div>
  )
}

export default Navigation