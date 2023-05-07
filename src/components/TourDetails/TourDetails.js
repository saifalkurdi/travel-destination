import { useParams } from "react-router-dom";
import { useState, Fragment } from "react";
import Header from "../header/Header";
import "./TourDetails.css";
const TourDetails = (props) => {

  const [showMore, setShowMore] = useState(false);

  const { id } = useParams();

  console.log(id);

  const city = props.data.find((city) => city.id === id);

  const showContentHandler = () => {
    setShowMore(!showMore);
  };
  return (
    <Fragment>
      <Header />

      <div>
        <p className="city-style">
          {showMore ? city.info : `${city.info.slice(0, 390)}`}
        </p>
        <button onClick={showContentHandler} className="button-style">
          {showMore ? "Show less" : "Show more"}
        </button>
        <hr />
      </div>
     
    </Fragment>
  );
};
export default TourDetails;