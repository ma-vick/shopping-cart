import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";
import { useState } from "react";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <form className="search-bar">
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        onChange={ ({ target }) => setSearchValue(target.value) }
        className="search-input"
        required
      />
      <button type="submit" className="search-btn">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
