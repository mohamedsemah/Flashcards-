import './Header.css'

function Header({ title, description, totalCards, currentCard }) {
  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      <p className="header-description">{description}</p>
      <div className="card-count">
        <span className="count-badge">
          Card {currentCard} of {totalCards}
        </span>
      </div>
    </header>
  )
}

export default Header