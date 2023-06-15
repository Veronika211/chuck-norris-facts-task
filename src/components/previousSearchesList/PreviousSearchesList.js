import Button from "../ui/button/Button";
import { PreviousSearchesContainer } from "./PreviousSearchesList.styles";

const PreviousSearchesList = ({ previousSearches, setPreviousSearches }) => {
  const clearHistory = () => {
    setPreviousSearches([]);
    localStorage.removeItem("previousSearches");
  };
  return (
    <PreviousSearchesContainer>
      <h2>Previous Searches</h2>
      {previousSearches?.map((fact) => (
        <p key={fact.id}>{fact.value}</p>
      ))}
      <Button width={120} height={40} type="outlined" onClick={clearHistory}>
        Clear
      </Button>
    </PreviousSearchesContainer>
  );
};

export default PreviousSearchesList;
