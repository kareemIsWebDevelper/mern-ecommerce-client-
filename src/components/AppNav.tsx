import {menu, close, search} from "../assets/index";
import { useNav } from "../hooks/useNav";
import CartCounter from "./cart/CartCounter";
import {SearchIcon} from "./SubComponents";
import {useEffect, useState} from "react";

export default function AppNav() {
  const {Link, toggle, handleToggle, alterLink} = useNav();
    const [hidden, setHidden] = useState(false);

    const navLinks = [
        {id: 1, target: "/", text: "Home"},
        {id: 2, target: "/category/64acbda9476e323a10bc8a9d", text: "Electronics"},
        {id: 3, target: "/category/64ad8b2dc9feffb6950b9ec0", text: "Grocery"},
        {id: 4, target: "/category/64acc8b9a270321fbd322a71", text: "Personal Care"},
        {id: 5, target: "/category/64ad8cfce6f1f0caae01de26", text: "Clothes"},
    ];

    useEffect(() => {
        const admin = localStorage.getItem('admin');
        if (admin) setHidden(true);
    }, []);

  return (
    <header>
      <nav className="navbar">
        <div className="flexBetween w-full px-4">
            <img
              src={menu} alt="menu"
              className="w-10 h-10 cursor-pointer"
              onClick={handleToggle}
            />
           <div className="flexCenter gap-4">
                <SearchIcon />
               <CartCounter />
           </div>
        </div>
      </nav>
      <nav>
        {toggle && (
          <nav className="menu">
            <div className="menu-text">
              <div className="menu-header">
                <button onClick={handleToggle} className="logo">
                  <Link to="/">Brand</Link>
                </button>
                <img
                    src={close} alt="close"
                    onClick={handleToggle}
                    className="w-8 h-8 cursor-pointer"
                />
              </div>
              <div className="p-2 grid">
                  {hidden && <Link to="/admin" className="nav-link">Dashboard</Link>}
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    className="nav-link"
                    onClick={() => {
                      handleToggle();
                      alterLink(link.target);
                    }}
                  >
                    {link.text}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        )}
      </nav>
    </header>
  );
}
