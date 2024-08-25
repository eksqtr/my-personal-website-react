
// Declaring prop types
type MenuProps = {
    title: string,
    link: string,
    style: string,
    order: number,
    isActive: boolean
}

// Static Data
const menuList: MenuProps[]  = [
    { title: "About Me", link: "#about", style: "dark:text-gray-300", order: 0, isActive: true },
    { title: "Tech Stacks & Exp", link: "#tech-stack", style: "dark:text-gray-300", order: 1, isActive: false },
    { title: "Projects", link: "#project", style: "dark:text-gray-300", order: 2, isActive: false },
    { title: "Contact Me", link: "#contact-me", style: "dark:text-gray-300", order: 3, isActive: false },
];

// Export
export default menuList;