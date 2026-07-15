# Jack Spada — Product Engineer Portfolio

An interactive, dynamic portfolio built to showcase projects, experience, and current status through a sleek, highly animated Bento Grid layout.

## 🌟 Key Features

- **Splash Screen Entry**: A custom, timed entry animation that introduces the developer before transitioning seamlessly to the main content.
- **Bento Grid Layout**: A highly modular, responsive CSS Grid layout where all cards live (Projects, Now, About, Experience, Principles, Contact) and align perfectly.
- **Interactive Projects Workspace**: Clicking the Projects card dynamically expands it into a full-screen workspace, fading out the background cards and revealing a gallery of case studies. Clicking a project navigates to a dedicated split-view reading layout.
- **Micro-Interactions & Animations**: Powered by Framer Motion, cards feature hover states, enter animations, and complex layout transitions.
- **Draggable Carousel**: The Experience card features a fully draggable, paginated horizontal carousel to browse past roles within a fixed container.

## 🏗️ Architecture & Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Vanilla CSS with custom properties (`index.css`), adhering strictly to a premium, dark-themed aesthetic with polished typography (Inter) and subtle gradients/glassmorphism.
- **Animations**: `framer-motion` for complex layout transitions (using `LayoutGroup` and `AnimatePresence`), swipe gestures, and page entrance animations.
- **Icons**: `lucide-react` for scalable SVG iconography.

## 📁 Components Structure

- `App.jsx`: Manages the overall state (Splash screen vs Main grid) and handles the routing between the home grid and the active workspace.
- `SplashScreen.jsx`: Initial animated entry screen with a precise 25px offset button and custom directional arrows.
- `ProjectCard.jsx` & `ProjectsWorkspace.jsx`: The core hero section that triggers the AnimateSharedLayout transition into the detailed workspace mode.
- `NowCard.jsx`: A horizontal status card outlining current learning/building activities.
- `AboutCard.jsx`: An interactive brief bio.
- `ExperienceCard.jsx`: A vertical layout featuring a paginated, swipeable timeline of past roles.
- `PrinciplesCard.jsx` & `ContactDock.jsx`: Supporting grid items with hover interactions.

## 🛠️ How it was built

This project was systematically evolved from a blank Vite template into a premium portfolio experience:

1. **Foundation**: We established a strong CSS Grid (`.bento-grid`) to govern the layout. We standardized all cards to use a `.card` base class with uniform padding (`32px`) and exact spacing between small grey headers (`.card__label`) and content (`24px`) to ensure pixel-perfect visual rhythm.
2. **Animation Layer**: We integrated Framer Motion to handle layout shifts, specifically the complex transition when the "Projects" card expands to take over the screen.
3. **Refinement**: We iterated heavily on visual hierarchy and grid placement. We swapped the positions of the "Now" and "Experience" cards, dynamically adjusting their internal flex-layouts (row vs column) so the content filled its new grid slot naturally. 
4. **Polishing**: We obsessively tuned micro-details. This included adjusting margins to mathematically counteract flexbox container heights, ensuring baseline alignments matched perfectly across completely different card components, and tweaking splash screen button offsets.
