import "./bottle.css";
const Bottle = ({ bottle, handleClick }) => {
  const { id, name, price, img, category } = bottle;
  return (
    <div className="bottle-container">
      <div style={{ textAlign: "center" }}>
        <img
          style={{
            width: "50%",
          }}
          src={img}
        ></img>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <div>
          <p>Name: {name}</p>
          <p>Catagory: {category}</p>
          <p>Price: {price}</p>
        </div>
        <div>
          <button onClick={() => handleClick(bottle)}>Purses</button>
        </div>
      </div>
    </div>
  );
};

export default Bottle;
