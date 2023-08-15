import cardimg1 from "../Assets/pancakes-g6dc607e5a_640.jpg";
import cardimg2 from "../Assets/asparagus-gd32dbfd03_640.jpg";
import cardimg3 from "../Assets/pasta-gd1d70423c_640.jpg";
import { Link } from "react-router-dom"; //you need this to creat the nav-bar you also made some changes in index.js
import Specialcard from "./Specialcard";
function Specials() {
  return (
    <section className="sepecialsection">
      <div className="specialtext">
        <h1>Specials</h1>
        <div className="specialbtn">
          <Link to='./menu'>
            <button className="button" type="button">Menu</button>
          </Link>
        </div>
      </div>
      <div className="sepecialcolumns">
        <section className="specialitem">
          <Specialcard
            imageUrl={cardimg1}
            title="Delicious Dish"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum laoreet pharetra."
            price="12.99"
          />
        </section>
        <section className="specialitem">
          <Specialcard
            imageUrl={cardimg2}
            title="Delicious Dish"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum laoreet pharetra."
            price="12.99"
          />
        </section>
        <section className="specialitem">
          <Specialcard
            imageUrl={cardimg3}
            title="Delicious Dish"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum laoreet pharetra."
            price="12.99"
          />
        </section>
      </div>
    </section>
  );
};

export default Specials;