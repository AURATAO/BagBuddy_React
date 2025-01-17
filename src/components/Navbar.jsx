import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";


const Navbar = ()=>{
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = ()=>{
    setIsMenuOpen((prev)=>!prev);
  }

    return (
        <header>
        <div  className="m-auto container">
        <div className="flex justify-between items-center mx-3 py-4 lg:gap-44">
          <img src="./src/assets/images/Logo.png" alt="bagbuddy-logo" className="w-40" />
          <img
            src="./src/assets/images/icon/Vector (5).png"
            alt="menu-icon"
            className="lg:hidden"
            id="openHam"
            onClick={toggleMenu}
          />
          <img
            src="./src/assets/images/icon/closeicon.png"
            alt="close-icon"
            className="w-5 h-5 hidden"
            id="closeHam"
          />
          <div className="hidden lg:flex">
            <ul className="flex justify-center items-center gap-8">
              <li className="body2 text-darkgray-3 text-center hover:text-primary-6">
                <a href="#">Pre-made Pack List</a>
              </li>
              <li className="body2 text-darkgray-3 text-center hover:text-primary-6">
                <a href="#">Getaway Ideas</a>
              </li>
              <li className="body2 text-darkgray-3 text-center hover:text-primary-6">
                <a href="#">Custom Travel Kit</a>
              </li>
            </ul>
          </div>
          <div className="hidden justify-center items-center gap-4 lg:flex">
            <img
              src="./src/assets/images/icon/global.png"
              alt="global-icon"
              className="w-6 h-6"
            />
            <button id="openModal">
              <a href="#" className="body3 text-darkgray-3">Login</a>
            </button>
            <button className="sm-btn-primary hover:bg-primary-5">Sign up</button>
          </div>
        </div>
        </div>
        <HamburgerMenu isOpen={isMenuOpen}/>
      </header>
    )
}

export default Navbar;