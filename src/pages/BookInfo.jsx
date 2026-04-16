import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import Book from "../components/ui/Book";

const BookInfo = ({ books, addToCart, cart }) => {
  const { id } = useParams();
  const book = books.find((b) => +b.id === +id);
  const { title, url, hardcoverPrice, paperbackPrice, rating } = book;

  function addBookToCart(book) {
    addToCart(book);
  }

  function bookExistsInCart() {
    return cart.find(b => +b.id === +id);
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={url} alt={title} className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{title}</h2>
                <Rating rating={rating} />
                <div className="book__selected--price">
                  <Price
                    hardcoverPrice={hardcoverPrice}
                    paperbackPrice={paperbackPrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    The Very Hungry Caterpillar is a classic children's book
                    that tells the story of a caterpillar's transformation into
                    a butterfly. The book follows the caterpillar as it eats its
                    way through various foods, including fruits, sweets, and
                    even a slice of cake. As the caterpillar eats, it grows
                    bigger and bigger until it eventually forms a cocoon and
                    emerges as a beautiful butterfly. The book is known for its
                    colorful illustrations and simple, repetitive text that
                    makes it easy for young children to understand and enjoy.
                  </p>
                  <p className="book__summary--para">
                    The story is often used to teach children about the life
                    cycle of a butterfly, as well as concepts such as counting
                    and days of the week. The book has been translated into many
                    languages and has sold millions of copies worldwide since
                    its publication in 1969. It is considered a beloved classic
                    in children's literature and continues to be popular with
                    young readers today.
                  </p>
                </div>
                {bookExistsInCart() ? (
                  <Link to={`/cart`}>
                    <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addBookToCart(book)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
