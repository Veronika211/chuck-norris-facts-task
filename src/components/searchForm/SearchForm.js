import {
  SearchInput,
  HelperText,
  SearchFormContainer,
  SearchIcon,
} from "./SearchForm.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchForm = ({ keyword, setKeyword }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <SearchFormContainer>
      <form onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          value={keyword}
          onChange={handleChange}
          placeholder="Search"
        />
        <SearchIcon>
          <FontAwesomeIcon icon={faSearch} />
        </SearchIcon>
        <HelperText>* Minimum 3 characters required for search.</HelperText>
      </form>
    </SearchFormContainer>
  );
};

export default SearchForm;
