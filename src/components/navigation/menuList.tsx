
import { MdOutlineWavingHand } from "react-icons/md";
import { IconType } from "react-icons"; 

// Declaring prop types
type MenuProps = {
    title: string,
    link: string,
    style: string,
    order: number,
    isActive: boolean | null,
    icon: IconType | null
    iconStyle: string,
}

// Static Data
const menuList: MenuProps[]  = [
    { title: "About Me", link: "#about", style: "dark:text-gray-300", order: 0, isActive: true, icon: null, iconStyle: "" },
    { title: "Tech Stacks & Exp", link: "#tech-stack", style: "dark:text-gray-300", order: 1, isActive: false, icon: null , iconStyle: ""},
    { title: "Projects", link: "#project", style: "dark:text-gray-300", order: 2, isActive: false, icon: null , iconStyle: ""},
    { title: "Say Hi", link: `mailto:${process.env.NEXT_PUBLIC_AUTHOR_EMAIL_ADDRESS}`, style: "dark:text-gray-300 md:bg-gradient-to-r md:from-cyan-500 hover:!from-red-500 md:to-teal-500 md:rounded-md px-4 py-2 text-white", order: 3, isActive: null, icon: MdOutlineWavingHand , iconStyle: "ml-2"},
];

// Export
export default menuList;