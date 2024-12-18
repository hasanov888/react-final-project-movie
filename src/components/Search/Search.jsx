import React, { useState } from "react";

function Search({ getData }) {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "Aksiyon",
    "Komediya",
    "Dram",
    "Qorxu,Dəhşət",
    "Romantika",
    "Elmi fantastika",
    "Triller",
  ];

  const handleSearch = () => {
    getData(searchValue, selectedCategory);
  };

  return (
    <div className="search">
      <div className="search-input">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Filmin adını yazın..."
        />
        <button onClick={handleSearch}>Axtar</button>
      </div>
      
      {}
      <div className="category-selector">
        <span>Kateqoriya Seçin:</span>
        <div className="categories">
          {categories.map((category, index) => (
            <button
              key={index}
              className={selectedCategory === category ? "selected" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
