import React, { useState, useMemo } from 'react';
import ProductList from './ProductList';
import './App.css';

const products = [
  { name: 'Red Summer Dress', price: '$49' },
  { name: 'Red Party Dress', price: '$79' },
  { name: 'Maroon Gown', price: '$99' },
  { name: 'Blue Jeans', price: '$39' },
  { name: 'Black T-shirt', price: '$25' }
];

function App() {
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="app">
      <h1>Smart Product Filter UI</h1>
      <input
        className="search-box"
        type="text"
        placeholder='Search: "red dress"'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <div className="no-results">No products found</div>
      )}
    </div>
  );
}

export default App;