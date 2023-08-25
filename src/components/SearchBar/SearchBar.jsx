import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";
import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import fetchProducts from "../../api/fetchProducts";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const { setProducts, setLoading } = useContext(AppContext);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);

    setProducts(products);
    setLoading(false);
    setSearchValue('');
  }

  return (
    <form className="search-bar" onSubmit={handleSearch}>
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
