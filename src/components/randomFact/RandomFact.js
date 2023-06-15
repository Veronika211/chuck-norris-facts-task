import { RandomFactConatiner } from "./RandomFact.styles";
const RandomFact = ({ randomFactText }) => {
  return (
    <RandomFactConatiner>
      <p>Here's a fun fact!</p>
      <p> {randomFactText}</p>
    </RandomFactConatiner>
  );
};

export default RandomFact;
