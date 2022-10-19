import React, { useState } from "react";

const Tour = ({ item, deleteTour }) => {
  const [read, setRead] = useState(false);
  const { image, info, name, price, id } = item;

  return (
    <section className="single-tour">
      <img src={image} alt="" />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {read ? info : `${info.substring(0, 175)}...`}{" "}
          <button onClick={() => setRead(!read)}>
            {read ? "show less" : "read more"}
          </button>
        </p>
        <button onClick={() => deleteTour(id)} className="delete-btn">
          Not Interested
        </button>
      </footer>
    </section>
  );
};

export default Tour;
