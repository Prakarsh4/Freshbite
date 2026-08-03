document.addEventListener('DOMContentLoaded', () => {
  const categoryCards = document.querySelectorAll('.category-card');

  categoryCards.forEach((card) => {
    // Click selection handler
    card.addEventListener('click', () => {
      const categoryName = card.querySelector('.category-card__title')?.textContent;
      if (categoryName) {
        console.log(`Selected category: ${categoryName}`);
        
        // Visual indicator for active selection
        categoryCards.forEach(c => c.classList.remove('category-card--active'));
        card.classList.add('category-card--active');
      }
    });

    // Keyboard navigation support (Enter & Space keys)
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
});