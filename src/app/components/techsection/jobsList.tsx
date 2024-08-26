import { useState} from "react";
import DOMPurify from 'dompurify';
import moment from 'moment-timezone';

// props
type JobProps = {
    dateStarted: Date;
    dateEnded: Date,
    company: string;
    position: string;
    responsibilities: string;
    techStacks: string[];
};

// Array jobs info my friend
const jobs: JobProps[] = [
    {
        dateStarted: new Date("2022-03-21"),
        dateEnded: new Date("2024-07-31"),
        company: "PEDDLR PHILIPPINES INC.",
        position: "Software Engineer - Full Stack",
        responsibilities: `
            <div>
                <span class="text-gray-400">Developed and maintained new features of Web Front-End, Back-End and Back-End mobile applications.</span>
                <br/><strong>Highlights:</strong>
                <ul class="list-disc ml-5 mt-2">
                    <li>Overhauled Back-End Laravel to NodeJS AWS Lambda API and Improved performance.</li>
                    <li>Refactored legacy code and applied AWS ElasticCache.</li>
                    <li>Integrated 3rd Party API like Payment Gateaway, KYC, All-In-One engagement, SMS as well webhooks (Paymongo, Shufti, OnFido, CleverTap, M360, Semaphore).</li>
                    <li>Contributed development on Kanto Ads project using Amplify, Cognito, API Gateway, RDS, DynamoDB and etc.</li>
                    <li>Managed Dynamic Roleta System web front-end, back-end and back-end mobile application.</li>
                    <li>Managed Offline-Eloading System back-end allowing users to use E-Load without data / offline.</li>
                </ul>
            </div>
            `,
        techStacks: ["NodeJS", "VueJS", "Vuetify", "Vuex", "TypeScript","AWS Cloud Services", "Laravel MIX", "Git", "Jira", "Bitbucket", "Nginx"],
    },
    {
        dateStarted: new Date("2020-05-25"),
        dateEnded: new Date("2022-02-20"),
        company: "Equity Gaming",
        position: "President & Head of Development Team",
        responsibilities: `
            <div>
                <span class="text-gray-400">Establish a gaming community for GTA SA-MP Online Roleplay, Led a team and managed developments of the product and organization operation.</span>
                <br/><strong>Highlights:</strong>
                <ul class="list-disc ml-5 mt-2">
                    <li>Built a gaming community and developed a server for 1,000+ active players for the roleplay game GTA-SA Online.</li>
                    <li>Streamlined operations by establishing organization charts and chain of command processes.</li>
                    <li>Led a team to release new game versions and features, improving player retention by 80% with a positive 90% positive feedback from the community.</li>
                    <li>Implemented in-game voice chat and roleplay dynamic environments interactions which enhance player engagement for 1,000+ active players.</li>
                    <li>Deployed and maintain 3 Dedicated Virtual Private Server for Web and Game, ensuring 99.9% uptime.</li>
                    <li>Implemented network security measures, mitigating DDOS attacks reduced by 80%</li>
                </ul>
            </div>
        `,
        techStacks: ["Pawn", "VueJS", "OVH Cloud", "Cloudflare", "Trello", "Discord", "Socket.io", "NodeJS", "ExpressJS", "MySQL"],
    },
];
const JobExperience = () => {
    const [selectedJob, setSelectedJob] = useState<JobProps | null>(jobs[0]);
  
    // We need to sanitize the possibilies of XSS attack so we use dom prufiy for this shit
    const arrTags: Array<string> = ['b', 'i', 'span', 'strong', 'a', 'div', 'ul', 'li', 'em', 'br'];
    const arrAttr: Array<string> = ['href', 'class'];
    const sanitizedResponsibilities = selectedJob ? DOMPurify.sanitize(selectedJob.responsibilities, {
                ALLOWED_TAGS: arrTags,
                ALLOWED_ATTR: arrAttr
            }
        ) : '';

    return (
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex-shrink-0 overflow-x-auto border-r border-gray-300 dark:border-gray-700 md:h-[400px] md:w-[300px] sm:w-full sm:h-[150px] sm:overflow-x-scroll">
            <ul className="flex md:flex-col flex-row sm:flex-nowrap gap-4 p-2 overflow-x-auto">
                
            {jobs.map((job, index) => {
                
                // we gonna use the moment timezone on this part
                const startDate = moment(job.dateStarted).tz('Asia/Manila');
                const endDate = moment(job.dateEnded).tz('Asia/Manila');
                const duration = moment.duration(endDate.diff(startDate));

                const years = duration.years();
                const months = duration.months();
                const formattedDuration = `${years} yr${years !== 1 ? 's' : ''} ${months} mo${months !== 1 ? 's' : ''}`;

                return (
                <li
                    key={index}
                    className={`cursor-pointer p-4 rounded-lg transition-all duration-300 ease-in-out md:w-full sm:w-[200px] ${
                    selectedJob === job ? "bg-teal-600 text-white" : "bg-gray-100 dark:bg-gray-700"
                    } hover:bg-teal-500 hover:text-white`}
                    onClick={() => setSelectedJob(job)}
                >
                    <div className="flex justify-start flex-col">
                    <span className="text-lg md:text-xl font-semibold dark:text-gray-100">
                        {`${moment(job.dateStarted).format("YYYY")} - ${moment(job.dateEnded).format("YYYY")}`}
                    </span>
                    <span className="text-[11px] p-0 m-0 dark:text-gray-100">{formattedDuration}</span>
                    <p className="text-xs md:text-sm dark:text-gray-200">{job.company}</p>
                    </div>
                </li>
                );
            })}
            </ul>
        </div>
        <div className="flex-1 p-5 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
          {selectedJob && (
            <>
              <h3 className="text-2xl font-bold text-teal-400 ">{selectedJob.position}</h3>
              <p
                className="text-gray-600 dark:text-gray-300 mt-2"
                dangerouslySetInnerHTML={{ __html: sanitizedResponsibilities }}
              />
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