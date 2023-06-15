import React, { useEffect, useState } from "react";
import SearchForm from "../../components/searchForm/SearchForm";
import {
  useRandomFact,
  useSearchFactsByKeyword,
} from "../../api/chuckNorrisApi";
import PreviousSearchesList from "../../components/previousSearchesList/PreviousSearchesList";
import SingleFact from "../../components/singleFact/SingleFact";
import { FactContext } from "../../store/FactContext";
import Loader from "../../components/ui/loader/Loader";
import Button from "../../components/ui/button/Button";
import { LandingPageConatiner } from "./LandingPage.styles";
import RandomFact from "../../components/randomFact/RandomFact";

const LandingPage = () => {
  const [keyword, setKeyword] = React.useState("");
  const { updateFacts } = React.useContext(FactContext);
  const [previousSearches, setPreviousSearches] = useState([]);
  const [loadMoreCount, setLoadMoreCount] = useState(5);

  useEffect(() => {
    const storedSearches = localStorage.getItem("previousSearches");
    if (storedSearches) {
      setPreviousSearches(JSON.parse(storedSearches));
    }
  }, []);

  const { data: searchResults, isLoading: isLoadingSearch } =
    useSearchFactsByKeyword(keyword);
  const { data: randomFact } = useRandomFact();

  useEffect(() => {
    if (searchResults) {
      updateFacts(searchResults);
    }
  }, [searchResults, updateFacts, loadMoreCount]);

  const handleLoadMore = () => {
    setLoadMoreCount((prevCount) => prevCount + 5);
  };

  const renderSearchResults = () => {
    if (isLoadingSearch) {
      return <Loader width={35} height={35} />;
    }

    if (searchResults?.length > 0) {
      return (
        <div>
          <h2>Search Results:</h2>
          {searchResults.slice(0, loadMoreCount).map((fact) => (
            <SingleFact
              key={fact.id}
              fact={fact}
              previousSearches={previousSearches}
            />
          ))}
          {loadMoreCount < searchResults.length && (
            <Button
              onClick={handleLoadMore}
              width={120}
              height={40}
              type="outlined"
            >
              Load More
            </Button>
          )}
        </div>
      );
    }

    if (keyword.length >= 3) {
      return <p>No results found for "{keyword}"</p>;
    }

    return null;
  };

  const renderPreviousSearches = () => {
    return (
      <div>
        {previousSearches?.length > 0 ? (
          <PreviousSearchesList
            previousSearches={previousSearches}
            setPreviousSearches={setPreviousSearches}
          />
        ) : randomFact ? (
          <RandomFact randomFactText={randomFact.value} />
        ) : (
          <p>No previous searches found.</p>
        )}
      </div>
    );
  };

  return (
    <LandingPageConatiner>
      <h1>Chuck Norris Facts</h1>
      <SearchForm keyword={keyword} setKeyword={setKeyword} />
      <div>{renderSearchResults()}</div>
      <div>{renderPreviousSearches()}</div>
    </LandingPageConatiner>
  );
};
export default LandingPage;
