import React from "react";

const BestSellerProducts = () => {
  // Static data for best-seller products
  const bestSellers = [
    {
      id: 1,
      name: "Whey Protein",
      price: 45.99,
      sales: 120,
      image: "https://via.placeholder.com/300x200?text=Whey+Protein",
    },
    {
      id: 2,
      name: "Multivitamins",
      price: 24.99,
      sales: 95,
      image: "https://via.placeholder.com/300x200?text=Multivitamins",
    },
    {
      id: 3,
      name: "Creatine Monohydrate",
      price: 19.99,
      sales: 85,
      image: "https://via.placeholder.com/300x200?text=Creatine",
    },
    {
      id: 4,
      name: "Omega-3 Capsules",
      price: 15.99,
      sales: 60,
      image: "https://via.placeholder.com/300x200?text=Omega-3",
    },
    {
      id: 5,
      name: "Pre-Workout Powder",
      price: 39.99,
      sales: 50,
      image: "https://via.placeholder.com/300x200?text=Pre-Workout",
    },
  ];

  return (
    <section id="best-sellers" className="p-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Best Seller Products</h2>
        <div className="row">
          {bestSellers.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-primary">${product.price}</p>
                  <p className="text-muted">Sales: {product.sales}</p>
                  <button className="btn btn-primary">View Product</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellerProducts;
