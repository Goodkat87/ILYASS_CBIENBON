document.addEventListener('DOMContentLoaded', function () {
    var menuFilterItems = document.querySelectorAll('#menu-filter li');
    var menuCards = document.querySelectorAll('.menu-card');

    menuFilterItems.forEach(function (item) {
        item.addEventListener('click', function () {
            menuFilterItems.forEach(function (filterItem) {
                filterItem.classList.remove('filter-active');
            });
            this.classList.add('filter-active');

            var filterValue = this.getAttribute('data-filter');
            menuCards.forEach(function (card) {
                card.style.display = 'none';

                if (filterValue === '*' || card.classList.contains(filterValue.slice(1))) {
                    card.style.display = 'block';
                }
            });
        });
    });
});