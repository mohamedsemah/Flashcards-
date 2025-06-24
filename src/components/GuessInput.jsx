import './GuessInput.css'

function GuessInput({ userGuess, setUserGuess, onGuessSubmit, guessResult, hasGuessed, isFlipped }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    if (userGuess.trim()) {
      onGuessSubmit(userGuess.trim())
    }
  }

  const handleInputChange = (e) => {
    setUserGuess(e.target.value)
  }

  return (
    <div className="guess-input-container">
      {!isFlipped ? (
        <form onSubmit={handleSubmit} className="guess-form">
          <div className="input-group">
            <label htmlFor="guess-input" className="guess-label">
              Your Guess:
            </label>
            <input
              id="guess-input"
              type="text"
              value={userGuess}
              onChange={handleInputChange}
              placeholder="Enter your answer here..."
              className={`guess-input ${guessResult ? `guess-${guessResult}` : ''}`}
              disabled={hasGuessed}
            />
            <button
              type="submit"
              className={`guess-submit ${guessResult ? `result-${guessResult}` : ''}`}
              disabled={!userGuess.trim() || hasGuessed}
            >
              {hasGuessed ? 'Submitted' : 'Submit Guess'}
            </button>
          </div>

          {guessResult && (
            <div className={`guess-feedback ${guessResult}`}>
              {guessResult === 'correct' ? (
                <span className="feedback-text">
                  ✓ Correct! Great job! Click the card to see more details.
                </span>
              ) : (
                <span className="feedback-text">
                  ✗ Not quite right. Click the card to see the correct answer.
                </span>
              )}
            </div>
          )}
        </form>
      ) : (
        <div className="answer-revealed">
          <div className="input-group">
            <div className="answer-summary">
              <h3>Your Answer:</h3>
              <div className={`your-guess ${guessResult}`}>
                {userGuess || 'No guess submitted'}
              </div>
              {guessResult && (
                <div className={`final-result ${guessResult}`}>
                  {guessResult === 'correct' ? (
                    <span className="result-text">
                      ✓ You got it right! Well done!
                    </span>
                  ) : (
                    <span className="result-text">
                      ✗ Your guess was incorrect, but now you know the answer!
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GuessInput