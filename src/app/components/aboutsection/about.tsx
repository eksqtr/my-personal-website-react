import Image from "next/image";
import ejc from "@@/public/me.jpg"
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { RefObject } from "react";

type AboutProp = {
    sectionRef: RefObject<HTMLElement>
}

export const AboutSection = (prop: AboutProp) => {
    return (
        <section ref={prop.sectionRef} className="px-6 flex justify-center items-center flex-col lg:flex-row lg:h-screen py-20 lg:py-0 mt-16 lg:mt-0" id="about">
            {/* Left Side */}
            <div className="md:mx-10 lg:pt-20 lg:pr-16 text-center lg:text-left">
                <h2 className="text-4xl lg:text-5xl py-2 text-teal-600 font-medium">Eubie Jay Clemente</h2>
                <h3 className="text-xl lg:text-2xl py-2 dark:text-gray-300">Software Engineer - Full Stack</h3>
                <p className="text-md py-4 leading-7 lg:leading-8 text-gray-800 dark:text-gray-400">
                    I am a dedicated <span className="text-teal-500">Software Developer</span> with extensive experience in building both <span className="text-teal-500">Web</span> and <span className="text-teal-500">Desktop</span> Applications using a variety of programming languages and web technologies.
                    My core expertise lies in <span className="text-teal-500">backend development</span>, where I have strong development skills in <span className="text-teal-500">server-side logic</span>, <span className="text-teal-500">API design & functionalities</span>, and <span className="text-teal-500">database architecture</span>.
                    I am also knowledgeable in setting up and managing <span className="text-teal-500">CI/CD pipelines</span>, as well as configuring and maintaining both web and game server technologies.
                </p>
                <p className="text-xl text-gray-800 dark:text-gray-200">Let&apos;s Collaborate!</p>
                <p className="text-md text-gray-800 dark:text-gray-400 leading-7 lg:leading-8">
                    <a href="#contact-me">
                        <span className="lg:ml-10">Leverage my expertise</span> to build robust and scalable solutions. Whether it&apos;s software development, database architecture, or intuitive design,
                        I&apos;m ready to bring your vision to life. Reach out today, and let&apos;s create something extraordinary together.
                    </a>
                </p>
                <p className="text-md text-gray-800 dark:text-gray-300 mt-3"> <a href="mailto:clemente@eubiejay.dev" className="text-teal-400">Contact me</a> to start your next project!</p>
                <div className="text-3xl lg:text-5xl flex justify-center lg:justify-start gap-4 lg:gap-5 md:py-6 text-gray-600">
                    <a href="https://www.linkedin.com/in/clemente-eubiejay/" className="ease-in-out duration-300 hover:scale-125 dark:text-gray-200"><AiFillLinkedin /></a>
                    <a href="https://github.com/eksqtr" className="ease-in-out duration-300 hover:scale-125 dark:text-gray-200"><AiFillGithub /></a>
                </div>
            </div>

            {/* Right Side */}
            <div className="md:mx-10 p-10 lg:p-0">
                <div className="relative w-72 h-72 lg:w-96 lg:h-96 mt-10 lg:mt-0 mx-auto overflow-hidden rounded-lg border-gray-500 dark:border-teal-400 border-b-2 border-r-2">
                    <Image src={ejc} alt="me" fill style={{objectFit: "cover"}} />
                </div>
            </div>
        </section>
    )
}

export default AboutSection;