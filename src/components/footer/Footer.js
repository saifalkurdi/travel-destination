import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="container">
          <p>All rights reserved by &copy; Saif ALkurdi 2023 </p>
          <Link to="#" className="media">
            <i className="facebook"> facebook </i>
          </Link>
          <Link to="#" className="media">
            <i className="twitter"> twitter </i>
          </Link>
          <Link to="#" className="media">
            <i className="instagram"> github </i>
          </Link>
        </div>
      </footer>
    </Fragment>
  );
};
export default Footer;
