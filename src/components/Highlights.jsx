import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";

function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="orange">Library</span>
          </h2>
          <div className="highlight__wrapper">
             <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Fast and Easy"
              description="Get access to the book you purchased online instantly." />
            <Highlight
              icon={<FontAwesomeIcon icon="book-open" />}
              title="Wide Selection"
              description="Explore our extensive collection of kid friendly books across various genres." />
            <Highlight
              icon={<FontAwesomeIcon icon="tag" />}
              title="Affordable Prices"
              description="Get your favorite books at the best prices in the market." />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
