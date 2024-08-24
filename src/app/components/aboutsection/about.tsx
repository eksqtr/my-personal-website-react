import Image from "next/image";
import ejc from "@@/public/me.jpg"
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { RefObject } from "react";

type AboutProp = {
    sectionRef: RefObject<HTMLElement>
}

export const AboutSection = (prop: AboutProp) => {
    return (
        <section ref={prop.sectionRef} className="lg:px-80 sm:px-10 flex justify-center items-center flex-col lg:flex-row px-20 lg:h-screen opacity-0" id="about">
            {/* Left Side */}
            <div className="lg:pt-20 md:pr-20 lg:pl-16 sm:pt-20 text-center md:text-left">
                <h2 className="text-5xl py-2 text-teal-600 font-medium">Eubie Jay Clemente</h2>
                <h3 className="text-2xl py-2 dark:text-gray-300">Software Engineer - Full Stack</h3>
                <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-400">
                    I am a dedicated Software Developer with extensive experience in building both Web and Desktop Applications using a variety of programming languages and web technologies. 
                    My core expertise lies in backend development, where I have strong development skills in server-side logic, API design & functionalities, database architecture. 
                    I am also highly skilled in setting up and managing CI/CD pipelines, as well as configuring and maintaining both web and game server technologies.
                </p>
                <p className="text-2xl text-gray-800 dark:text-gray-400">Let's Collaborate!</p>
                <p className="text-md text-gray-800 dark:text-gray-400 leading-8">
                    <a href="#contact-me"> 
                        <span className="md:ml-10">Leverage my expertise</span> to build robust and scalable solutions. Whether it's software development, database architecture, or intuitive design, 
                        I'm ready to bring your vision to life. Reach out today, and let's create something extraordinary together.
                    </a>
                </p>
                <p className="text-md text-gray-800 dark:text-gray-400 mt-3">Contact me to start your next project!</p>
                <div className="text-5xl flex justify-center md:justify-start gap-5 md:py-6  text-gray-600">
                    <a href="https://www.linkedin.com/in/clemente-eubiejay/" className="ease-in-out duration-300 hover:scale-125 dark:text-gray-200"><AiFillLinkedin/></a>
                    <a href="https://github.com/eksqtr" className="ease-in-out duration-300 hover:scale-125 dark:text-gray-200"><AiFillGithub /></a>
                </div>
            </div>

            {/* Right Side */}
            <div className="p-20">
                <div className="relative w-96 h-96 mt-10 mx-auto md:mt-0 overflow-hidden rounded-lg border-gray-500 dark:border-teal-400 border-b-2 border-r-2">
                    <Image src={ejc} alt="me" fill style={{objectFit: "cover"}} />
                </div>
            </div>
        </section>
    )
}

export default AboutSection;