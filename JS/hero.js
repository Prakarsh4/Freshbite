document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('heroSearchForm');
  const searchInput = document.getElementById('heroSearchInput');
  const tagButtons = document.querySelectorAll('.hero__tag');

  // Handle hero search form submit
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        console.log(`Searching for: ${query}`);
        // Trigger restaurant search / filter function here
      }
    });
  }

  // Handle clicking quick search tags
  tagButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedQuery = button.getAttribute('data-query');
      if (searchInput && selectedQuery) {
        searchInput.value = selectedQuery;
        searchInput.focus();
        // Fire custom search event or trigger submit directly
        searchForm.dispatchEvent(new Event('submit'));
      }
    });
  });
});