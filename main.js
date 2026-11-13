import Reveal from 'reveal.js';
import Notes from 'reveal.js/plugin/notes';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/moon.css';
import './css/course-theme.css';

// Hide the clock and timer in the speaker view
const originalOpen = window.open;
window.open = function (...args) {
  const win = originalOpen.apply(this, args);
  if (win) {
    const hideTime = setInterval(() => {
      const doc = win.document;
      if (doc && doc.querySelector('.speaker-controls-time')) {
        const style = doc.createElement('style');
style.textContent = `
  .speaker-controls-time,
  .speaker-controls-notes .label,
  #speaker-layout,
  .speaker-layout-dropdown,
  .speaker-layout-label { display: none !important; }
`;
        doc.head.appendChild(style);
        clearInterval(hideTime);
      }
    }, 200);
    setTimeout(() => clearInterval(hideTime), 10000);
  }
  return win;
};

const deck = new Reveal({
  plugins: [Notes],
  hash: true,
  transition: 'fade',
    width: 1920,
  height: 1080,
  margin: 0.04,
});
deck.initialize();