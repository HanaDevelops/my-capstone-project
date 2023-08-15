import descimage from "../Assets/restaurant chef B.jpg";
import { Link } from "react-router-dom"; //you need this to creat the nav-bar you also made some changes in index.js

function Description() {
  return (
    <section className="descsection full-width">
      <div className="desctext">
        <h1>REAL FOOD MEETS REAL DRINKS</h1>
        <p>Introducing new organic lemonades, Aguas frescas, and black tea to pair with all your favorite meals for delivery or pickup.</p>
        <Link to='./order' >
          <button className="button calltoaction" type="button">Order Now</button>
        </Link>
      </div>
      <div className="descimg">
          <img src={descimage} alt="this is a test image" height={45} />
      </div>
    </section>
  );
};

export default Description;