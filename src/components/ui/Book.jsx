import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

const Book = ({ book }) => {
  const { title, url, hardcoverPrice, paperbackPrice, rating, id } = book;

  const [img, setImage] = useState([]);

  const mountedRef = useRef(true)

  useEffect(() => {
    const image = new Image();
    image.src = url;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImage(image);
        }
      }, 300);
      return () => {
        mountedRef.current = false;
      }
    }})

  return (
    <div className="book">
      { img ? (
      <>
      <Link to={`/books/${id}`}>
        <figure className="book__img--wrapper">
          <img className="book__img" src={url} alt={title} />
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${id}`} className="book__title--link">
          {title}
        </Link>
      </div>
      <Rating rating={rating} />
      <Price hardcoverPrice={hardcoverPrice} paperbackPrice={paperbackPrice} />
      </>
       ) : (
        <>
      <div className="book__img--skeleton"></div>
      <div className="skeleton book__title--skeleton"></div>
      <div className="skeleton book__rating--skeleton"></div>
      <div className="skeleton book__price--skeleton"></div>
        </>
      
    )
  }
  </div>
  );
}

export default Book;