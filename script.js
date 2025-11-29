// Sort Products Function
document.addEventListener('DOMContentLoaded', function() {
    const sortDropdown = document.getElementById('sortProducts');
    const productGrid = document.getElementById('productGrid');
    
    if (sortDropdown && productGrid) {
        sortDropdown.addEventListener('change', function() {
            const sortValue = this.value;
            const products = Array.from(productGrid.querySelectorAll('.product-card'));
            
            let sortedProducts;
            
            switch(sortValue) {
                case 'price-asc':
                    sortedProducts = products.sort((a, b) => {
                        const priceA = parseFloat(a.dataset.price || 0);
                        const priceB = parseFloat(b.dataset.price || 0);
                        return priceA - priceB;
                    });
                    break;
                    
                case 'price-desc':
                    sortedProducts = products.sort((a, b) => {
                        const priceA = parseFloat(a.dataset.price || 0);
                        const priceB = parseFloat(b.dataset.price || 0);
                        return priceB - priceA;
                    });
                    break;
                    
                case 'name-asc':
                    sortedProducts = products.sort((a, b) => {
                        const nameA = (a.dataset.name || '').toLowerCase();
                        const nameB = (b.dataset.name || '').toLowerCase();
                        return nameA.localeCompare(nameB);
                    });
                    break;
                    
                case 'name-desc':
                    sortedProducts = products.sort((a, b) => {
                        const nameA = (a.dataset.name || '').toLowerCase();
                        const nameB = (b.dataset.name || '').toLowerCase();
                        return nameB.localeCompare(nameA);
                    });
                    break;
                    
                default:
                    sortedProducts = products;
            }
            
            // Clear and re-append sorted products
            productGrid.innerHTML = '';
            sortedProducts.forEach(product => productGrid.appendChild(product));
        });
    }
});