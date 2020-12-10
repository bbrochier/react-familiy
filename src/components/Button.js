import React from "react";
import "./Button.css";

const Button = ({ viellir, membre, annee }) => {
  return (
    <button onClick={viellir}>
      Vieillir {membre} de {annee} ans
    </button>
  );
};

export default Button;
