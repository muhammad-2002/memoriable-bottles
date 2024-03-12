import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import LSCare from "./LSCare";
import "./bottles.css";
import { addToLocal, getInLocalStorage } from "./local";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [bottle, setBottle] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((rse) => rse.json())
      .then((data) => setBottles(data));
    console.log(bottles.length);
  }, []);

  //load data to local Storage
  useEffect(() => {
    console.log(bottles.length);
    let cardArr = [];
    if (bottles.length > 0) {
      const toLocalStorage = getInLocalStorage();

      for (const id of toLocalStorage) {
        const card = bottles.find((card) => card.id === id);
        cardArr.push(card);
      }
      setBottle(cardArr);
    }
  }, [bottles]);
  const handleClick = (bottleCome) => {
    setBottle([...bottle, bottleCome]);
    addToLocal(bottleCome.id);
  };
  // handle bottle

  return (
    <div>
      <h1>TOTAL:{bottle.length}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {bottle.map((item) => (
          <LSCare
            item={item}
            bottle={bottle}
            setBottle={setBottle}
            key={Math.random()}
          ></LSCare>
        ))}
      </div>

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
