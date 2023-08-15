import { Link } from "react-router-dom"; //you need this to creat the nav-bar you also made some changes in index.js
import testimagename from "../Assets/Asset 16@4x.png";

function Nav() {
  return (
    <>
      <header>
        <div className="wrapper">
          <div className="logo">
            <Link to="/">
              <img src={testimagename} alt="this is a test image" height={45} />
            </Link>
          </div>
          <div className="navbar">
            <nav>
              <Link to='/' className='nav-item'>Home</Link>
              <Link to='/menu' className='nav-item'>Menu</Link>
              <Link to='/booking' className='nav-item'>Reservation</Link>
              <Link to='/order' className='nav-item'>Order online</Link>
              <Link to='/login' className='nav-item'>Login</Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;