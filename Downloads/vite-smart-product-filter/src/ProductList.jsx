import React from 'react';

const ProductList = React.memo(({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div className="product-item" key={index}>
          {product.name} - {product.price}
        </div>
      ))}
    </div>
  );
});

export default ProductList;