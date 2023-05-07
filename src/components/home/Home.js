import { Fragment } from "react";
import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";


const Home = (props) => {
  return (
    <Fragment>
      <Header />
      <Tours data={props.data} />
      <Footer />
    </Fragment>
  );
};
export default Home;