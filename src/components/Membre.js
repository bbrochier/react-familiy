import React, { Fragment } from "react";

const Membre = ({ nom, age, cacherNom, children }) => {
  return (
    <Fragment>
      <h2
        style={{
          backgroundColor: age < 10 ? "purple" : "orange",
          color: "white"
        }}
      >
        {nom.toUpperCase()} : {age} ans
      </h2>
      <button onClick={cacherNom}>x</button>
      {children ? <p>{children}</p> : <Fragment />}
    </Fragment>
  );
};

export default Membre;
