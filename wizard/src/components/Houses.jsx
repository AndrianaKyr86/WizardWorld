//This is the component that displays the houses of Hogwarts on landing page
//and it is connected on the App.jsx file
import "./Houses.css";

export default function Houses() {
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
            Slytherin values ambition, cunning, leadership, and resourcefulness.
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
