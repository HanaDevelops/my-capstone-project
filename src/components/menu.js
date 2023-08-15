import item1 from "../Assets/asparagus-gd32dbfd03_640.jpg";
import item2 from "../Assets/hamburger-geee37909a_640.jpg";
import item3 from "../Assets/meat-g41b48923f_640.jpg";
import item4 from "../Assets/greek salad pic 2.jpg";
import item5 from "../Assets/plate-ga44d69daa_640.jpg";
import item6 from "../Assets/pancakes-g6dc607e5a_640.jpg";
import Menucard from "./menucard";

function Menu() {
  return (
    <>
      <h1 className="page-title">Menu</h1>
      <div className="menulist">
        <section className="menuitem">
          <Menucard
            imageUrl={item1}
            title="Ribs"
            price="26.99"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum laoreet pharetra."
          />
        </section>
        <section className="menuitem">
          <Menucard
            imageUrl={item2}
            title="Burger"
            price="18.99"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum laoreet pharetra."
          />
        </section>
        <section className="menuitem">
          <Menucard
            imageUrl={item3}
            title="Beef Steak"
            price="30.99"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum laoreet pharetra."
          />
        </section>
        <section className="menuitem">
          <Menucard
            imageUrl={item4}
            title="Greek Salad"
            price="9.99"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum laoreet pharetra."
          />
        </section>
        <section className="menuitem">
          <Menucard
            imageUrl={item5}
            title="Pizza"
            price="22.99"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum laoreet pharetra."
          />
        </section>
        <section className="menuitem">
          <Menucard
            imageUrl={item6}
            title="Pancakes"
            price="10.99"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum laoreet pharetra."
          />
        </section>
      </div>
    </>
  );
};

export default Menu;