import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  let [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("")
      .then((response) => response.json())
      .then((data) => {
        setHouses(data);
      });
  }, []);

  function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <span className="navbar-toggler-icon">
            <a className="nav-link" href="#">
              Home
            </a>
          </span>
          <span className="navbar-text mx-3">
            <a className="nav-link" href="#">
              Houses
            </a>
          </span>
          <span className="navbar-text mx-3">
            <a className="nav-link" href="#">
              Spells
            </a>
          </span>
          <span className="navbar-text mx-3">
            <a className="nav-link" href="#">
              Potions
            </a>
          </span>
        </div>
      </nav>
    );
  }

  // I want to insert four images of the four houses here
  //when I click on the image, I want to display the house name, and description of the house
  //I want to display the house name and description in a card and there should be a buttton to click to take you to the page Houses.jsx
  //I need to import the Houses.jsx file

  function Houses() {
    return (
      <div className="houses">
        <div className="card">
          <img
            className="HouseImage" //I cannot resize the image in css
            src="https://media.minalima.com/2019/02/option-1-gallery-02-gryffindor-house-crest-poster-scaled-1300x1300.jpg"
          />
          <div className="card-body">
            <h5 className="card-title">Gryffindor</h5>
            <p className="card-text">
              Gryffindor values courage, bravery, nerve, and chivalry.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="HouseImage"
            src="https://media.minalima.com/2019/03/option-1-gallery-02-slytherin-house-crest-poster-scaled-1300x1300.jpg"
          />
          <div className="card-body">
            <h5 className="card-title">Slytherin</h5>
            <p className="card-text">
              Slytherin values ambition, cunning, leadership, and
              resourcefulness.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="HouseImage"
            src="https://media.minalima.com/2019/02/option-1-gallery-02-hufflepuff-house-crest-poster-scaled-1300x1300.jpg"
          />
          <div className="card-body">
            <h5 className="card-title">Hufflepuff</h5>
            <p className="card-text">
              Hufflepuff values hard work, patience, justice, and loyalty.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="HouseImage"
            src="https://media.minalima.com/2019/02/option-1-gallery-02-ravenclaw-house-crest-poster-scaled-1300x1300.jpg"
          />
          <div className="card-body">
            <h5 className="card-title">Ravenclaw</h5>
            <p className="card-text">
              Ravenclaw values intelligence, creativity, learning, and wit.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="paragraph">
        <p>
          Welcome to Wizard World, the ultimate destination for aspiring witches
          and wizards! Step inside and prepare to embark on an unforgettable
          journey through the halls of Hogwarts School of Witchcraft and
          Wizardry.
        </p>
        <p>
          Get to know your fellow classmates and immerse yourself in the world
          of Hogwarts. Learn all about the most famous witches and wizards from
          each house, and discover their unique traits and accomplishments.
          Whether you're a brave Gryffindor, a cunning Slytherin, a loyal
          Hufflepuff, or a clever Ravenclaw, you'll find plenty of inspiration
          and insight into the magic of the wizarding world.{" "}
        </p>
        <p>
          And speaking of spells and potions, you won't want to miss our
          comprehensive collection of magical recipes and incantations. From
          beginner's charms to advanced hexes, our library has everything you
          need to master the art of wizardry. Unleash your inner magic and
          explore the vast collection of spells and potions at your fingertips.{" "}
        </p>
        <p>
          Join us on a journey of discovery and exploration as we delve into the
          rich history and lore of Hogwarts. You'll have the opportunity to
          learn about the characters and stories that have captured the hearts
          and imaginations of fans all over the world. From the daring exploits
          of Harry Potter to the legendary achievements of Albus Dumbledore,
          there's something for everyone to enjoy.
        </p>
        <p>
          So come along and explore the wonders of Wizard World! You never know
          what amazing discoveries and adventures lie ahead.
        </p>
      </div>
      <Houses />
    </div>
  );
}
