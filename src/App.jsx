import { useState, useMemo, useEffect } from 'react'
import { createPortal } from 'react-dom'
import './App.css'
import Header from './components/Header'
import Flashcard from './components/Flashcard'
import Navigation from './components/Navigation'
import GuessInput from './components/GuessInput'
import StreakCounter from './components/StreakCounter'
import ShuffleButton from './components/ShuffleButton'
import MasteredCards from './components/MasteredCards'
import { tvShowsData } from './data/tvShowsData'

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [userGuess, setUserGuess] = useState('')
  const [guessResult, setGuessResult] = useState(null) // 'correct', 'incorrect', or null
  const [hasGuessed, setHasGuessed] = useState(false)
  const [cardOrder, setCardOrder] = useState(() => tvShowsData.map((_, index) => index))
  const [masteredCardIds, setMasteredCardIds] = useState(new Set())
  const [currentStreak, setCurrentStreak] = useState(0)
  const [longestStreak, setLongestStreak] = useState(0)
  const [showMasteredCards, setShowMasteredCards] = useState(false)

  // Get active cards (non-mastered cards)
  const activeCards = useMemo(() => {
    return cardOrder.filter(cardId => !masteredCardIds.has(cardId))
  }, [cardOrder, masteredCardIds])

  // Get mastered cards data
  const masteredCardsData = useMemo(() => {
    return Array.from(masteredCardIds).map(cardId => tvShowsData[cardId])
  }, [masteredCardIds])

  // Handle body scroll when modal is open
  useEffect(() => {
    if (showMasteredCards) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [showMasteredCards])

  const resetCardState = () => {
    setIsFlipped(false)
    setUserGuess('')
    setGuessResult(null)
    setHasGuessed(false)
  }

  const handleNextCard = () => {
    if (currentCardIndex < activeCards.length - 1) {
      resetCardState()
      // Small delay to ensure flip animation completes before changing card
      setTimeout(() => {
        setCurrentCardIndex(prev => prev + 1)
      }, 150)
    }
  }

  const handlePreviousCard = () => {
    if (currentCardIndex > 0) {
      resetCardState()
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

  // Enhanced answer matching function
  const isAnswerCorrect = (userAnswer, correctAnswer) => {
    const normalize = (str) =>
      str.toLowerCase()
         .replace(/[^\w\s]/g, '') // Remove punctuation
         .replace(/\s+/g, ' ')    // Normalize spaces
         .trim()

    const normalizedUser = normalize(userAnswer)
    const normalizedCorrect = normalize(correctAnswer)

    // Exact match
    if (normalizedUser === normalizedCorrect) return true

    // Check if user answer is contained in correct answer
    if (normalizedCorrect.includes(normalizedUser)) return true

    // Check if correct answer is contained in user answer
    if (normalizedUser.includes(normalizedCorrect)) return true

    // Check for word-based matches
    const userWords = normalizedUser.split(' ')
    const correctWords = normalizedCorrect.split(' ')

    // If user entered multiple words that match any words in the correct answer
    const matchingWords = userWords.filter(word =>
      correctWords.some(correctWord =>
        correctWord.includes(word) || word.includes(correctWord)
      )
    )

    // Consider correct if at least half the words match or if it's a single significant word
    return matchingWords.length >= Math.min(2, Math.ceil(userWords.length / 2))
  }

  const handleGuessSubmit = (guess, isReset = false) => {
    // If this is a reset call, clear the guess state
    if (isReset || guess === null) {
      setGuessResult(null)
      setHasGuessed(false)
      return
    }

    const currentCard = tvShowsData[activeCards[currentCardIndex]]
    const isCorrect = isAnswerCorrect(guess, currentCard.answer)

    setGuessResult(isCorrect ? 'correct' : 'incorrect')
    setHasGuessed(true)

    // Only update streak counters on the first guess attempt
    if (!hasGuessed) {
      if (isCorrect) {
        const newCurrentStreak = currentStreak + 1
        setCurrentStreak(newCurrentStreak)
        if (newCurrentStreak > longestStreak) {
          setLongestStreak(newCurrentStreak)
        }
      } else {
        setCurrentStreak(0)
      }
    }
  }

  const handleShuffle = () => {
    const shuffled = [...cardOrder].sort(() => Math.random() - 0.5)
    setCardOrder(shuffled)
    setCurrentCardIndex(0)
    resetCardState()
  }

  const handleMasterCard = () => {
    const cardId = activeCards[currentCardIndex]

    // First flip the card back to show the question side
    setIsFlipped(false)

    // Small delay to let the flip animation start, then master the card
    setTimeout(() => {
      setMasteredCardIds(prev => new Set([...prev, cardId]))

      // If this was the last card, go to previous card
      if (currentCardIndex >= activeCards.length - 1 && currentCardIndex > 0) {
        setCurrentCardIndex(prev => prev - 1)
      }
      // If this was the only card left, reset to 0
      else if (activeCards.length === 1) {
        setCurrentCardIndex(0)
      }

      // Reset other card state
      setUserGuess('')
      setGuessResult(null)
      setHasGuessed(false)
    }, 150) // Match the flip animation timing
  }

  const handleUnmasterCard = (cardId) => {
    setMasteredCardIds(prev => {
      const newSet = new Set(prev)
      newSet.delete(cardId)
      return newSet
    })
  }

  const canGoPrevious = currentCardIndex > 0
  const canGoNext = currentCardIndex < activeCards.length - 1

  // If no active cards, show mastered cards view
  if (activeCards.length === 0) {
    return (
      <div className="App">
        <Header
          title="Famous TV Shows Flashcards"
          description="Congratulations! You've mastered all the cards!"
          totalCards={tvShowsData.length}
          currentCard={0}
          masteredCount={masteredCardIds.size}
        />
        <div className="flashcard-container">
          <div className="all-mastered">
            <h2>🎉 All Cards Mastered! 🎉</h2>
            <p>You've successfully mastered all {tvShowsData.length} cards!</p>
            <button
              className="nav-button"
              onClick={() => setShowMasteredCards(!showMasteredCards)}
            >
              {showMasteredCards ? 'Hide' : 'View'} Mastered Cards
            </button>
            {showMasteredCards && (
              <div className="modal-overlay" onClick={() => setShowMasteredCards(false)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                  <MasteredCards
                    masteredCards={masteredCardsData}
                    onUnmaster={handleUnmasterCard}
                    cardOrder={cardOrder}
                    onClose={() => setShowMasteredCards(false)}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <Header
        title="Famous TV Shows Flashcards"
        description="Test your knowledge of iconic television series from different eras and genres!"
        totalCards={tvShowsData.length}
        currentCard={currentCardIndex + 1}
        activeCards={activeCards.length}
        masteredCount={masteredCardIds.size}
      />

      <div className="flashcard-container">
        <div className="controls-row">
          <ShuffleButton onShuffle={handleShuffle} />
          <button
            className="mastered-toggle-btn"
            onClick={() => setShowMasteredCards(!showMasteredCards)}
          >
            View Mastered ({masteredCardIds.size})
          </button>
        </div>

        <div className="card-and-input-container">
          <Flashcard
            cardData={tvShowsData[activeCards[currentCardIndex]]}
            isFlipped={isFlipped}
            onFlip={handleFlipCard}
            hasGuessed={hasGuessed}
            onMaster={handleMasterCard}
            canMaster={hasGuessed && isFlipped}
          />

          <div className="input-side">
            <StreakCounter
              currentStreak={currentStreak}
              longestStreak={longestStreak}
            />
            <GuessInput
              userGuess={userGuess}
              setUserGuess={setUserGuess}
              onGuessSubmit={handleGuessSubmit}
              guessResult={guessResult}
              hasGuessed={hasGuessed}
              isFlipped={isFlipped}
            />
          </div>
        </div>

        <Navigation
          onNextCard={handleNextCard}
          onPreviousCard={handlePreviousCard}
          canGoPrevious={canGoPrevious}
          canGoNext={canGoNext}
        />
      </div>

      {/* Simple modal without portal - direct rendering */}
      {showMasteredCards && (
        <div
          className="simple-modal-overlay"
          onClick={() => setShowMasteredCards(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: '20px'
          }}
        >
          <div
            className="simple-modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              maxWidth: '90vw',
              maxHeight: '90vh',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <MasteredCards
              masteredCards={masteredCardsData}
              onUnmaster={handleUnmasterCard}
              cardOrder={cardOrder}
              onClose={() => setShowMasteredCards(false)}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default App