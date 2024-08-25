import { useState} from "react";

// props
type JobProps = {
    year: string;
    company: string;
    position: string;
    responsibilities: string;
    techStacks: string[];
};

// Array jobs info my friend
const jobs: JobProps[] = [
    {
        year: "2022 - 2024",
        company: "PEDDLR PHILIPPINES INC.",
        position: "Software Engineer Full Stack",
        responsibilities: "Developed and maintained web applications...\nasdasd",
        techStacks: ["Node.js", "Vue.js", "React", "Next.js"],
    },
    {
        year: "2020 - 2022",
        company: "Equity Gaming",
        position: "President & Head of Development Team",
        responsibilities: "Led a team of developers, managed projects...",
        techStacks: ["Laravel", "PHP", "MySQL", "AWS"],
    },
];

const JobExperience = () => {
    const [selectedJob, setSelectedJob] = useState<JobProps | null>(jobs[0]);
  
    return (
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex-shrink-0 overflow-x-auto border-r border-gray-300 dark:border-gray-700 md:h-[400px] md:w-[300px] sm:w-full sm:h-[250px] sm:overflow-x-scroll">
            <ul className="flex md:flex-col flex-row sm:flex-nowrap gap-4 p-2 overflow-x-auto">
                {jobs.map((job, index) => (
                <li
                    key={index}
                    className={`cursor-pointer p-4 rounded-lg transition-all duration-300 ease-in-out ${
                    selectedJob === job ? "bg-teal-600 text-white" : "bg-gray-100 dark:bg-gray-700"
                    } hover:bg-teal-500 hover:text-white`}
                    onClick={() => setSelectedJob(job)}
                >
                    <h3 className="text-lg md:text-xl font-semibold dark:text-gray-100">{job.year}</h3>
                    <p className="text-xs md:text-sm dark:text-gray-200">{job.company}</p>
                </li>
                ))}
            </ul>
        </div>
        <div className="flex-1 p-5 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
          {selectedJob && (
            <>
              <h3 className="text-2xl font-bold text-teal-600 ">{selectedJob.position}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{selectedJob.responsibilities}</p>
              <div className="mt-4">
                <h4 className="font-semibold dark:text-gray-200">Tech Stacks:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedJob.techStacks.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-teal-600 text-white rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  export default JobExperience;