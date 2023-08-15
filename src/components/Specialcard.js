import { Link } from "react-router-dom"; //you need this to creat the nav-bar you also made some changes in index.js
import {FiPlusCircle} from "react-icons/fi"

function Specialcard({ imageUrl, title, description, price }) {
  return (
    <div className="specialcard">
      <div className="card-content">
        <div className="specialcard-image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="card-description">
          <div className="card-title-price">
            <h2>{title}</h2>
            <h3>{price}</h3>
          </div>
          <p>{description}</p>
          <div className="specialplusicon">
            <Link to='/order' class="read-more-link">
            Add to my order<FiPlusCircle size={25}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialcard;
