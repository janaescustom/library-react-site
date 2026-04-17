
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data.js";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import ScrollToTop from "./components/ScrollToTop.jsx";

import React, { useEffect, useState } from "react";


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error boundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

// Usage in your App component
function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity({ book, quantity }) {
    setCart(
      cart.map((b) => {
        return b.id === book.id
          ? {
              ...b,
              quantity: +quantity,
            }
          : b;
      }),
    );
  }

  function removeItem(item) {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  }

  function getTotalItemsInCart() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }

  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  return (
    <Router>
      <Nav numberOfItems={getTotalItemsInCart()} />
      <ErrorBoundary>
          <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={
              <BookInfo books={books} addToCart={addToCart} cart={cart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />
            }
          />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </Router>
  );
}

export default App;
