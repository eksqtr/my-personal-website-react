import { RefObject  } from "react";

type TechProps = {
    sectionRef: RefObject<HTMLElement>
}

export const TechSection =  (props: TechProps) => {
    
    return (
        <section ref={props.sectionRef} className="md:px-96 sm:px-10 flex justify-center items-center flex-col md:flex-row md:h-screen opacity-0" id="tech-stack">
            {/* Left Side */}
            <div className="p-20 text-center md:text-left">
                <h2 className="text-5xl py-2 text-teal-600 font-medium">Eubie Jay Clemente</h2>
                <h3 className="text-2xl py-2 dark:text-gray-300">Software Engineer - Full Stack</h3>
                <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a venenatis dolor. 
                        Aliquam erat volutpat. Proin condimentum tincidunt maximus. Vivamus ut iaculis leo. 
                        Donec leo sem, feugiat eu eleifend scelerisque, bibendum ac leo. Ut bibendum placerat nibh.
                </p>
                        
            </div>

            {/* Right Side */}
            <div className="">
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

export default TechSection;