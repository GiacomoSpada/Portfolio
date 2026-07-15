
    /* ============================================
       FLIP ANIMATION ENGINE
       ============================================ */
    class FlipAnimator {
      constructor(container, duration = 500, easing = 'cubic-bezier(0.22, 1, 0.36, 1)') {
        this.container = container;
        this.duration = duration;
        this.easing = easing;
      }

      // Record positions of all animated elements
      recordPositions(elements) {
        const positions = new Map();
        elements.forEach(el => {
          const rect = el.getBoundingClientRect();
          positions.set(el, {
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height,
          });
        });
        return positions;
      }

      // Perform FLIP animation
      animate(elements, firstPositions, staggerBase = 30) {
        const lastPositions = this.recordPositions(elements);
        const animations = [];

        elements.forEach((el, index) => {
          const first = firstPositions.get(el);
          const last = lastPositions.get(el);
          if (!first || !last) return;

          const dx = first.left - last.left;
          const dy = first.top - last.top;
          const sw = first.width / last.width;
          const sh = first.height / last.height;

          if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5 && Math.abs(sw - 1) < 0.01 && Math.abs(sh - 1) < 0.01) {
            return; // No meaningful change
          }

          const delay = index * staggerBase;

          const anim = el.animate([
            {
              transform: `translate(${dx}px, ${dy}px) scale(${sw}, ${sh})`,
              transformOrigin: 'top left',
            },
            {
              transform: 'translate(0, 0) scale(1, 1)',
              transformOrigin: 'top left',
            }
          ], {
            duration: this.duration,
            easing: this.easing,
            delay: delay,
            fill: 'none',
          });

          animations.push(anim);
        });

        return Promise.all(animations.map(a => a.finished));
      }
    }

    /* ============================================
       STATE & ELEMENTS
       ============================================ */
    const grid = document.getElementById('bentoGrid');
    const cardProjects = document.getElementById('cardProjects');
    const closeBtn = document.getElementById('closeProject');
    const cardAbout = document.getElementById('cardAbout');
    const cardExperience = document.getElementById('cardExperience');
    const slideOverlay = document.getElementById('slideOverlay');
    const slidePanel = document.getElementById('slidePanel');
    const slidePanelClose = document.getElementById('slidePanelClose');

    const flipAnimator = new FlipAnimator(grid);
    let isExpanded = false;
    let isAnimating = false;

    // Get all cards for FLIP
    function getAnimatableElements() {
      // We only FLIP animate the projects card, the rest will fade smoothly via CSS
      return [cardProjects];
    }

    /* ============================================
       SIGNATURE INTERACTION — Project Expansion
       ============================================ */
    // Close button uses capture phase to fire BEFORE the card's click handler
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      if (!isExpanded || isAnimating) return;
      collapseProject();
    }, true);

    cardProjects.addEventListener('click', (e) => {
      // Ignore clicks on the close button or its children
      if (e.target === closeBtn || e.target.closest('.close-btn')) return;
      if (isExpanded || isAnimating) return;
      expandProject();
    });

    async function expandProject() {
      isAnimating = true;
      const elements = getAnimatableElements();
      const firstPositions = flipAnimator.recordPositions(elements);

      grid.classList.add('expanded');
      isExpanded = true;

      // Wait for layout recalculation
      requestAnimationFrame(() => {
        requestAnimationFrame(async () => {
          await flipAnimator.animate(elements, firstPositions, 30);
          isAnimating = false;
        });
      });
    }

    async function collapseProject() {
      isAnimating = true;
      const elements = getAnimatableElements();
      const firstPositions = flipAnimator.recordPositions(elements);

      grid.classList.remove('expanded');
      isExpanded = false;

      requestAnimationFrame(() => {
        requestAnimationFrame(async () => {
          await flipAnimator.animate(elements, firstPositions, 20);
          isAnimating = false;
        });
      });
    }

    // Escape key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (isExpanded && !isAnimating) collapseProject();
        if (slidePanel.classList.contains('active')) closeSlidePanel();
      }
    });

    /* ============================================
       ABOUT CARD — Flip
       ============================================ */
    cardAbout.addEventListener('click', () => {
      if (isExpanded) return;
      cardAbout.classList.toggle('flipped');
    });

    /* ============================================
       EXPERIENCE CARD — Slide-out Panel
       ============================================ */
    cardExperience.addEventListener('click', () => {
      if (isExpanded) return;
      openSlidePanel();
    });

    function openSlidePanel() {
      slideOverlay.classList.add('active');
      slidePanel.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeSlidePanel() {
      slideOverlay.classList.remove('active');
      slidePanel.classList.remove('active');
      document.body.style.overflow = '';
    }

    slideOverlay.addEventListener('click', closeSlidePanel);
    slidePanelClose.addEventListener('click', closeSlidePanel);

    /* ============================================
       KEYBOARD ACCESSIBILITY
       ============================================ */
    document.querySelectorAll('[role="button"][tabindex="0"]').forEach(el => {
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          el.click();
        }
      });
    });
  
