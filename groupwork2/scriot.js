window.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');
  
    setTimeout(function() {
      Array.from(products).forEach(function(product, index) {
        setTimeout(function() {
          product.style.opacity = '1';
        }, index * 0); 
      });
    }, 500);
  });
