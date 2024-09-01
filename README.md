### My Personal Website
Basically, Im <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="VueJS" width="20" height="20"> **[VueJS](https://vuejs.org/ "VueJS")** Developer on my previous company. Now Im personally learning new framework front-end framework which are  <img src="https://camo.githubusercontent.com/789ae0acdd26c18f81088d4715b285e2c292aedf7f899aee09b71c43dfe362f2/68747470733a2f2f63646e312e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f70726f6772616d696e672d646576656c6f706d656e742d382f32342f72656163745f6c6f676f2d3531322e706e67" alt="React" width="20" height="20">**[React](https://react.dev/ "React")**, <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="NextJS" width="20" height="20">**[NextJS](https://nextjs.org/ "NextJS")**.

For this personal website project will be my portfolio to be publish on public repository. 

### **Frameworks** & **Technologies**:

**Front-End**
- [x] <img src="https://camo.githubusercontent.com/789ae0acdd26c18f81088d4715b285e2c292aedf7f899aee09b71c43dfe362f2/68747470733a2f2f63646e312e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f70726f6772616d696e672d646576656c6f706d656e742d382f32342f72656163745f6c6f676f2d3531322e706e67" alt="React" width="20" height="20">[React](https://react.dev/ "React"), <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="NextJS" width="20" height="20">
- [x] [NextJS](https://nextjs.org/ "NextJS"), 
- [x] <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" width="20" height="20"> [TypeScript](typescriptlang "TypeScript"),

**Back-End (Admin Panel)**
*In the future version*
- [ ] <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ZY7pSp8vUlxBODPl3S4YYzsx0Ht-sB7EkQ&s" alt="NodeJS" width="20" height="20"> [NodeJS](https://nodejs.org/en "NodeJS"), <img src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" alt="ExpressJS" width="20" height="20"> 
- [ ] [ExpressJS](https://expressjs.com/ "ExpressJS"), <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" width="20" height="20"> 
- [ ] [TypeScript](typescriptlang "TypeScript")

**Cloud Services:**
- [x] <img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" alt="GCP" width="20" height="20"> Google Cloud Deployments CI/CD via <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="React" width="20" height="20"> Github Actions

------------


### Current Features of this project repository
- [x] Static "About Me" Section
- [x] Static "Tech Stacks and Experience" Section
- [x] Responsive navigation bar with animation, compatible with various screen sizes
- [x] One-page scrolling with animation, designed for desktop users
- [x] View resume functionality a redirection to my Google Drive PDF resume
- [x] Integrated CI/CD pipeline for seamless deployment to a GCP VM (Ubuntu) with Nginx
- [x] Default dark mode theme for a modern look
- [x] Added SEO, Metadata Open graph metrics implemented to my personal website which makes my personal website appears in any search engines.
- [x] Project Section for lightmode/darkmode theme allowing to showcase my previous projects.
- [x] Adjustment on deployment of pipeline added production environment and env variables/values. https://github.com/eksqtr/my-personal-website-react/deployments
- [x] Added URL Fragment Navigation that navigates the user when entering to the site with url query params to specific tab and job experience information e.g. https://eubiejay.dev/#tech-stack?tab=experience&job=0 it will scroll down to tech section and show the experience tab job id 0.
- [x] Added hashtag#url auto changing when scrolling between sections.
- [x] Downloadable Resume with Toast notification designed for Dark/Light Mode Theme.
- [x] Say Hi button allowing the user to send direct email.

### Additional Features of my personal website (https://eubiejay.dev)
- [x] Personal custom domain (eubiejay.dev) with a professional email (clemente@eubiejay.dev) routed to my Gmail account—cost-effective and without additional email services!
- [x] Cloudflare services and SSL implementation to enforce HTTPS

------------
### How to Run Locally
#### Prerequisites
- Node.js 18+: Make sure Node.js is installed. Node.js Download
- Git: Ensure Git is installed. Git Download
- Text Editor: (e.g., VS Code, Sublime Text, etc.)

#### Here are the Steps: 
#### Clone the Repository
    git clone https://github.com/eksqtr/my-personal-website-react.git
    cd my-personal-website-react
##### Set Up Environment Variables
Create a **.env.development** file in the root directory and add the following:

    APP_URL=http://localhost:3000
    APP_TITLE=Your Site Title
    APP_AUTHOR=Your Name
    APP_DESCRIPTION=A short description of your website.
    APP_METADATA_KEYWORDS=keyword1, keyword2, keyword3
    APP_METADATA_OPENGRAPH_SITENAME=Your Site Name
    NEXT_PUBLIC_AUTHOR_EMAIL_ADDRESS=your.email@example.com
    NEXT_PUBLIC_DOWNLOADABLE_URL_RESUME=https://your-resume-direct-download-link.com
    NEXT_PUBLIC_VIEW_URL_RESUME=https://your-resume-view-link.com

#### Install Dependencies
    npm install

#### Run the Development ServerRun the Development Server
    npm run dev

Your website should now be accessible at http://localhost:3000.

### Operating System Specific Instructions
### Windows
Follow the steps above using Git Bash or Command Prompt.
Use **npm run dev** to start the server and open http://localhost:3000 in your browser.

### Linux
Use your terminal to run the commands.
Ensure Node.js is installed via package manager or direct download.

Start the server with **npm run dev** and visit http://localhost:3000.
### macOS

Use your terminal to clone the repository and install dependencies.
If needed, install Node.js using Homebrew (brew install node).

Run the server using **npm run dev** and navigate to http://localhost:3000.


##### Production Build (Optional)
If you want to build the project for production, use:

    npm run build

But don't forget to create  **.env** or **.env.production** file along with the required variables before running it for production

To start the production server:

    npm start

