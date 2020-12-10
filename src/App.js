import React, { Component, Fragment } from "react";
import "./App.css";
import Membre from "./components/Membre";
import Button from "./components/Button";

const famille = {
  membre1: {
    nom: "Benoit",
    age: 39
  },
  membre2: {
    nom: "Satoko",
    age: 41
  },
  membre3: {
    nom: "Tsubaki",
    age: 6
  },
  membre4: {
    nom: "Koyuki",
    age: 5
  }
};

class App extends Component {
  state = {
    famille,
    ageIncrement: 3,
    quoteIsShown: false
  };

  handleClick = (num) => {
    //copie du state
    const famille = { ...this.state.famille };
    //apport des modifications
    famille.membre1.age += num;
    //mise a jour du state
    this.setState({ famille });
  };

  handleCacher = (membre) => {
    const famille = { ...this.state.famille };
    famille[membre].nom = 'x';
    this.setState({ famille });
  };

  handleChange = (event, membre) => {
    //copie du state
    const famille = { ...this.state.famille };
    //apport des modifications
    const nom = event.target.value;
    famille[membre].nom = nom;
    //mise a jour du state
    this.setState({ famille });
  };

  handleShowQuote = () => {
    const quoteIsShown = !this.state.quoteIsShown;
    this.setState({ quoteIsShown });
  };

  handleIncrement = (event) => {
    //apport des modifications
    const ageIncrement = Number(event.target.value);
    //mise a jour du state
    this.setState({ ageIncrement });
  };

  render() {
    const { titre } = this.props;
    const { famille, ageIncrement, quoteIsShown } = this.state;
    
    let quote = null;
    if (quoteIsShown) {
      quote = ( // () et <Fragment> si plusieur lignes et noeuds
        <Fragment>
          Je suis une <strong>princesse </strong>
        </Fragment>
      );
    }

    const liste = Object.keys(famille)
    .map((membre) => (
      <Membre
        key={membre} 
        nom={famille[membre].nom} 
        age={famille[membre].age}
        cacherNom={() => this.handleCacher(membre)}
        changerNom={(event) => this.handleChange(event, membre)}
      /> 
    ))

    return (
      <Fragment>
        <div className="App">
          <h1>{titre}</h1>
          <input
            type="number"
            value={ageIncrement}
            onChange={this.handleIncrement}
          />
          <Button
            membre={famille.membre1.nom}
            annee={ageIncrement}
            viellir={() => this.handleClick(ageIncrement)}
          />
          {liste}
          <Membre 
            nom={famille.membre4.nom} 
            age={famille.membre4.age}
            cacherNom={() => this.handleCacher('membre4')}
            changerNom={(event) => this.handleChange(event, 'membre4')}
          >
            {quote}
            <button onClick={this.handleShowQuote}>
              {quoteIsShown ? "Cacher" : "Montrer"}
            </button>
          </Membre>
        </div>
      </Fragment>
    );
  }
}

export default App;
