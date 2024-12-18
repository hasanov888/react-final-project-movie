import React, { useState } from "react";

function List({ list, setList, setBasketActive, basket, setBasket }) {
  const [active, setActive] = useState(false);
  const [listName, setListName] = useState("");
  const removeFromList = (id) => {
    const filteredList = list.filter((item, index) => index !== id);
    setList(filteredList);
  };

  const addToBasket = () => {
    setBasket({
      ...basket,
      title: listName,
      orders: [...list],
    });
    setList([]);
    setListName("");
  };

  return (
    <div className="list-container">
      <input
        type="text"
        placeholder="Yeni siyahı yaradın"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        className="list-input"
      />
      {list.map((listItem, index) => (
        <div key={index} className="list-item">
          <p className="list-item-title">{listItem.title}</p>
          <button className="remove-item-button" onClick={() => removeFromList(index)}>✖</button>
        </div>
      ))}
      <div className="list-action-buttons">
        <button
          className="save-button"
          disabled={listName.length > 0 && list.length ? false : true}
          onClick={() => {
            setActive(!active);
            addToBasket();
          }}
        >
        Saxla
        </button>
        <button className="go-to-basket-button" onClick={() => setBasketActive(true)}>
        Səbətə gedin 
        </button>
      </div>
    </div>

  );
}

export default List;
