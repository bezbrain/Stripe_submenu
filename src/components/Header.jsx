import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { headerLinks } from "../data";
``;
const Header = () => {
  const { setPopupBar, setSubHeader, setHoveredIndex } = useGlobalContext();

  const handleHover = (index) => {
    setHoveredIndex(index);
    setSubHeader(true);
  };

  return (
    <>
      <header>
        <button className="nav-btn" onClick={() => setPopupBar(true)}>
          <FaBars />
        </button>
        <img
          className="logo"
          src="https://raw.githubusercontent.com/john-smilga/react-projects/a7607537821a58e3569a4e4d8eb029ae63fe405d/13-stripe-submenus/final/src/images/logo.svg"
          alt="Stripe-img"
        />
        <nav>
          <ul>
            {headerLinks.map((each, index) => (
              <li key={each.id}>
                <button onMouseOver={() => handleHover(index)}>
                  {each.linkName}
                </button>
              </li>
            ))}
            <button className="signin-btn">Sign in</button>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
