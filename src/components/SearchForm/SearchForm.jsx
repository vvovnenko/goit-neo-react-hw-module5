import styles from "./SearchForm.module.css";

const SearchForm = ({ handleSearchMovie }) => {
  const onHandleSubmit = (event) => {
    event.preventDefault();
    handleSearchMovie({ query: event.target.elements.query.value });
    event.target.reset();
  };

  return (
    <form className={styles.searchForm} onSubmit={onHandleSubmit}>
      <input
        className={styles.searchInput}
        type="search"
        name="query"
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
