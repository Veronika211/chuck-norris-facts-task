import { FactText, SingleFactContainer, StyledLink } from "./SingleFact.styles";

const SingleFact = ({ fact, previousSearches }) => {
  const handleClick = () => {
    const isInArray = previousSearches.find((el) => el.id === fact.id);
    if (isInArray) return;
    const updatedArray = [fact, ...previousSearches].slice(0, 10);
    localStorage.setItem("previousSearches", JSON.stringify(updatedArray));
  };

  return (
    <SingleFactContainer>
      <FactText>{fact.value}</FactText>
      <StyledLink to={`/fact/${fact.id}`} onClick={handleClick}>
        Details
      </StyledLink>
    </SingleFactContainer>
  );
};

export default SingleFact;
