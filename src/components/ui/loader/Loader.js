import React from "react";
import { LoaderContainer, LoaderSpinner } from "./Loader.styles.js";

const Loader = ({ width, height }) => {
  return (
    <LoaderContainer>
      <LoaderSpinner width={width} height={height} />
    </LoaderContainer>
  );
};

export default Loader;
