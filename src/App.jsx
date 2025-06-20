import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Flashcard from './components/Flashcard'
import Navigation from './components/Navigation'
import { tvShowsData } from './data/tvShowsData'

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [cardHistory, setCardHistory] = useState([0]) // Track visited cards
  const [historyIndex, setHistoryIndex] = useState(0) // Current position in history

  const getRandomCardIndex = () => {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * tvShowsData.length)
    } while (newIndex === currentCardIndex && tvShowsData.length > 1)
    return newIndex
  }

  const handleNextCard = () => {
    setIsFlipped(false) // Reset to front side FIRST
    // Small delay to ensure flip animation completes before changing card
    setTimeout(() => {
      const newIndex = getRandomCardIndex()
      setCurrentCardIndex(newIndex)

      // Add to history if we're at the end of history
      if (historyIndex === cardHistory.length - 1) {
        setCardHistory(prev => [...prev, newIndex])
        setHistoryIndex(prev => prev + 1)
      } else {
        // If we're in the middle of history, replace everything after current position
        setCardHistory(prev => [...prev.slice(0, historyIndex + 1), newIndex])
        setHistoryIndex(prev => prev + 1)
      }
    }, 150) // 150ms delay - shorter than the 600ms flip animation
  }

  const handlePreviousCard = () => {
    if (historyIndex > 0) {
      setIsFlipped(false) // Reset to front side FIRST
      setTimeout(() => {
        const prevIndex = historyIndex - 1
        setHistoryIndex(prevIndex)
        setCurrentCardIndex(cardHistory[prevIndex])
      }, 150)
    }
  }

  const handleFlipCard = () => {
    setIsFlipped(!isFlipped)
  }

  const canGoPrevious = historyIndex > 0

  return (
    <div className="App">
      <Header
        title="Famous TV Shows Flashcards"
        description="Test your knowledge of iconic television series from different eras and genres!"
        totalCards={tvShowsData.length}
      />

      <div className="flashcard-container">
        <Flashcard
          cardData={tvShowsData[currentCardIndex]}
          isFlipped={isFlipped}
          onFlip={handleFlipCard}
        />

        <Navigation
          onNextCard={handleNextCard}
          onPreviousCard={handlePreviousCard}
          canGoPrevious={canGoPrevious}
        />
      </div>
    </div>
  )
}

export default App