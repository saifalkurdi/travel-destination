import Tour from "./tour/Tour";
import { Fragment } from "react";


const Tours = (props) => {
  return (
    <Fragment>
      {props.data.map((dataItem) => {
        return (
          <div key={dataItem.id}>
            <Tour
              image={dataItem.image}
              id={dataItem.id}
              name={dataItem.name}
            />
          </div>
        );
      })}
    </Fragment>
  );
};
export default Tours;
