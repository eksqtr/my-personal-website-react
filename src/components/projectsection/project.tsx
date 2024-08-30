import { useState, RefObject, useEffect } from 'react';
import { MdOpenInNew } from 'react-icons/md';
// import Image from 'next/image';

type ProjectProps = {
    sectionRef: RefObject<HTMLElement>;
};

type Project = {
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    techStack: string[];
};

const projects: Project[] = [
    {
        title: "Survival Z Mini Game",
        description: "A Game that was developed in C# Language Windows Form from the scratch in just 5 days! without any Game Engine Involved.",
        imageUrl: "https://github.com/eksqtr/Survival-Z-Mini-Game-Master/blob/master/Screenshots/mainmenu.png?raw=true",
        projectUrl: "https://github.com/eksqtr/Survival-Z-Mini-Game-Master",
        techStack: ["C#", ".Net"]
    },
    {
        title: "EJC-SMS",
        description: "EJC Short Message Service Library based on C# Language and VB .Net in ability to add SMS Feature on your existing project in just few lines of code.",
        imageUrl: "https://github.com/eksqtr/EJC-SMS/blob/master/Screenshots/Inbox_Dashboard.png?raw=true",
        projectUrl: "https://github.com/eksqtr/EJC-SMS",
        techStack: ["C#", "VB.Net"]
    },
    // We can add more projects here
];

const ProjectsSection = (props: ProjectProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isClosing, setIsClosing] = useState<boolean>(false);

    const handleCardClick = (index: number) => {
        setIsClosing(false);
        setActiveIndex(index);
    };

    const handleCloseModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setActiveIndex(null);
            setIsClosing(false);
        }, 500); 
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleCloseModal();
        }
    };

    useEffect(() => {
        const handleEscKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleCloseModal();
            }
        };

        document.addEventListener('keydown', handleEscKey);
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, []);

    return (
        <section className={`md:px-20 pt-14 pb-14 dark:bg-gray-900 lg:h-screen ${activeIndex !== null ? 'z-modal' : ''}`} id="project" ref={props.sectionRef}>
            <h2 className="md:mt-20 text-4xl md:text-5xl py-4 text-teal-600 font-medium text-center md:text-left">
                Projects
            </h2>
            <div className="relative overflow-hidden">
                <div className="flex snap-x snap-mandatory overflow-x-auto space-x-6 pb-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`flex-none w-80 cursor-pointer  duration-300 hover:shadow-teal-400 transition-all ease-in-out ${
                                index === activeIndex ? 'transform scale-105 z-10' : ''
                            }`}
                            onClick={() => handleCardClick(index)}
                        >
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    width={800} 
                                    height={450}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-2xl font-semibold dark:text-white truncate">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mt-2 truncate">
                                        {project.description}
                                    </p>
                                    <div className="mt-4">
                                        <h4 className="text-lg font-medium dark:text-gray-300">
                                            Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {project.techStack.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="text-sm bg-teal-600 text-white py-1 px-2 rounded-md dark:bg-teal-700 dark:white"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <a
                                        href={project.projectUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 flex items-center text-teal-600 transition-colors hover:text-teal-500"
                                    >
                                        View Project <MdOpenInNew className="ml-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {activeIndex !== null && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30"
                    onClick={handleOverlayClick}
                >
                    <div
                        className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-3xl w-full p-8 relative transition-transform duration-500 ${isClosing ? 'animate-slide-out' : 'animate-slide-in'}`}
                    >
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-4 right-4 text-xl text-gray-600 dark:text-gray-300 hover:!text-red-500 dark:hover:text-gray-200 transition-colors"
                        >
                            &times;
                        </button>
                        <div className="w-full h-80 relative">
                            <img
                                src={projects[activeIndex].imageUrl}
                                alt={projects[activeIndex].title}
                                width={800} 
                                height={450}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <h3 className="text-3xl font-semibold mt-4 dark:text-white">
                            {projects[activeIndex].title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">
                            {projects[activeIndex].description}
                        </p>
                        <div className="mt-4">
                            <h4 className="text-lg font-medium dark:text-gray-300">
                                Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {projects[activeIndex].techStack.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="text-sm bg-teal-600 text-white py-1 px-2 rounded-md dark:bg-teal-700 dark:white"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <a
                            href={projects[activeIndex].projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 flex items-center text-teal-600 hover:text-teal-400 transition-colors"
                        >
                            View Project <MdOpenInNew className="ml-2" />
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProjectsSection;
