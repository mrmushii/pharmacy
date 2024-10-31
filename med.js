document.addEventListener('DOMContentLoaded', () => {
    const categoryFilter = document.getElementById('category');
    const searchInput = document.getElementById('medicineSearch');
    const medicineGrid = document.getElementById('medicineGrid');
    const medicineCards = document.querySelectorAll('.medicine-card');

    // Filter medicines by category
    categoryFilter.addEventListener('change', () => {
        const selectedCategory = categoryFilter.value;

        medicineCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (selectedCategory === 'all' || selectedCategory === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Search medicine by name
    searchInput.addEventListener('input', () => {
        const searchQuery = searchInput.value.toLowerCase();

        medicineCards.forEach(card => {
            const medicineName = card.querySelector('h3').textContent.toLowerCase();
            if (medicineName.includes(searchQuery)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});