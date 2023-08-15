import aboutimage1 from "../Assets/Mario and Adrian A.jpg";
import aboutimage2 from "../Assets/Mario and Adrian b.jpg";
import { Link } from "react-router-dom"; //you need this to creat the nav-bar you also made some changes in index.js

function About() {
    return (
        <section className="aboutsection">
            <div className="aboutext">
                <h1>Little lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum laoreet pharetra. Morbi eros odio, consequat commodo pretium vitae, porta.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum laoreet pharetra. Morbi eros odio, consequat commodo pretium vitae, porta.</p>
                <Link to='/booking'>
                    <button className="button" type="button">Reserve a table</button>
                </Link>
            </div>
            <div class="image-stack">
                <div class="image-stack__item image-stack-bottom">
                    <img src={aboutimage1} />
                </div>
                <div class="image-stack__item image-stack-top">
                    <img src={aboutimage2} />
                </div>
            </div>

        </section>
    );
};

export default About;