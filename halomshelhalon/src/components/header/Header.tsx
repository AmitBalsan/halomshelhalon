import windows from "../../assets/windows.jpeg";
import flayer from "../../assets/flayer.jpeg";
import "./header.scss";

function Header() {
  return (
    <>
      <div className="header">
        <img src={flayer} />
        <img src={windows} />
      </div>
    </>
  );
}

export default Header;
