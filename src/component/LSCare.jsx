import { removeItem } from "./local";

const LSCare = ({ item, setBottle, bottle }) => {
  const { img, id } = item;
  console.log(id);
  const handleBottlels = () => {
    const remaing = bottle.filter((idk) => idk.id !== id);
    console.log(remaing);
    setBottle(remaing);
    removeItem(id);
  };

  return (
    <div>
      <div>
        <img style={{ width: "50px", display: "flex" }} src={img}></img>
        <button onClick={handleBottlels}>Delete</button>
      </div>
    </div>
  );
};

export default LSCare;
