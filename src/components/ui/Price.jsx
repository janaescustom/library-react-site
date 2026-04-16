import React from "react";

const Price = ({ hardcoverPrice, paperbackPrice }) => {
  return (
    <div className="book__price">
      {
        <>
          {/* if both prices exist, here's the higher */}
          {hardcoverPrice && paperbackPrice ? (
            <span className="book__price--normal">
              €{Math.max(hardcoverPrice, paperbackPrice).toFixed(2)}
            </span>
          ) : (
            <span>
              {/* if only one price exists */}€
              {(hardcoverPrice || paperbackPrice)?.toFixed(2)}
            </span>
          )}
          {/* if both prices exist, here's the lower */}
          {hardcoverPrice && paperbackPrice && (
            <span>€{Math.min(hardcoverPrice, paperbackPrice).toFixed(2)}</span>
          )}
        </>
      }
    </div>
  );
};

export default Price;
