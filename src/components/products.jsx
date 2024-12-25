import React, { useState } from "react";

const Products = () => {
  // Mock product data
  const productsData = [
    { id: 1, name: "Whey Protein", category: "Protein", price: 45.99 },
    { id: 2, name: "Multivitamins", category: "Vitamins", price: 24.99 },
    { id: 3, name: "Creatine Monohydrate", category: "Protein", price: 19.99 },
    { id: 4, name: "Omega-3 Capsules", category: "Supplements", price: 15.99 },
    { id: 5, name: "Pre-Workout Powder", category: "Protein", price: 39.99 },
    { id: 6, name: "Vitamin C Tablets", category: "Vitamins", price: 12.99 },
  ];

  const [filter, setFilter] = useState("All"); // State for the selected filter
  const [products, setProducts] = useState(productsData); // State for displayed products

  // Handle filter change
  const handleFilterChange = (e) => {
    const selectedCategory = e.target.value;
    setFilter(selectedCategory);

    if (selectedCategory === "All") {
      setProducts(productsData); // Show all products
    } else {
      setProducts(
        productsData.filter((product) => product.category === selectedCategory)
      ); // Filter products by category
    }
  };

  return (
    <section id="products" className="p-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Products</h2>

        {/* Filter Dropdown */}
        <div className="text-center mb-4">
          <label htmlFor="product-filter" className="form-label me-2">
            Filter by Category:
          </label>
          <select
            id="product-filter"
            className="form-select w-auto d-inline-block"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="Protein">Protein</option>
            <option value="Vitamins">Vitamins</option>
            <option value="Supplements">Supplements</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="row">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text text-primary">${product.price}</p>
                    <p className="text-muted">Category: {product.category}</p>
                    <button className="btn btn-outline-primary">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No products found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
