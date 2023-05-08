// here I want to create an array of objects that will be the houses.
// each object is the house and the properties are the description, founders, students, etc.
// this file will connect with the sorting hat function that is located in the App.jsx file.
//in the student array I want to have the students that are in the house that is in the file characters OR I want to use the API that is located
// here https://github.com/KostaSav/hp-api
//GET characters / students
//https://orange-equinox-201454.postman.co/workspace/0034e3b0-0f99-4a6e-8e10-5ede864bce70/request/26941194-0391a5c8-48d5-4f4a-9d26-2ebe6795ffcd

let hogwarts = [
  {
    name: "Gryffindor",
    description:
      "Gryffindor valued bravery, daring, nerve, and chivalry. Its emblematic animal was the lion, its representative gemstone was rubies, and its colors were scarlet and gold. The founder of the House was Godric Gryffindor. Gryffindor corresponded to the element of fire. The common room was located in one of the highest towers at Hogwarts, the entrance was situated on the seventh floor in the east wing of the castle and was guarded by a portrait of The Fat Lady. She permitted entrance if given the correct password, which was changed numerous times throughout the school year. Famous Gryffindors included Albus Dumbledore, Harry Potter, and Minerva McGonagall. The significant object of Gryffindor was the Sword of Gryffindor. Their motto was 'Forti Animo Estote' which means 'Be of Brave Spirit'.",
    founder: "Godric Gryffindor",
    students: [],
    commonRoom: "Gryffindor Tower",
    password: "Gryffindor",
    mascot: "Lion",
    headOfHouse: "Minerva McGonagall",
    houseGhost: "Nearly Headless Nick",
    colors: "Scarlet and Gold",
    element: "Fire",
    traits: "Bravery, Nerve, Chivalry, Courage",
    image: "",
  },
  {
    name: "Hufflepuff",
    description:
      "Hufflepuff valued hard work, dedication, patience, loyalty, and fair play. Its emblematic animal was the badger,it's representative gemstone was yellow diamonds, and yellow and black were its colours. Pomona Sprout was the Head of Hufflepuff during 1991 - 1998, Sprout left the post of Head of Hufflepuff and Herbology Professor sometime before 2017 and her successor for the position of Head of Hufflepuff was currently unknown. The Fat Friar was its ghost. The founder of the House was Helga Hufflepuff.Hufflepuff corresponded to the element of earth. The Hufflepuff dormitories and common room were located somewhere in the basement, near the castle's kitchens. It could be accessed by tapping the barrel two from the bottom, middle of the second row in the rhythm of Helga Hufflepuff and was described as being a cosy and welcoming place with yellow hangings, fat armchairs, and underground tunnels that led to the dormitories, which had perfectly round doors, similar to barrel tops. Famous Hufflepuffs included Hengist of Woodcroft (founder of Hogsmeade), Newt Scamander (author of Fantastic Beasts and Where to Find Them), and Artemisia Lufkin (first female Minister for Magic). The significant object of Hufflepuff was Helga Hufflepuff's Cup, which was turned into a Horcrux by Tom Riddle.",
    founder: "Helga Hufflepuff",
    students: [],
    commonRoom: "Hufflepuff Basement",
    password: "Helga Hufflepuff rythm tapping",
    mascot: "Badger",
    headOfHouse: "Pomona Sprout",
    houseGhost: "Fat Friar",
    colors: "Yellow and Black",
    element: "Earth",
    traits: "Hard Work, Dedication, Patience, Loyalty, Fair Play",
    image: "",
  },
  {
    name: "Ravenclaw",
    description:
      "Ravenclaw valued intelligence, knowledge, curiosity, creativity and wit. Its emblematic animal was the eagle, it's representative gemstone was sapphires, and its colours were blue and bronze. The Ravenclaw Head of House in the 1990s was Filius Flitwick. The ghost of Ravenclaw was the Grey Lady, who was the daughter of Rowena Ravenclaw, the House's founder. Ravenclaw corresponded to the element of air. The Ravenclaw common room and dormitories were located in a tower on the west side of the castle. Ravenclaw students must answer a riddle as opposed to giving a password to enter their dormitories. This riddle, however, could be answered by non-Ravenclaws. Famous Ravenclaws included Luna Lovegood, Gilderoy Lockhart, Ignatia Wildsmith (inventor of Floo powder), and Garrick Ollivander. The significant object of Ravenclaw was Rowena Ravenclaw's diadem, which was turned into a Horcrux by Tom Riddle.",
    founder: "Rowena Ravenclaw",
    students: [],
    commonRoom: "Ravenclaw Tower",
    password: "Rowena Ravenclaw riddle",
    mascot: "Eagle",
    headOfHouse: "Filius Flitwick",
    houseGhost: "Grey Lady",
    colors: "Blue and Bronze",
    element: "Air",
    traits: "Intelligence, Knowledge, Curiosity, Creativity, Wit",
    image: "",
  },
  {
    name: "Slytherin",
    description:
      "Slytherin valued ambition, leadership, self-preservation, cunning and resourcefulness and was founded by Salazar Slytherin. Its emblematic animal was the serpent, it's representative gemstone was emeralds, and its colours were emerald green and silver. Professor Horace Slughorn was the Head of Slytherin during the 1997-1998 school year, replacing Severus Snape, who as well replaced Slughorn as Potions Professor when he retired for the first time several years prior. Slytherin had produced the most Death Eaters and Dark wizards, including Tom Riddle,Bellatrix Lestrange and Lucius Malfoy, for example. But that does not mean that other Houses hadn't produced any; Peter Pettigrew was a Gryffindor, and Quirinus Quirrell was a Ravenclaw.The Bloody Baron was the House ghost. The founder of the House was Salazar Slytherin. Slytherin corresponded roughly to the element of water. The Slytherin dormitories and common room were reached through a bare stone wall in the Dungeons. The Slytherin common room lay beneath the Black Lake. It was a long, low underground room with rough stone walls and silver lamps hanging from the ceiling. Famous Slytherins included Merlin, Tom Riddle, Draco Malfoy,and Dolores Umbridge. The significant object of Slytherin was Salazar Slytherin's locket, which was turned into a Horcrux by Tom Riddle.",
    founder: "Salazar Slytherin",
    students: [],
    commonRoom: "Slytherin Dungeon",
    password: "Salazar Slytherin",
    mascot: "Serpent",
    headOfHouse: "Severus Snape",
    houseGhost: "Bloody Baron",
    colors: "Green and Silver",
    element: "Water",
    traits: "Ambition, Leadership, Self-Preservation, Cunning, Resourcefulness",
    image: "",
  },
];
