import { RefObject  } from "react";
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from "next/image";

type TechProps = {
    sectionRef: RefObject<HTMLElement>
}

export const TechSection =  (props: TechProps) => {
    
    return (
        <section ref={props.sectionRef} className="md:px-96 sm:px-10 flex justify-center items-center flex-col md:flex-row md:h-screen opacity-0" id="tech-stack">
            <div className="text-center md:text-left">
                <h2 className="text-5xl py-2 text-teal-600 font-medium">Eubie Jay Clemente</h2>
                <h3 className="text-2xl py-2 dark:text-gray-300">Software Engineer - Full Stack</h3>
                <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a venenatis dolor. 
                        Aliquam erat volutpat. Proin condimentum tincidunt maximus. Vivamus ut iaculis leo. 
                        Donec leo sem, feugiat eu eleifend scelerisque, bibendum ac leo. Ut bibendum placerat nibh.
                </p>
                <div className="text-5xl flex justify-center md:justify-start gap-5 py-3 text-gray-600">
                        <a href="https://www.linkedin.com/in/clemente-eubiejay/" className="ease-in-out duration-300 hover:scale-125 dark:text-gray-200"><AiFillLinkedin/></a>
                        <a href="https://github.com/eksqtr" className="ease-in-out duration-300 hover:scale-125 dark:text-gray-200"><AiFillGithub /></a>
                </div>
            </div>
            {/* Left Side */}
            <div className="px-40">
            <div className="text-center md:text-left">
                <h2 className="text-5xl py-2 text-teal-600 font-medium">Tech Stacks</h2>
                <h4 className="text-2xl py-2 dark:text-gray-300">Programming Languages</h4>
                <div className="flex items-center gap-5">
                    <i className="devicon-nextjs-original-wordmark dark:text-white" style={{ fontSize: '50px' }}></i>
                    <i className="devicon-react-original colored dark:text-white" style={{ fontSize: '50px'  }}></i>
                    <i className="devicon-typescript-plain colored" style={{ fontSize: '50px'  }}></i>
                    <i className="devicon-javascript-plain colored" style={{ fontSize: '50px'  }}></i>
                </div>
                <h4 className="text-2xl py-2 dark:text-gray-300">Libraries & Frameworks</h4>

                <h4 className="text-2xl py-2 dark:text-gray-300">Tools & Platform</h4>
        
            </div>

             {/* Right Side */}
            <div className="text-center md:text-left">
                <h2 className="text-5xl py-2 text-teal-600 font-medium">Experience</h2>
                
                        
            </div>
            </div>
           
            
        </section>
    )
}

export default TechSection;