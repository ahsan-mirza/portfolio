import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  trimle,
  CTLLC,
  tesla,
  link,
  carrent,
  jobit,
  tripguide,
  threejs,
  BJ,
  wgroup,
  Tech,
  dotnet,
  next,
  ar,
  walahala,
  walahala2,
  q,
  dill,
  vx,
  hra,
  hra3,
  hra2,
  mal,
  sharji,
  zohaib
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "ASP.Net Core",
    icon: dotnet,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Cloud Technologies L.L.C, (United Arab Emirate)",
    icon: CTLLC,
    iconBg: "#383E56",
    date: "June-2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js & Next.js and other related technologies.",
      "Developing and maintaining web Api's using ASP.NetCore and Nodejs Framework.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      
    ],
  },
  {
    title: "Mid Senior Front-End Developer",
    company_name: "BrandJaws, Pakistan",
    icon: BJ,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - June 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Oversaw daily meeting agenda with the client in a live scrum call.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "UI / UX Designer & Developer",
    company_name: "W-Group, Lahore, Japanese based",
    icon: wgroup,
    iconBg: "#383E56",
    date: "Jan 2019 - Jan 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Oversaw UI/UX team.",
      "Design UI / UX for web or mobile apps.",
      "UI development and design responsibilities.",
    ],
  },
  {
    title: "UI / UX Designer & Developer",
    company_name: "Techvision, Pakistan",
    icon: Tech,
    iconBg: "#E6DEDD",
    date: "Jan 2016 - 2019",
    points: [
      "Perform UI tasks.",
      "Design websites and mobile applications design products or brands.",
      "Create social media marketing strategy.",
  
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ahsan proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ahsan does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ahsan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  

  {
    testimonial:
      "Working with Ahsan such a great expirience. Ahsan is very supportive and quicker learner.",
    name: "Elsayed Sharji",
    designation: "Director IT HRA",
    company: "HRA",
    image: sharji,
  },
  {
    testimonial:
      "He is very energetic and focused person with his work.Always ready for accept the challenges.",
    name: "Zohaib Qadir",
    designation: "Founder",
    company: "Ammag Tech",
    image: zohaib,
  },
];

const projects = [
  {
    name: "Trimble",
    description:
      "Trimble technologies and industry solutions go beyond working smarter. Our unique ability to connect the physical and digital worlds with data and integrated technology improves the way people live, eat and move.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Druple",
        color: "green-text-gradient",
      },
      {
        name: "Boostrap",
        color: "pink-text-gradient",
      },
    ],
    image: trimle,
    source_code_link: "https://www.trimble.com/en",
  },

  {
    name: "Walahala",
    description:
      "WALAHALA is the most secure, digital and crypto currency wallet with exchange. Keeping in view the financial needs, we provide our users with suitable and dependable services for the exchange of virtual currency into various assets i.e. fiat and other crypto currencies. Users can easily buy/sell and trade over major crypto currencies, altcoins and tokens. We support all these currencies on the basis of their rankings, volume, market cap and supply details. Any process regarding crypto currency exchange is carried easily within 24 hours. We offer instant execution of trade, reliable digital wallets and high security practices. WALAHALA; the infallible stock exchange is an efficacious forum to access a complete crypto currency market with real time charts and crypto rates.",
    tags: [
      {
        name: "Asp.Net",
        color: "blue-text-gradient",
      },
      {
        name: "Sql server",
        color: "green-text-gradient",
      },
      {
        name: "Boostrap",
        color: "pink-text-gradient",
      },
    ],
    image: walahala,
    source_code_link: "https://walahala.com/",
  },

  {
    name: "Walahala.io",
    description:
      "WALAHALA is the most secure, digital and crypto currency wallet with exchange. Keeping in view the financial needs, we provide our users with suitable and dependable services for the exchange of virtual currency into various assets i.e. fiat and other crypto currencies. Users can easily buy/sell and trade over major crypto currencies, altcoins and tokens. We support all these currencies on the basis of their rankings, volume, market cap and supply details. Any process regarding crypto currency exchange is carried easily within 24 hours. We offer instant execution of trade, reliable digital wallets and high security practices. WALAHALA; the infallible stock exchange is an efficacious forum to access a complete crypto currency market with real time charts and crypto rates.",
    tags: [
      {
        name: "Asp.Net",
        color: "blue-text-gradient",
      },
      {
        name: "Boostrap",
        color: "green-text-gradient",
      },
      {
        name: "HTML5 & CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: walahala2,
    source_code_link: "https://walahala.io/",
  },

  {
    name: "AutoRental",
    description:
      "Auto Rental is not just the service but a revolution in the travel industry. Since 2020 Auto Rental introduced the new trends with the help of cutting-edge technology to provide the rental companies and their clients with services that speak for itself.",
    tags: [
      {
        name: "Vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "HTML5 & CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: ar,
    source_code_link: "https://www.trimble.com/en",
  },
  {
    name: "Q Wealth",
    description:
      "Enabled by the efficiencies of our core services, investment, and technology platform, our Partner wealth advisors spend their time differently – instead of spending the bulk of their days in the proverbial weeds, they spend it providing high levels of service to clients across the entire wealth and life management spectrum.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Boostrap",
        color: "green-text-gradient",
      },
      {
        name: "HTML5 & CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: q,
    source_code_link: "https://www.qwealth.com/",
  },

  {
    name: "Dillinger",
    description:
      "We do films, not big words and long sentences. We do trust, soul and craft, reaching deep and aiming high, so the eyes and mind delight. Passion, bravery, fun, caffeine, adrenaline, dopamine. And a little bit of wtf when it's time to dance under the moonlight. We love rare, beautiful, brave, innovative, clever, poetic visual objects and we make them happen. Hell or high water. Your mother would love us ! Dillinger is based in Paris. We've worked with nearly all the brands, mostly everywhere, winning almost all the awards. We embrace the future.",
    tags: [
      {
        name: "Vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "Boostrap",
        color: "green-text-gradient",
      },
      {
        name: "HTML5 & CSS3",
        color: "pink-text-gradient",
      },
      {
        name: "Green Sock ",
        color: "pink-text-gradient",
      },
    ],
    image: dill,
    source_code_link: "https://www.dillinger.tv/",
  },

  {
    name: "Cossins",
    description:
      "Cossins Windows and Doors will provide the highest quality products at a competitive price while implementing new technologies into our production methods for replacement windows and doors.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Electron.js",
        color: "pink-text-gradient",
      },
      {
        name: "Boostrap",
        color: "green-text-gradient",
      },
      {
        name: "HTML5 & CSS3",
        color: "pink-text-gradient",
      },
     
    ],
    image: dill,
    source_code_link: " https://cossinswindowsanddoors.com/",
  },

  {
    name: "Virtual-X",
    description:
      "Virtual-X is a revolutionary metaverse platform that allows users to engage and socialize inside a virtual universe in an immersive setting. It enables millions of individuals to interact, collaborate, and explore in a single virtual place.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Unity",
        color: "pink-text-gradient",
      },
      {
        name: "Boostrap",
        color: "green-text-gradient",
      },
      {
        name: "HTML5 & CSS3",
        color: "pink-text-gradient",
      },
     
    ],
    image: vx,
    source_code_link: "https://virtual-x.org/",
  },
 
  {
    name: "Center of Gravity(HRA Abu Dhabi)",
    description:
      "This project is like jira. Task management system to track progress/",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Asp.Net Core",
        color: "pink-text-gradient",
      },
      {
        name: "Boostrap",
        color: "green-text-gradient",
      },
      {
        name: "HTML5 & CSS3",
        color: "pink-text-gradient",
      },
     
    ],
    image: hra3,
    source_code_link: "https://virtual-x.org/",
  },
  
  {
    name: " HRA(Abu Dhabi)",
    description:
      "Established pursuant to Law no. 7 of 2015 issued by the late Sheikh Khalifa bin Zayed Al Nahyan. The Abu Dhabi Human Resources Authority (HRA) is a government body with independent entity and full legal autonomy. The HRA reports to the Abu Dhabi Executive Council, and was created to replace the Abu Dhabi Tawteen Council, the Civil Services Sector, and the Abu Dhabi Government Leadership Centre at the Council’s General Secretariat.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Asp.Net Core",
        color: "pink-text-gradient",
      },
      {
        name: "Boostrap",
        color: "green-text-gradient",
      },
      {
        name: "HTML5 & CSS3",
        color: "pink-text-gradient",
      },
     
    ],
    image: hra,
    source_code_link: "  https://hra.gov.ae/",
  },
  
  {
    name: "HRA-HUB(Abu Dhabi)",
    description:
      "Human Resources Authority Abu Dhabi e-Services System.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Asp.Net Core",
        color: "pink-text-gradient",
      },
      {
        name: "TRPC",
        color: "blue-text-gradient",
      },
      {
        name: "Boostrap",
        color: "green-text-gradient",
      },
      {
        name: "HTML5 & CSS3",
        color: "pink-text-gradient",
      },
     
    ],
    image: hra2,
    source_code_link: "https://hub.hra.gov.ae/",
  },

  {
    name: "Malkiyat",
    description:
      "Malkiyat is a technology platform to make property buying and selling frictionless. For the very first time, buy and sell property on a swipe with just Rs 20,000.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Asp.Net Core",
        color: "pink-text-gradient",
      },
      {
        name: "TRPC",
        color: "blue-text-gradient",
      },
     
    ],
    image: mal,
    source_code_link: "https://play.google.com/store/apps/details?id=com.malkiyat",
  },

  
];

export { services, technologies, experiences, testimonials, projects };
