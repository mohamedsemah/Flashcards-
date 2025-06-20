# Web Development Project 2 - *TV Shows Flashcards*

Submitted by: **Mohamed Semah Khlifi**

This web app: **An interactive flashcard application featuring trivia questions about famous television shows. Users can test their knowledge of iconic TV series from different eras and genres, with questions ranging from easy pop culture references to challenging deep-cut details about beloved shows.**

Time spent: **17** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed ("Famous TV Shows Flashcards")
  - [x] A short description of the card set is displayed ("Test your knowledge of iconic television series from different eras and genres!")
  - [x] A list of card pairs is created (85+ TV show trivia questions)
  - [x] The total number of cards in the set is displayed (Total Cards: 85+)
  - [x] Card set is represented as a list of card pairs (array of objects with question, answer, details, image, and difficulty)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time (question on front, answer on back)
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information (answer + details + image)
  - [x] Clicking on a flipped card again flips it back, showing the front (question)
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contain images in addition to or in place of text
  - [x] Many cards have images in addition to text (TV show screenshots, logos, and related imagery)
- [x] Cards have different visual styles such as color based on their category
  - [x] Difficulty-based color coding:
    - **Easy**: Light Blue gradient
    - **Medium**: Yellow/Orange gradient  
    - **Hard**: Red/Pink gradient

The following **additional** features are implemented:

* [x] **Navigation History**: Previous button with smart history tracking - users can go back through previously viewed cards
* [x] **Smooth 3D Flip Animation**: Professional card flip transition with 3D perspective effects
* [x] **Responsive Design**: Mobile-optimized layout that adapts to different screen sizes
* [x] **Glassmorphism UI**: Modern design with backdrop blur effects and semi-transparent elements
* [x] **Smart Card Selection**: Random generation that avoids showing the same card consecutively
* [x] **Image Error Handling**: Gracefully hides broken images instead of showing error placeholders
* [x] **Interactive Hover Effects**: Cards scale and buttons have shimmer animations on hover
* [x] **Rich Content**: Each card includes detailed explanations beyond just the basic answer
* [x] **Visual Feedback**: "Click to reveal answer" and "Click to see question" hints
* [x] **Professional Typography**: Text shadows and careful font styling for readability

## Video Walkthrough

Here's a walkthrough of implemented required features:
https://imgur.com/a/5vZS6rg

GIF created with:
**ScreenToGif**

## Notes

**Challenges encountered while building the app:**

- **State Management Complexity**: Managing the card flip state, navigation history, and current card index required careful coordination between multiple pieces of state
- **Animation Timing**: Ensuring smooth transitions when changing cards while maintaining the flip animation state - had to implement a delay system to prevent visual glitches
- **Responsive Image Handling**: Balancing image quality with loading performance, and gracefully handling broken image URLs
- **CSS 3D Transforms**: Getting the card flip animation to work smoothly across different browsers and devices required careful CSS perspective and transform-style properties
- **Random Card Logic**: Implementing truly random card selection while avoiding consecutive duplicates required additional logic beyond simple Math.random()
- **Mobile Optimization**: Ensuring the glassmorphism effects and animations performed well on mobile devices without sacrificing the visual experience

**Technical Decisions:**
- Used React hooks (useState) for clean state management
- Implemented component-based architecture for maintainability
- Chose CSS-in-JS approach with separate stylesheets for each component
- Used modern CSS features like backdrop-filter for glassmorphism effects

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.