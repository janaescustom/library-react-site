// import { books } from '../data.js'
import React, { useState } from 'react';
import Book from '../components/ui/Book';

const Books = ({ books : initialBooks }) => {
    const [books, setBooks] = useState(initialBooks);
    // console.log(books);
    
    const createPriceArray = () => {
    return books.map(book => {
      const lowestPrice = Math.min(
        book.hardcoverPrice || Infinity, // If hardcoverPrice is null, treat it as Infinity
        book.paperbackPrice || Infinity   // If paperbackPrice is null, treat it as Infinity
      );
      return { ...book, lowestPrice }; // Return the book object with the lowest price
    });
  };

  function filterBooks(filter) {
    let sortedBooks;
    
    if (filter === "LOW_TO_HIGH") {
      const priceArray = createPriceArray();
      sortedBooks = priceArray.sort((a, b) => a.lowestPrice - b.lowestPrice);
    } else if (filter === "HIGH_TO_LOW") {
      const priceArray = createPriceArray();
      sortedBooks = priceArray.sort((a, b) => b.lowestPrice - a.lowestPrice);
    } else if (filter === "RATING") {
      sortedBooks = [...books].sort((a, b) => b.rating - a.rating);
    }
    
    setBooks(sortedBooks);
  }


    return (
        <div id="books__body">
            <main id="books__main">
                <section>
                    <div className="books__container">
                        <div className="row">
                            <div className="books__header">
                                <h2 className='section__title books__header--title'>All Books</h2>
                                <select id="filter" defaultValue="DEFAULT" onChange={(e) => filterBooks(e.target.value)}>
                                    <option value="DEFAULT"  disabled>Sort</option>
                                    <option value="LOW_TO_HIGH">Price: Low to High</option>
                                    <option value="HIGH_TO_LOW">Price: High to Low</option>
                                    <option value="RATING">Rating</option>
                                </select>
                            </div>
                            <div className="books">
                                {books.map((book) => (
                                    <Book key={book.id} book={book} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Books;