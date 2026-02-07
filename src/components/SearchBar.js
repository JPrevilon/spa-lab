function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search projects..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

export default SearchBar;
