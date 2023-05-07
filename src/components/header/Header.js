import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="section">
          <Link to="/">
            <img
              src="https://i0.wp.com/www.eyeofriyadh.com/directory/images/2019/06/51aa54058833.jpg"
              alt="logo"
              className="logo"
            />
          </Link>
          <h1 className="styling">Travel Destination</h1>
          <nav>
            <ul>
              <li>
                <Link to="/" className="active">
                  {" "}
                  Home{" "}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;