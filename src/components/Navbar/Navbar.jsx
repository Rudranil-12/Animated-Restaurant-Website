import { useState } from "react";
import Logo from '../../assets/food/logo.png'
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from 'framer-motion';

const NavMenu = [
  { id: 1, title: "Home", path: "/", delay: 0.1 },
  { id: 2, title: "Menu", path: "/menu", delay: 0.2 },
  { id: 3, title: "About", path: "/about", delay: 0.3 },
  { id: 4, title: "Delivery", path: "/delivery", delay: 0.4 },
  { id: 5, title: "Contact Us", path: "/contactus", delay: 0.5 },
];

const SlideDown = (delay) => {
  return {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, delay },
  }
}

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="container flex justify-between items-center font-leagueGothic">

        {/* Logo */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          src={Logo}
          alt="Logo"
          className="w-36"
        />

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-6">
            {NavMenu.map((menu) => (
              <motion.li
                key={menu.id}
                variants={SlideDown(menu.delay)}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.6, delay: menu.delay }}
                className="nav-menu"
              >
                <a className='inline-block px-2 py-2 text-2xl' href={menu.path}>
                  {menu.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Side (Cart + Hamburger) */}
        <div className="flex items-center gap-4">

          {/* Cart */}
          <motion.div
            variants={SlideDown(1)}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 1 }}
          >
            <button className='h-[40px] w-[40px] grid place-items-center rounded-full text-white bg-dark'>
              <IoCartOutline />
            </button>
          </motion.div>

          {/* Hamburger (Mobile Only) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <GiHamburgerMenu size={28} />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50">
          <ul className="flex flex-col items-center py-6 gap-4">
            {NavMenu.map((menu) => (
              <motion.li
                key={menu.id}
                variants={SlideDown(menu.delay)}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.6, delay: menu.delay }}
              >
                <a
                  href={menu.path}
                  className="text-2xl"
                  onClick={() => setIsOpen(false)}
                >
                  {menu.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
