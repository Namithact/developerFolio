/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "NAMITHA",
  title: "Hi all, I'm Namitha",
  subTitle: emoji(
    "A passionate  Front-end developer with 6+ years of experience in crafting scalable, user-friendly UIs using AEM, Vue.js, JavaScript, and modern web standards. Proven success in delivering high-impact enterprise projects for global clients. Strong collaborator with a track record of on-time delivery, innovation, and excellence."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1qWl1TiJpSrRO0I-Cjc-jaH7pm2wZQWrK/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Namithact",
  linkedin: "https://www.linkedin.com/in/namitha-ct/",
  gmail: "namithasanu48@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FRONT END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
       "⚡ I'm a front-end developer who's passionate about building clean, responsive, and user-friendly interfaces."
    ),
    emoji("⚡ With over 6 years of experience, I’ve worked with enterprise teams and global clients using tools like Adobe Experience Manager (AEM), Vue.js, JavaScript, and SCSS."),
    emoji(
     "⚡ I love turning designs into functional, accessible interfaces — whether it's crafting reusable components, integrating APIs, or making the UI pixel-perfect across devices."),

     emoji(
      "⚡I'm currently diving deeper into React, building hands-on projects like a Task Manager App with dark mode, localStorage, and priority logic — and learning how to ship fast and iterate better.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "VueJS",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "vanillaJS",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "jest",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "jquery",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "AEM",
      fontAwesomeClassname: "fab fa-js"
    },
    {
       skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sahyadri College of Engineering and Management",
      logo: require("./assets/images/sahyadri.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "September 2014 - April 2018"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: " Packaged App Development Senior Analyst ",
      company: "Accenture",
      companylogo: require("./assets/images/Accenture.png"),
      date: "May 2022 – Feb 2025",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Developed responsive, component-driven UIs using Adobe Experience Manager (AEM) and Vue.js",
        "Collaborated with global design and QA teams to deliver pixel-perfect enterprise portals",
        "Integrated REST APIs and third-party services for seamless data flow",
        "Implemented unit tests using Jest and managed CI/CD with Azure Pipelines"


      ]
    },
    {
      role: "Senior Systems Engineer ",
      company: "Infosys",
      companylogo: require("./assets/images/Infy.png"),
      date: "Feb 2020 – April 2022",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Migrated legacy sites to AEM 6.5, building reusable components with Node.js front-ends",
        "Worked with cross-functional teams to ensure high-quality deliverables",
        "Integrated with REST APIs to deliver dynamic content workflows",
        "Designed dialogs and Sling models for personalized CMS experiences"
      ]},
    {
      role: " Software Engineer",
      company: "Customerxps Private Ltd",
      companylogo: require("./assets/images/clari5.png"),
      date: "Oct 2018 - Feb 2020",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Built real-time fraud detection and AML interfaces using the Clari5 product suite",
        "Worked on Java, SQL, and rule-based UI engines within banking applications",
        "Contributed to development, testing, and deployment of product modules"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Passion projects in progress — where I’m applying what I learn and shipping real thing",
  projects: [
    {
      projectName: "React Task Manager",
      projectDesc: "A task management app with priority selection, due dates, dark mode, and localStorage persistence.",
      footerLink: [
        {
           name: "Live Demo",
          url: "https://namithact.github.io/task-manager/"
        },
        {
          name: "GitHub",
          url: "https://github.com/Namithact/task-manager"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle:
    "Award Letters I recieved !",

  achievementsCards: [
    {
      title: "ichamp Awards",
      subtitle:
        "won the i champ award for my contribution towards the project in the month of jan 2023 and june 2022.",
   
      footerLink: [
        {
          name: "Award Letter jan 2023",
          url: "https://drive.google.com/file/d/1wiF1AGlSQAgJKLfLN_7KianwgLKt4P1X/view"
        },
        {
          name: "Award Letter june 2022",
          url: "https://drive.google.com/file/d/1WxKk2IkTqZDxZggTriMDPAwZPbiqUtmq/view"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+971543145641",
  email_address: "namithasanu48@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
