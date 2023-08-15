import testiimg1 from "../Assets/boy profile pic.jpg";
import testiimg2 from "../Assets/old lady profile pic.jpg";
import testiimg3 from "../Assets/young black lady profile pic.jpg";
import testiimg4 from "../Assets/young asian boy profile pic.jpg";

function Testimonials() {
  return (
    <section className="testisection full-width">
      <div className="testimonial-title"><h1>Testimonials</h1></div>
      <div className="testimonials">
      <div className="testimonial-card">
        <div className="star-rating">
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
        </div>
        <div className="review">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel mauris nisl. Sed eu quam aliquet, tincidunt erat in, efficitur enim.</p>
        </div>
        <div className="customer-info">
          <div className="customer-image">
          <img src={testiimg1} alt="this is a test image" height={100} />
          </div>
          <div className="customer-details">
            <h3 className="customer-name">John Doe</h3>
            <p className="customer-location">New York, USA</p>
          </div>
        </div>
      </div>
      <div className="testimonial-card">
        <div className="star-rating">
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
        </div>
        <div className="review">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel mauris nisl. Sed eu quam aliquet, tincidunt erat in, efficitur enim.</p>
        </div>
        <div className="customer-info">
          <div className="customer-image">
          <img src={testiimg2} alt="this is a test image" height={100} />
          </div>
          <div className="customer-details">
            <h3 className="customer-name">John Doe</h3>
            <p className="customer-location">New York, USA</p>
          </div>
        </div>
      </div>
      <div className="testimonial-card">
        <div className="star-rating">
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
        </div>
        <div className="review">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel mauris nisl. Sed eu quam aliquet, tincidunt erat in, efficitur enim.</p>
        </div>
        <div className="customer-info">
          <div className="customer-image">
          <img src={testiimg3} alt="this is a test image" height={100} />
          </div>
          <div className="customer-details">
            <h3 className="customer-name">John Doe</h3>
            <p className="customer-location">New York, USA</p>
          </div>
        </div>
      </div>
      <div className="testimonial-card">
        <div className="star-rating">
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
        </div>
        <div className="review">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel mauris nisl. Sed eu quam aliquet, tincidunt erat in, efficitur enim.</p>
        </div>
        <div className="customer-info">
          <div className="customer-image">
          <img src={testiimg4} alt="this is a test image" height={100} />
          </div>
          <div className="customer-details">
            <h3 className="customer-name">John Doe</h3>
            <p className="customer-location">New York, USA</p>
          </div>
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default Testimonials;