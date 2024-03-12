import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import "./bottles.css";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [bottle, setBottle] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((rse) => rse.json())
      .then((data) => setBottles(data));
  }, []);
  const handleClick = (bottleCome) => {
    setBottle([...bottle, bottleCome]);
  };
  return (
    <div>
      <h1>TOTAL BOTTLES : {bottle.length}</h1>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleClick={handleClick}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
