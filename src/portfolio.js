import emoji from 'react-easy-emoji';

import googlelogo from './assets/img/icons/common/google.svg';
import github from './assets/img/icons/common/github.svg';
import airbnb from './assets/img/icons/common/airbnbLogo.png';

export const greetings = {
   name: 'Love Dhimaan',
   title: "Hi all, I'm Love",
   description:
      'A passionate Full Stack Web Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / MongoDB / Redux / Figma and some other cool libraries and frameworks.',
   resumeLink:
      'https://docs.google.com/document/d/194EvN0SL-W0DCjDx-RLZOusvMnFON0dFCyr4M_8ueSo/edit?usp=sharing',
};

export const openSource = {
   githubUserName: 'thelovedhimaan',
};

export const contact = {
   email: '9541122850',
};

export const socialLinks = {
   facebook: 'https://www.facebook.com/thelovedhimaan',
   instagram: 'https://www.instagram.com/thelovedhimaan',
   twitter: 'https://twitter.com/thelovedhimaan',
   github: 'https://github.com/thelovedhimaan',
   linkedin: 'https://www.linkedin.com/in/thelovedhimaan/',
   email: 'mailto:thelovedhimaan@gmail.com',
};

export const skillsSection = {
   title: 'What I do',
   subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
   skills: [
      emoji(
         '⚡ Develop highly interactive Front end / User Interfaces for your web applications'
      ),
      emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
      emoji(
         '⚡ Integration of third party services such as Heroku/ AWS / Netlify'
      ),
   ],

   softwareSkills: [
      {
         skillName: 'Html-5',
         fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
         skillName: 'Css3',
         fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      // {
      //    skillName: 'sass',
      //    fontAwesomeClassname: 'logos:sass',
      // },
      {
         skillName: 'JavaScript',
         fontAwesomeClassname: 'logos:javascript',
      },
      // {
      //    skillName: 'TypeScript',
      //    fontAwesomeClassname: 'logos:typescript-icon',
      // },
      {
         skillName: 'Reactjs',
         fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
         skillName: 'Redux',
         fontAwesomeClassname: 'logos:redux',
      },
      {
         skillName: 'Nodejs',
         fontAwesomeClassname: 'logos:nodejs',
      },
      {
         skillName: 'Express',
         fontAwesomeClassname: 'logos:express',
      },
      {
         skillName: 'Gatsbyjs',
         fontAwesomeClassname: 'logos:gatsby',
      },
      // {
      //    skillName: 'Express',
      //    fontAwesomeClassname: 'vscode-icons:file-type-expressjs',
      // },
      {
         skillName: 'Figma',
         fontAwesomeClassname: 'logos:figma',
      },
      {
         skillName: 'Bootstrap',
         fontAwesomeClassname: 'logos:bootstrap',
      },
      {
         skillName: 'MaterialUI',
         fontAwesomeClassname: 'logos:material-ui',
      },
      {
         skillName: 'MongoDB',
         fontAwesomeClassname: 'logos:mongodb',
      },
      {
         skillName: 'Sql-database',
         fontAwesomeClassname: 'logos:mysql',
      },

      // {
      //    skillName: 'swift',
      //    fontAwesomeClassname: 'vscode-icons:file-type-swift',
      // },
      {
         skillName: 'npm',
         fontAwesomeClassname: 'logos:npm',
      },

      // {
      //    skillName: 'AWS',
      //    fontAwesomeClassname: 'logos:aws',
      // },
      {
         skillName: 'Netlify',
         fontAwesomeClassname: 'logos:aws',
      },
      {
         skillName: 'Heroku',
         fontAwesomeClassname: 'logos:heroku',
      },
      // {
      //    skillName: 'python',
      //    fontAwesomeClassname: 'logos:python',
      // },
      {
         skillName: 'Git',
         fontAwesomeClassname: 'logos:git',
      },
      {
         skillName: 'GoogleCloud',
         fontAwesomeClassname: 'logos:google-cloud',
      },
      // {
      //    skillName: 'docker',
      //    fontAwesomeClassname: 'logos:docker-icon',
      // },
   ],
};

export const SkillBars = [
   {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90', //Insert relative proficiency in percentage
   },
   {
      Stack: 'Backend',
      progressPercentage: '70',
   },
   {
      Stack: 'Programming',
      progressPercentage: '70',
   },
];

export const educationInfo = [
   {
      schoolName: 'SD College',
      subHeader: 'BSc (Hons) Information Technology',
      duration: '2016 –2020',
      desc: 'National Cadets Cops (2016 -2017)',
      // descBullets: [
      //    'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
      //    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      // ],
   },
   {
      schoolName: 'Bhartiya Public School',
      subHeader: 'Class 12',
      duration: 'April 2015 - May 2016)',
      desc: 'Percentage: 77.8%',
      // descBullets: [
      //    'Lorem ipsum dolor sit amet, consectetfgur adipiscing elit',
      //    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      // ],
   },
   {
      schoolName: 'D.C. Model Senior Secondary School',
      subHeader: 'Class 10 Apr (2013 - May 2014)',
      duration: 'April 2013 - May 2014',
      desc: 'CGPA: 8.6',
      // descBullets: [
      //    'Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit',
      // ],
   },
];

export const experience = [
   {
      role: 'Frontend Developer',
      company: 'Sauda Technologies',
      // companylogo: googlelogo,
      date: 'December 2020 - August 2021',
      desc: 'Worked on many products on various parts from designing, development, testing to deploying the changes to production.',
      descBullets: [
         'With a team of mere 4-5 developers, we were able to develop, maintain and scale multiple products.',
         'Worked on building  dashboard and company website from scratch.',
         'Developed modules by consuming the REST API.',
         'Designed clean code for project maintainability and testability.',
         'Securing the application using session based logs.',
         'Designed templates for UI and UX improvements.',
         'UI improvements as per business requirements ',
      ],
   },
   // {
   //    role: 'Software Engineer Intern',
   //    company: 'Airbnb',
   //    companylogo: airbnb,
   //    date: 'Jan 2015 – Sep 2015',
   //    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
   // },
];

export const projects = [
   {
      name: 'Woodwork’s',
      desc: 'React, Express, Node.js, MongoDB      Website for purchasing furniture.      All furniture is divided into categories for better experience. Currently it is in progress.',
      github: 'https://github.com/thelovedhimaan/wood-works',
      // link: 'https://example.com',
   },
   {
      name: 'Dynamic Chemicals',
      desc: 'Gatsby.js, React      It is a Site that allows users to create and find camping places, it allows users to comment on the other campgrounds made by other users.      Also, user needs to register before creating or commenting.',
      // github: 'https://github.com/1Love100',
      link: 'https://www.dynamicchemicals.co.in/',
   },
   {
      name: 'React Colors',
      desc: 'React without using hooks      A complete React based application that allows user to copy different shades of colors from different palettes.      User can create own palette of colors through which anyone can copy colors in future.',
      github: 'https://github.com/thelovedhimaan/ReactColors',
      link: 'https://colorsfun.herokuapp.com/',
   },
   // {
   //    name: 'Daily Wallet',
   //    desc: 'React, Material UI, Bootstrap      Book Reader, calculator, weather, to-do list & top news on single site.',
   //    github: 'https://github.com/thelovedhimaan/DailyWallet',
   // },
   // {
   //    name: 'YouCamp',
   //    desc: 'Express (Rest API), Node.js, Passport.js, Bootstrap, MongoDB      It is a Site that allows users to create and find camping places, it allows users to comment on the other campgrounds made by other users.      Also, user needs to register before creating or commenting.',
   //    github: 'https://github.com/1Love100',
   //    // link: 'https://example.com',
   // },
   {
      name: 'Chemistry Classes',
      desc: 'Express (Rest API), Node.js, Passport.js, Bootstrap,      This website provides chemistry lectures to students from classes      9th to 12th.It can be updated using form for adding new lectures.',
      github: 'https://github.com/thelovedhimaan/chemistry-classes',
      link: 'https://shrouded-brushlands-75911.herokuapp.com/',
   },
];

export const feedbacks = [
   {
      name: 'Hassan Mehmood',
      feedback:
         'We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Love Dhimaan has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose Love web developer services for u.',
   },
   {
      name: 'Maheen Altaf',
      feedback:
         'the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job',
   },
];
