import { useState, useEffect } from 'react';
import { BsFillMoonStarsFill} from 'react-icons/bs';
import { FaSun } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import MenuList from "./menuList";

type NavigationProps = {
    isDarkMode: boolean,
    setDarkMode: any,
}

const NavigationBar = (props: NavigationProps) => {
  // State to control the visibility of the menu
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState(MenuList);

  // Function to toggle the menu visibility
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  function initializeSectionScroll()  {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveMenu((prevMenu) =>
              prevMenu.map((menu) =>
                menu.link === `#${entry.target.id}`
                  ? { ...menu, isActive: true }
                  : { ...menu, isActive: false }
              )
            );
          }
        });
      },
      { rootMargin: "-50px", threshold: 0.2 }  // threshold parameter for changing active menu
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }


  // On mounted just like in VueJS (onMounted) callback hook
  // Reference: https://react.dev/reference/react/useEffect
  useEffect(() => {
    // initialize the section scroll
    initializeSectionScroll();
  }, []);


  return (
    <nav className="py-5 flex justify-between shadow-md md:px-96 sm:px-10 fixed w-full top-0 bg-white dark:bg-gray-800 z-10">
        <h1 className="text-4xl text-gray-500 dark:text-gray-300">DEV.ejc</h1>
        <ul className="flex items-center gap-6 text-md">

            {activeMenu.map(menu => (
                (
                    <li key={menu.link.replace(/#/, '')} className={`hidden md:block ${menu.style} ${menu.isActive ? "text-teal-600 dark:text-yellow-300" : ""}`}>
                        <a href={menu.link} >{menu.title}</a>
                    </li>
                )
            ))}
           
            {/* Dark Mode Toggle */}
            <li className={`flex items-center gap-6 border-2 ${props.isDarkMode ? "border-blue-800" : "border-teal-500"} rounded-full p-0 relative overflow-hkeyden cursor-pointer transition-colors duration-500 ease-linear`} onClick={() => props.setDarkMode(!props.isDarkMode)}>
                <div className={`absolute top-0 left-0 h-full w-1/2 ${props.isDarkMode ? "bg-blue-900 rounded-e-full" : "bg-teal-500 rounded-s-full"} transition-all duration-500 ease-in-out ${props.isDarkMode ? "translate-x-full" : ""}`}></div>
                <div className={`relative z-10 text-xl rounded-full p-1 ${!props.isDarkMode ? "text-gray-800" : "text-gray-300"}`}>
                    <FaSun className={`${props.isDarkMode ? "text-gray-400" : "text-yellow-300 "}`} />
                </div>
                <div className={`relative z-10 text-1md rounded-full p-2 ${props.isDarkMode ? "text-gray-800" : "text-gray-300"}`}>
                    <BsFillMoonStarsFill className={props.isDarkMode ? "text-yellow-300" : "text-gray-400"} />
                </div>
            </li>
            {/* Basically My Resume Download */}
            <li>
                <a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md">Resume</a>
            </li>
            <li className="lg:hidden md:hidden px-3 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 text-white bg-teal-600 cursor-pointer" onClick={() => toggleMenu()}>
                    { isMenuOpen ? <FaChevronLeft />: <FaChevronRight />}
            </li>
        </ul>

        {/* Mobile Navigation */}
        <ul className={`mt-20 fixed items-end right-0 w-auto flex flex-col gap-3 md:hidden dark:text-white transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

            {activeMenu.map(menu => (
                (
                    <li className={`flex items-center left-0 ${menu.style} ${menu.isActive ? "text-teal-600 dark:text-yellow-300" : ""}`} key={menu.link.replace(/#/, '')}>
                        <a href={menu.link} className={`hover:scale-110 transition-all ease-in-out duration-500`}>{menu.title}</a> 
                        <span className={`ml-2 bg-gray-500 rounded-s-xl h-1 transition-all ease-in-out duration-500  ${menu.isActive ? 'w-10' : 'w-5'} text-black`}><hr /></span>
                    </li>
                )
            ))}
        </ul>
    </nav>
  );
};

export default NavigationBar;
