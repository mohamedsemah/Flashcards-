import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Flashcard from './components/Flashcard'
import Navigation from './components/Navigation'
import { tvShowsData } from './data/tvShowsData'

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const getRandomCardIndex = () => {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * tvShowsData.length)
    } while (newIndex === currentCardIndex && tvShowsData.length > 1)
    return newIndex
  }

  const handleNextCard = () => {
    const newIndex = getRandomCardIndex()
    setCurrentCardIndex(newIndex)
    setIsFlipped(false) // Reset to front side when showing new card
  }

  const handleFlipCard = () => {
    setIsFlipped(!isFlipped)
  }

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

        <Navigation onNextCard={handleNextCard} />
      </div>
    </div>
  )
}

export default App