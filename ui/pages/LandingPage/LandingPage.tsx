import Navbar from "../NavBar/NavBar";
import "./LandingPage.css";
import pokeball from "../../images/images.jpeg";
import pokeballIcon from "../../images/pokeball.png";
import logo from "../../images/logo.svg";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [userExist, setUserExist] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserExist(true);
    }
  }, []);
  return (
    <div className="landing-page">
      <Navbar />
      <header className="header">
        <h1>Welcome to your Pokedex App</h1>
      </header>
      <div className="main-content">
        <div className="text-container">
          <p>
            This is you Pokedex App, the place to search, found, and catch all
            your pokemons, like Ash, if you wan't to be the very best, you gotta
            catch 'em all.
          </p>
          <img src={logo} alt="Pokemon logol" className="pokemon-image" />
        </div>
        <div className="image-container">
          <img
            src={pokeball}
            alt="Pokemones y Masterball"
            className="pokemon-image"
          />
        </div>
      </div>
      {!userExist && (
        <div className="button-container">
          <p>To start your adventure, let's register first:</p>
          <button className="register-button">
            <a href="./home">Click here to login</a>
          </button>
          <img src={pokeballIcon} alt="Pokemones" className="pokeball-icon" />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
