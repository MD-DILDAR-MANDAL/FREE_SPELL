import { useContext } from "react";
import ToogleContext from "../../context/Toogle";
import "./Navbar.scss";
import { images } from "./../../constants";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const { toogle, setToogle } = useContext(ToogleContext);
  return (
    <nav className="app__navbar">
      <div className="app__logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__links">
        {["home", "about", "skill", "project", "contact"].map((item) => (
          <li key={`links-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToogle(true)} />
        {toogle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <HiX
              onClick={(e) => {
                setToogle(false);
              }}
            />
            <ul>
              {["home", "about", "skill", "project", "contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={(e) => {
                      setToogle(false);
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
