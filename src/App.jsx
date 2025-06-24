import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Flashcard from './components/Flashcard'
import Navigation from './components/Navigation'
import GuessInput from './components/GuessInput'
import { tvShowsData } from './data/tvShowsData'

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [userGuess, setUserGuess] = useState('')
  const [guessResult, setGuessResult] = useState(null) // 'correct', 'incorrect', or null
  const [hasGuessed, setHasGuessed] = useState(false)

  const handleNextCard = () => {
    if (currentCardIndex < tvShowsData.length - 1) {
      setIsFlipped(false)
      setUserGuess('')
      setGuessResult(null)
      setHasGuessed(false)
      // Small delay to ensure flip animation completes before changing card
      setTimeout(() => {
        setCurrentCardIndex(prev => prev + 1)
      }, 150)
    }
  }

  const handlePreviousCard = () => {
    if (currentCardIndex > 0) {
      setIsFlipped(false)
      setUserGuess('')
      setGuessResult(null)
      setHasGuessed(false)
      setTimeout(() => {
        setCurrentCardIndex(prev => prev - 1)
      }, 150)
    }
  }

  const handleFlipCard = () => {
    // Only allow flipping if user has made a guess or if card is already flipped
    if (hasGuessed || isFlipped) {
      setIsFlipped(!isFlipped)
    }
  }

  const handleGuessSubmit = (guess) => {
    const correctAnswer = tvShowsData[currentCardIndex].answer.toLowerCase().trim()
    const userAnswer = guess.toLowerCase().trim()

    // Check if the guess is correct (allow for some flexibility in matching)
    const isCorrect = correctAnswer === userAnswer ||
                     correctAnswer.includes(userAnswer) ||
                     userAnswer.includes(correctAnswer.split(' ')[0]) // Match first word for partial credit

    setGuessResult(isCorrect ? 'correct' : 'incorrect')
    setHasGuessed(true)
  }

  const canGoPrevious = currentCardIndex > 0
  const canGoNext = currentCardIndex < tvShowsData.length - 1

  return (
    <div className="App">
      <Header
        title="Famous TV Shows Flashcards"
        description="Test your knowledge of iconic television series from different eras and genres!"
        totalCards={tvShowsData.length}
        currentCard={currentCardIndex + 1}
      />

      <div className="flashcard-container">
        <Flashcard
          cardData={tvShowsData[currentCardIndex]}
          isFlipped={isFlipped}
          onFlip={handleFlipCard}
          hasGuessed={hasGuessed}
        />

        <GuessInput
          userGuess={userGuess}
          setUserGuess={setUserGuess}
          onGuessSubmit={handleGuessSubmit}
          guessResult={guessResult}
          hasGuessed={hasGuessed}
          isFlipped={isFlipped}
        />

        <Navigation
          onNextCard={handleNextCard}
          onPreviousCard={handlePreviousCard}
          canGoPrevious={canGoPrevious}
          canGoNext={canGoNext}
        />
      </div>
    </div>
  )
}

export default App