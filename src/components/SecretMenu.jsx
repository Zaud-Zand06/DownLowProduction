import "./secretMenu.css";
import logo from "../assets/the_logo.png";

const secretMenuList = [
  {
    title: "Fries on the DL",
    description:
      "Fries topped with slaw, pickled onions, pickles and a big squeeze of our DL sauce, with chopped thighs or a breast",
    image: logo,
  },
  {
    title: "Waffle on the DL",
    description:
      "A fresh waffle topped with slaw, pickled onions, pickles, topped with thighs or a breast and a side of smoked jalapeno sauce",
    image: logo,
  },
  {
    title: "The Double Double Down",
    description:
      "A fresh waffle topped with slaw, pickled onions, pickles, topped with thighs or a breast and a side of smoked jalapeno sauce",
    image: logo,
  },
  {
    title: "The Jerry",
    description:
      "A fresh waffle topped with slaw, pickled onions, pickles, topped with thighs or a breast and a side of smoked jalapeno sauce",
    image: logo,
  },
  {
    title: "The Chicken Bacon Ranch",
    description:
      "A fresh waffle topped with slaw, pickled onions, pickles, topped with thighs or a breast and a side of smoked jalapeno sauce",
    image: logo,
  },
];

function SecretMenu() {
  return (
    <>
      <div className="secretMenuContainer">
        <h2>Nice work! You found our secret menu </h2>
        {secretMenuList.map((item, index) => {
          return (
            <div key={index} className="secretMenuItem">
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SecretMenu;
