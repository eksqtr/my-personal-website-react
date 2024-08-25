import { RefObject, useState} from "react";

import JobExperience from "./jobsList"
import techIcons from "./techIcons";

type TechProps = {
    sectionRef: RefObject<HTMLElement>
}
const TechSection = (props: TechProps) => {
    const [activeTab, setActiveTab] = useState<'tech' | 'experience'>('tech');
    const [iconSize] = useState('30px'); // Increased size for better visibility
  
    return (
        <section
          ref={props.sectionRef}
          className="p-8 md:p-16 bg-gray-100 dark:bg-gray-900 lg:h-screen"
          id="tech-stack"
        >
          {/* Tabs */}
          <div className="mt-20 flex justify-center md:justify-start mb-8">
            <button
              className={`px-4 py-2 text-lg font-medium ${activeTab === 'tech' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600 dark:text-gray-300'}`}
              onClick={() => setActiveTab('tech')}
            >
              Tech Stacks
            </button>
            <button
              className={`px-4 py-2 text-lg font-medium ml-4 ${activeTab === 'experience' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600 dark:text-gray-300'}`}
              onClick={() => setActiveTab('experience')}
            >
              Experience
            </button>
          </div>
    
          {/* Tab Content */}
          {activeTab === 'tech' ? (
            <div className="flex flex-col gap-4 md:gap-16">
              {/* Tech Stacks Content */}
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl py-4 text-teal-600 font-medium text-center md:text-left">Tech Stacks</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                  {/* Programming Languages */}
                  <div>
                    <h4 className="text-xl md:text-md py-2 dark:text-gray-300">Programming Languages</h4>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                      {["C#", "Node.js", "Pawn", "VB6", "VB.Net", "Java", "JavaScript", "PHP"].map(tech => (
                        <div key={tech} className="flex flex-col items-center">
                          <i className={`${techIcons[tech]} dark:text-white`} style={{ fontSize: iconSize }}></i>
                          <p className="text-sm mt-2 dark:text-gray-300">{tech}</p>
                        </div>
                      ))}
                    </div>
                  </div>
    
                  {/* Frameworks */}
                  <div>
                    <h4 className="text-xl md:text-md py-2 dark:text-gray-300">Frameworks & Databases</h4>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                      {["Vue.js", "Laravel", "jQuery", "Bootstrap", "TailwindCSS", "TypeScript", "Express.js", ".NET", "React", "Next.js", "MySQL", "SQLite", "MSSQL", "DynamoDB"].map(tech => (
                        <div key={tech} className="flex flex-col items-center">
                          <i className={`${techIcons[tech]} dark:text-white`} style={{ fontSize: iconSize }}></i>
                          <p className="text-sm mt-2 dark:text-gray-300">{tech}</p>
                        </div>
                      ))}
                    </div>
                  </div>
    
                  {/* Tools & Platforms */}
                  <div>
                    <h4 className="text-xl md:text-md py-2 dark:text-gray-300">Tools & Platforms</h4>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                      {["Bitbucket", "Jira", "Trello", "GitHub", "Git", "AWS"].map(tech => (
                        <div key={tech} className="flex flex-col items-center">
                          <i className={`${techIcons[tech]} dark:text-white`} style={{ fontSize: iconSize }}></i>
                          <p className="text-sm mt-2 dark:text-gray-300">{tech}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl py-4 text-teal-600 font-medium text-center md:text-left">Experience</h2>
              <JobExperience />
            </div>
          )}
        </section>
      );
    
  };

export default TechSection;