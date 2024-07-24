import React, { useState } from "react";
import AboutUs from "./pages/AboutUs";
import ProductList from "./pages/ProductList";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };
  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? "fade-out" : ""}`}>
        <div className="background-image"></div>
        <div className="content">
          <div className="landing-content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>
            <button
              className="get-started-button"
              onClick={handleGetStartedClick}
            >
              Get Started
            </button>
          </div>
          <div className="about-us-container">
            <AboutUs />
          </div>
        </div>
      </div>

      <div
        className={`product-list-container ${showProductList ? "visible" : ""}`}
      >
        <ProductList />
      </div>
    </div>
  );
}

export default App;
