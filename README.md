# Web Development Project 3 - *TV Shows Flashcards*

Submitted by: **Mohamed Semah Khlifi**

This web app: **An interactive flashcard application featuring trivia questions about famous television shows. Users can test their knowledge of iconic TV series from different eras and genres, with questions ranging from easy pop culture references to challenging deep-cut details about beloved shows.**

Time spent: **25** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong 
  -  Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
- [x] **The user can navigate through an ordered list of cards**
  - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - Both the next and back buttons have visual indication when the user is at the beginning or end of the list (grayed out and disabled), preventing wrap-around navigation

The following **optional** features are implemented:

- [x] Users can use a shuffle button to randomize the order of the cards
  - Cards remain in the same sequence unless the shuffle button is clicked 
  - Cards change to a random sequence once the shuffle button is clicked
- [x] A user's answer may be counted as correct even when it is slightly different from the target answer
  - Answers are considered correct even if they only partially match the answer on the card 
  - Ignores uppercase/lowercase discrepancies, punctuation differences, and matches partial answers
- [x] A counter displays the user's current and longest streak of correct responses
  - The current counter increments when a user guesses an answer correctly
  - The current counter resets to 0 when a user guesses an answer incorrectly
  - A separate counter tracks the longest streak, updating when the current streak exceeds it
- [x] A user can mark a card that they have mastered and have it removed from the pool of displayed cards
  - Users can mark cards as mastered after viewing the answer
  - Mastered cards are removed from active rotation and tracked separately
  - Mastered cards can be viewed in a dedicated modal and can be "unmastered" to return to the pool

The following **additional** features are implemented:

* [x] **Smart Card Locking**: Cards cannot be flipped until a guess is submitted, ensuring proper learning flow
* [x] **Premium 3D Card Flip Animation**: Smooth perspective-based flip transitions with locked state until guess is submitted
* [x] **Glassmorphism UI Design**: Modern transparent elements with backdrop blur effects throughout the interface
* [x] **Difficulty-Based Color Coding**: Easy (blue), Medium (yellow/orange), Hard (red/pink) gradients for visual difficulty indication
* [x] **Smart Answer Validation**: Advanced matching algorithm that handles partial matches, word-based comparisons, and flexible input validation
* [x] **Mastered Cards Management**: Beautiful 2-column grid modal for viewing and managing mastered cards with shimmer effects
* [x] **Guess Again Functionality**: Users can retry incorrect answers without penalty to streak counter
* [x] **Rich Content Cards**: Each card includes detailed explanations, images, and comprehensive information beyond basic Q&A
* [x] **Responsive Design**: Mobile-optimized layout that adapts seamlessly across desktop, tablet, and mobile devices
* [x] **Progress Tracking**: Real-time display of current card position, active cards remaining, and mastered cards count
* [x] **Interactive Hover Effects**: Cards scale and buttons feature shimmer animations for enhanced user feedback
* [x] **Visual Feedback System**: Comprehensive color-coded feedback for correct/incorrect answers with smooth animations

## Video Walkthrough

Here's a walkthrough of implemented user stories:

https://imgur.com/a/tFzH0kN.gif

GIF created with **ScreenToGif**

## Notes

**Challenges encountered while building the app:**

- **State Management Complexity**: Managing the card flip state, navigation history, and current card index required careful coordination between multiple pieces of state to ensure smooth user experience without visual glitches.

- **Animation Timing**: Ensuring smooth transitions when changing cards while maintaining the flip animation state was challenging. Had to implement a delay system to prevent visual conflicts between flip animations and card changes.

- **Advanced Answer Validation**: Creating an intelligent answer matching system that could handle various input formats (partial matches, punctuation differences, case sensitivity) while maintaining accuracy required extensive testing and refinement.

- **CSS 3D Transforms**: Getting the card flip animation to work smoothly across different browsers and devices required careful management of CSS perspective, transform-style, and backface-visibility properties.

- **Responsive Design with Complex Layouts**: Ensuring the glassmorphism effects, 3D animations, and multi-column layouts performed well on mobile devices without sacrificing the visual experience was particularly challenging.

- **Modal State Management**: Implementing the mastered cards modal while preventing body scroll and maintaining proper z-index layering required careful consideration of component architecture.

- **Random Card Logic**: Implementing truly random card selection while avoiding consecutive duplicates and maintaining proper navigation flow required additional logic beyond simple Math.random().

**Technical Decisions Made:**
- Used React hooks (useState, useMemo, useEffect) for clean, modern state management
- Implemented component-based architecture for maintainability and reusability  
- Chose CSS-in-JS approach with modular stylesheets for each component
- Used modern CSS features like backdrop-filter for glassmorphism effects
- Implemented comprehensive error boundaries for robust user experience

## License

    Copyright [2024] [Mohamed Semah Khlifi]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.