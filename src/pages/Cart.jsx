import React from "react";
import { Link } from "react-router-dom";
import Price from "../components/ui/Price";
import emptyBasket from "../assets/empty-basket.png";

const Cart = ({ cart, changeQuantity, removeItem }) => {

  const lowerPrice = (book) => {
    return Math.min(book.hardcoverPrice || Infinity, book.paperbackPrice || Infinity);
  }

  const total = () => {
    let counter = 0;
    cart.forEach((item) => {
      counter += lowerPrice(item) * item.quantity;
    })
    return counter.toFixed(2);
  };


  // function removeFromCart(book) {
  //   changeQuantity({ book, quantity: 0 });
  // }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((book) => {
                  return (
                    <div className="cart__item" key={book.id}>
                      <div className="cart__book">
                        <img
                          src={book.url}
                          className="cart__book--img"
                          alt={book.title}
                        />
                        <div className="cart__book--info">
                          <span className="cart__book--title">
                            {book.title}
                          </span>
                          <span className="cart__book--price">
                            <Price
                              hardcoverPrice={book.hardcoverPrice}
                              paperbackPrice={book.paperbackPrice}
                            />
                          </span>
                          <button className="cart__book--remove" onClick={() => removeItem(book)}>Remove</button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          value={book.quantity}
                          onChange={(e) =>
                            changeQuantity({ book, quantity: e.target.value })
                          }
                          type="number"
                          min={0}
                          max={99}
                          className="cart__input"
                        />
                      </div>
                      <div className="cart__total">
                        €
                        {( lowerPrice(book) * book.quantity).toFixed(
                          2,
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              {cart.length === 0 && (
                <div className="cart__empty">
                  <h2>You don't have any books in your cart yet!</h2>
                    <img src={emptyBasket} alt="" className="cart__empty--img" />
                  <Link to="/books">
                    <button className="btn">Browse Books</button>
                  </Link>
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div className="total">
              <div className="total__item total__sub-total">
                <span>Subtotal</span>
                <span>€{(total() * 0.9).toFixed(2)}</span>
              </div>
              <div className="total__item total__tax">
                <span>Tax</span>
                <span>€{(total() * 0.1).toFixed(2)}</span>
              </div>
              <div className="total__item total__price">
                <span>Total</span>
                <span>€{total()}</span>
              </div>
              <button
                className="btn btn__checkout no-cursor"
                onClick={() =>
                  alert(
                    "This is a demo. No actual checkout process will occur.",
                  )
                }
              >
                Proceed to Checkout
              </button>
            </div>)}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
