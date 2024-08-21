import Image from "next/image";
import ejc from "@@/public/me.jpg"
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { RefObject } from "react";

type AboutProp = {
    sectionRef: RefObject<HTMLElement>
}

export const AboutSection = (prop: AboutProp) => {
    return (
        <section ref={prop.sectionRef} className="md:px-80 sm:px-10 flex justify-center items-center flex-col md:flex-row px-20 md:h-screen opacity-0" id="about">
            {/* Left Side */}
            <div className="p-20 text-center md:text-left">
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

            {/* Right Side */}
            <div className="">
                <div className="relative w-80 h-80 mt-10 mx-auto md:mt-0 overflow-hidden rounded-full">
                    <Image src={ejc} alt="me" fill style={{objectFit: "cover"}} />
                </div>
                <div>
                    <h3 className="text-3xl py-1 dark:text-gray-300">Work with Me</h3>
                    <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a venenatis dolor. 
                            Aliquam erat volutpat. Proin condimentum tincidunt maximus. Vivamus ut iaculis leo. 
                            Donec leo sem, feugiat eu eleifend scelerisque, bibendum ac leo. Ut bibendum placerat nibh.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;