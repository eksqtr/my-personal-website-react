import { useState, useEffect } from 'react';
import { BsFillMoonStarsFill} from 'react-icons/bs';
import { FaSun } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MenuList from "./menuList";

type NavigationProps = {
    isDarkMode: boolean,
    setDarkMode: any,
}

const NavigationBar = (props: NavigationProps) => {
  // State to control the visibility of the menu
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(MenuList);

  const DownloadNotification = () => {
    // Configuration of the toast regarding downloading the resume
    toast.info("Downloading the Resume will start shortly...", {
      position: "top-right",
      className: "!bg-gray-800 !text-white dark:!bg-gray-700",
      theme: "colored",
      hideProgressBar:false,
      closeOnClick: true,
      pauseOnHover: false,
      autoClose:2000,
    });
  }

  // Function to toggle the menu visibility
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  function initializeSectionScroll()  {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // console.log(`Section in view: ${entry.target.id}`); // Debugging
            setActiveMenu((prevMenu) =>
              prevMenu.map((menu) => {
                if (menu.link === `#${entry.target.id}`) {
                  // console.log(`Activating menu: ${menu.link}`); // Debugging
                  return { ...menu, isActive: menu.isActive !== null ? true : null };
                }
                return { ...menu, isActive: menu.isActive !== null ? false : null };
              })
            );
          }
        });
      },
      { rootMargin: "-50px", threshold: 0.2 }
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
    <>
    <ToastContainer />
    <nav className="py-5 flex justify-between shadow-md sm:px-10 fixed w-full top-0 bg-white dark:bg-gray-800 z-nav">
        <div className='flex flex-col p-0 m-0'>
          <span className="hidden sm:block md:text-4xl text-gray-500 dark:text-gray-300">DEV.ejc</span>
          <span className="hidden sm:block md:text-md text-gray-500 dark:text-gray-300 ">{process.env.NEXT_PUBLIC_AUTHOR_EMAIL_ADDRESS}</span>
        </div>
        <ul className="flex items-center gap-6 text-md">

            {activeMenu.map(menu => (
                (
                    <li key={menu.link.replace(/#/, '')} className={`hidden md:block  ${menu.isActive ? "text-teal-600 dark:text-yellow-300" : ""}`}>
                        <a href={menu.link} className={`flex items-center flex-row ${menu.style}`} >{menu.title}{menu.icon && <menu.icon className={menu.iconStyle} />}</a>
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
                <a href={process.env.NEXT_PUBLIC_DOWNLOADABLE_URL_RESUME} onClick={DownloadNotification} className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-3 rounded-md hover:!from-red-500">Resume</a>
            </li>
            <li className="lg:hidden md:hidden px-4 py-3 mr-3 rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 text-white bg-teal-600 cursor-pointer" onClick={() => toggleMenu()}>
                    { isMenuOpen ? <FaChevronLeft />: <FaChevronRight />}
            </li>
        </ul>

        {/* Mobile Navigation */}
        <ul className={`mt-20 right-0 left-0 fixed items-end flex flex-col gap-3 md:hidden dark:text-white transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

            {activeMenu.map(menu => (
                (
                    <li className={`flex items-center left-0 ${menu.style} ${menu.isActive ? "text-teal-600 dark:text-yellow-300" : ""}`} key={menu.link.replace(/#/, '')}>
                        <a href={menu.link} className={`hover:scale-110 transition-all ease-in-out duration-500 flex justify-center`}>{menu.title}{menu.icon && <menu.icon className={menu.iconStyle} />}</a> 
                        {menu.isActive !== null ? (<span className={`ml-2 bg-gray-500 rounded-s-xl h-1 transition-all ease-in-out duration-500  ${menu.isActive ? 'w-10' : 'w-5'} text-black`}><hr /></span>) : ''}
                    </li>
                )
            ))}
        </ul>
    </nav>
    </>
  );
};

export default NavigationBar;
