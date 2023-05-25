import { useGlobalContext } from "../context";
import { headerLinks } from "../data";

const SubHeader = () => {
  const { subHeader, hoveredIndex } = useGlobalContext();

  const styles = {
    productsStyles: {
      right: "50%",
      // left: "50%",
      // transform: "translate(-100%)",
      width: "400px",
    },
    developersStyles: {
      left: "50%",
      transform: "translate(-50%)",
      width: "500px",
    },
    companyStyles: {
      left: "50%",
      transform: "translate(50%)",
      width: "250px",
    },
  };

  return (
    <>
      <div className={`${subHeader ? "add-submenu-css" : "submenus"}`}>
        {hoveredIndex !== null && (
          <div
            className="sub-header-con"
            style={
              hoveredIndex === 0
                ? styles.productsStyles
                : hoveredIndex === 1
                ? styles.developersStyles
                : styles.companyStyles
            }
          >
            <h2>{headerLinks[hoveredIndex].linkName}</h2>
            <div className="each-subheader-con">
              {headerLinks[hoveredIndex].subLinkname.map((each, i) => {
                const { label, icon } = each;
                return (
                  <aside key={i}>
                    <span>{icon}</span>
                    <p>{label}</p>
                  </aside>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SubHeader;
