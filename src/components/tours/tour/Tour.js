import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Tour.css";


const Tour = (props) => {
  return (
    <Fragment>
      <Link to={`/city/${props.id}`} className="props-style">
        <div key={props.id}>
          <p>{props.name}</p>
          <img src={props.image} alt={props.name} />
          <hr />
        </div>
      </Link>
    </Fragment>
  );
};
export default Tour;
