import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import the CSS for your navbar
import logo from '/Users/tasbeehismaeel/Documents/my-project/src/assets/images/logo.png';
import { getFirestore, collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCj3OKu_opXJJ1jP7svAg_Uosm-YUL8048",
  authDomain: "proteina-e82b6.firebaseapp.com",
  projectId: "proteina-e82b6",
  storageBucket: "proteina-e82b6.firebasestorage.app",
  messagingSenderId: "768271965202",
  appId: "1:768271965202:web:075116c611ad78e5c34ccb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [bestSellerBrands, setBestSellerBrands] = useState([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fetch best-selling brands from Firebase
  const fetchBestSellerBrands = async () => {
    try {
      const q = query(
        collection(db, 'brands'), 
        orderBy('sales', 'desc'), 
        limit(5)  // Limit to top 5 best-seller brands
      );
      const querySnapshot = await getDocs(q);
      const brands = querySnapshot.docs.map(doc => doc.data());
      setBestSellerBrands(brands);
    } catch (error) {
      console.error('Error fetching best seller brands:', error);
    }
  };

  // Fetch categories on search query
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    try {
      const q = query(
        collection(db, 'categories'),
        where('name', '>=', searchQuery),
        where('name', '<=', searchQuery + '\\uf8ff')
      );

      const querySnapshot = await getDocs(q);
      const results = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      setSearchResults(results);
    } catch (error) {
      console.error('Error searching Firebase:', error);
    }
  };

  useEffect(() => {
    fetchBestSellerBrands(); // Fetch best sellers when the component mounts
  }, []);

  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
             <img src={logo} alt="Logo" style={{ width: '150px', height: 'auto' }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Products</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Best Seller Brands
                </a>
                <ul className="dropdown-menu">
                  {bestSellerBrands.length > 0 ? (
                    bestSellerBrands.map((brand, index) => (
                      <li key={index}>
                        <a className="dropdown-item" href={`/brand/${brand.name}`}>
                          {brand.name}
                        </a>
                      </li>
                    ))
                  ) : (
                    <li><a className="dropdown-item" href="#">No brands available</a></li>
                  )}
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="search-results">
        {searchResults.length > 0 && (
          <ul>
            {searchResults.map(result => (
              <li key={result.id}>{result.name}</li> // Customize based on your data structure
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
