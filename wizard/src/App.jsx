import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import Houses from "./components/Houses";
import hogwards from "./hogwards.js";

export default function App() {
  let [houseName, setHouseName] = useState("");

  //filter the hogward and for every item should match the house name and save it.
  //To show it on ie a card/featured create the card and use the filteredArray[0] to show the info
  let filteredArray = hogwards.filter((i) => i.name === houseName);
  console.log(filteredArray);

  // I need a function called sorting hat that will randomly assign a house to the user when they click on the button
  function sortingHat() {
    let houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
    let randomHouse = houses[Math.floor(Math.random() * houses.length)];
    return randomHouse;
  }

  // I want to insert four images of the four houses here
  //when I click on the image, I want to display the house name, and description of the house
  //I want to display the house name and description in a card and there should be a buttton to click to take you to the page Houses.jsx
  //I need to import the Houses.jsx file

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
      //I want a button that will randomly assign a house to the user when they
      click on the button and the result appears below the button in a card
      according to the house they belong from the function Houses above //
      <button
        className="btn btn-primary"
        onClick={() => {
          setHouseName(sortingHat());
        }}
      >
        Click here to find out which house you belong to!
      </button>
      {houseName}
      {/* //Now that I have the house name and the filteredArray[0] I want to display the house name and the description of the house in a card// */}
      <div className="card" style={{ width: "18rem" }}>
        {/* <img /> //I want to insert the image of the house here according to the
        filteredArray[0]// */}
        <div className="card-body">
          <h5 className="card-title">{houseName}</h5>
          <p className="card-text">{filteredArray[0].name}</p>
          <p className="card-text">{filteredArray[0].description}</p>
          <p className="card-text">{filteredArray[0].founder}</p>
          <p className="card-text">{filteredArray[0].commonRoom}</p>
          <p className="card-text">{filteredArray[0].password}</p>
          <p className="card-text">{filteredArray[0].mascot}</p>
          <p className="card-text">{filteredArray[0].headOfHouse}</p>
          <p className="card-text">{filteredArray[0].houseGhost}</p>
          <p className="card-text">{filteredArray[0].colors}</p>
          <p className="card-text">{filteredArray[0].element}</p>
          <p className="card-text">{filteredArray[0].traits}</p>
        </div>
        {/* //I want to display a card with the house name and use the
      filteredArray[0] to show the info only once the button is clicked and the
      sorting hat function is run// */}
      </div>
    </div>
  );
}
