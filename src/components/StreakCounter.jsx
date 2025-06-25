import './StreakCounter.css'

function StreakCounter({ currentStreak, longestStreak }) {
  return (
    <div className="streak-counter">
      <div className="streak-item current-streak">
        <span className="streak-label">Current Streak</span>
        <span className="streak-value current">{currentStreak}</span>
      </div>
      <div className="streak-divider">|</div>
      <div className="streak-item longest-streak">
        <span className="streak-label">Best Streak</span>
        <span className="streak-value longest">{longestStreak}</span>
      </div>
    </div>
  )
}

export default StreakCounter