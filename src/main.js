// Function to play entry animation
const entryAnime = () => {
  // Create a GSAP timeline with default easing
  const tl = gsap.timeline({
    default: {
      ease: "power2"
    }
  });

  // Animate elements sequentially
  tl.to(
    '.top-text.greet', {
      opacity: 1,
      y: 0,
      duration: 1,
    });
  tl.to(
    '.top-text.name', {
      opacity: 1,
      y: 0,
      duration: 1,
    });
  tl.to(
    '.bottom-text', {
      opacity: 1,
      x: 0,
      duration: 1,
    });
  tl.to(
    '.navicons', {
      y: 1,
      duration: 0.75
    });

  // Store data indicating animation has been played, along with timestamp
  const data = {
    animationPlayed: true,
    timestamp: Date.now()
  };
  sessionStorage.setItem('animationData', JSON.stringify(data));
}

// Check if animation data exists in sessionStorage and if it's not expired
const animationData = sessionStorage.getItem('animationData');
if (animationData) {
  // Parse animation data
  const { animationPlayed, timestamp } = JSON.parse(animationData);
  // Calculate one week in milliseconds
  const oneWeek = 7 * 24 * 60 * 60 * 1000;
  if (animationPlayed && (Date.now() - timestamp) < oneWeek) {
    // Animation has been played and not expired, no need to play again
  } else {
    // Animation not played yet or expired, clear sessionStorage and play it again
    sessionStorage.removeItem('animationData');
    entryAnime();
  }
} else {
  // Animation data doesn't exist, play it for the first time
  entryAnime();
}
