import { Link } from "react-router-dom"; //you need this to creat the nav-bar you also made some changes in index.js
import {FiPlusCircle} from "react-icons/fi"
function Menucard({ imageUrl, title, price, description }) {
  return (
    <div className="menucard">
      <div className="card-content">
        <div className="card-image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="card-text">
          <h2>{title}</h2>
          <h3>{price}</h3>
        </div>
        <p>{description}</p>
        <Link to='/order' class="read-more-link">
          Add to my order<FiPlusCircle size={25}/>
        </Link>
    </div>
    </div >
  );
};

export default Menucard;
