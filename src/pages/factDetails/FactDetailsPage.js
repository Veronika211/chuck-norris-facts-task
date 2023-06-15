import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FactContext } from "../../store/FactContext";
import checkIfImageIsValid from "../../utils";
import icon from "../../assets/icons/chuck-norris.png";
import Loader from "../../components/ui/loader/Loader";
import { FactDetailsContainer } from "./FactDetailsPage.styles";

const FactDetailsPage = () => {
  const { id } = useParams();
  const { facts } = useContext(FactContext);
  const [iconUrl, setIconUrl] = useState(icon);
  const [loading, setLoading] = useState(true);
  const factDetails = facts.find((fact) => fact.id === id);

  useEffect(() => {
    const fetchIcon = async () => {
      const isValidIcon = await checkIfImageIsValid(factDetails.icon_url);
      if (isValidIcon) {
        setIconUrl(factDetails.icon_url);
      }
      setLoading(false);
    };

    fetchIcon();
  }, [factDetails]);

  if (!factDetails || loading) {
    return <Loader width={35} height={35} />;
  }

  return (
    <FactDetailsContainer>
      <h2>Fact Details</h2>
      <img src={iconUrl} alt="Chuck Norris Icon" width={60} height={60} />
      <p>{factDetails.value}</p>
    </FactDetailsContainer>
  );
};

export default FactDetailsPage;
