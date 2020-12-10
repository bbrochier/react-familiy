import React, { Fragment } from "react";

const Membre = ({ nom, age, cacherNom, changerNom, children }) => {
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
      <input
        type="text"
        value={nom}
        onChange={changerNom}
      />
      <button onClick={cacherNom}>x</button>
      {children ? <p>{children}</p> : <Fragment />}
    </Fragment>
  );
};

export default Membre;
