import { FaTimes } from "react-icons/fa";
import { headerLinks } from "../data";
import "../continuecss.css";
import { useGlobalContext } from "../context";

const NavPopup = () => {
  const { popupBar, setPopupBar } = useGlobalContext();
  return (
    <>
      <div className={`overlay-con ${popupBar ? "add-overlay-css" : ""}`}>
        <section className="popup-section">
          <FaTimes className="close-popup" onClick={() => setPopupBar(false)} />
          {headerLinks.map((each) => {
            const { id, linkName, subLinkname } = each;
            return (
              <aside key={id}>
                <h2>{linkName}</h2>
                <div className="head-item">
                  {subLinkname.map((each, i) => {
                    const { label, icon } = each;
                    return (
                      <p key={i}>
                        <span>{icon}</span>
                        {label}
                      </p>
                    );
                  })}
                </div>
              </aside>
            );
          })}
          <button className="signin-btn">Sign in</button>
        </section>
      </div>
    </>
  );
};

export default NavPopup;
