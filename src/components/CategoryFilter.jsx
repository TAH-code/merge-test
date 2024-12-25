import React, { useState, useEffect, useCallback } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

const CategoryFilter = () => {
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("");

  // Memoized fetchCategories function
  const fetchCategories = useCallback(async () => {
    const categoriesRef = collection(db, "categories");
    let q = categoriesRef;

    // Apply filter condition if there is a filter value
    if (filter) {
      q = query(q, where("type", "==", filter));
    }

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setCategories(data);
  }, [filter]); // Depend on the filter value

  useEffect(() => {
    fetchCategories(); // Re-fetch whenever the filter changes
  }, [fetchCategories]); // Add fetchCategories as a dependency

  const handleFilterChange = (e) => {
    setFilter(e.target.value); // Update the filter value
  };

  return (
    <div  id="#products">
      <h3>Our Products</h3>

      <div>
        <label>
          Select Type:
          <select onChange={handleFilterChange} value={filter}>
            <option value="">All</option> {/* Option for no filter */}
            <option value="Protein">Protein</option>
            <option value="Vitamins">Vitamins</option>
          </select>
        </label>
      </div>

      <div>
        {categories.map((category) => (
          <div key={category.id}>
            <h2>{category.name}</h2>
            <p>Price: ${category.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
