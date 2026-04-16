import React from "react";
import Book from "./ui/Book";
import { books } from "../data";

const Discounted = () => {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discounted <span className="orange">Books</span>
          </h2>
          <div className="books">
            {books
              .filter((book) => book.hardcoverPrice && book.paperbackPrice)
              .slice(0, 8)
              .map((book) => {
                return (
                  <Book key={book.id} book={book}  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;
