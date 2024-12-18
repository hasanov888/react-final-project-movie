import React from "react";
import { Link } from "react-router-dom";

function Basket({ basket, setBasketActive }) {
  return (
    <div className="basket-wrapper">
      <div className="basket-main-container">
        <h1 className="basket-title">Səbət</h1>
        <div className="basket-list">
          <div className="basket-list-item">
            {basket.orders ? (
              <>
                <h1 className="basket-list-name">Siyahı adı: {basket.title}</h1>
                <div className="basket-items">
                  {basket.orders.map((item, index) => (
                    <div key={index} className="basket-item">
                      <Link
                        target="_blank"
                        to={`https://www.themoviedb.org/movie/${item.id}`}
                        className="basket-item-link"
                      >
                        <img
                          src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                          alt={`${item.title} Poster`}
                          className="basket-item-image"
                        />
                      </Link>
                      <div className="basket-item-details">
                        <p className="basket-item-title">{item.title}</p>
                        <span className="basket-item-year">
                          İl: {item.release_date.slice(0, 4)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="basket-empty-message">Heç bir maddə yoxdur</div>
            )}
          </div>
        </div>
        <button onClick={() => setBasketActive(false)} className="back-button">
        Geri
        </button>
      </div>
    </div>

  );
}

export default Basket;
