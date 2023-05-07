import "./App.css";
import TourDetails from "./components/TourDetails/TourDetails";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import data from "./data/db.json";
const App = () => {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/city/:id" element={<TourDetails data={data} />} />
      </Routes>
    </div>
  );
};

export default App;