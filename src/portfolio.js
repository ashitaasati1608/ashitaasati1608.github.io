
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Ashita Asati",
  title: "Hi all, I'm Ashita",
  subTitle: emoji(" Experienced Android Developer 🚀 with a demonstrated history of working in the information technology and services industry. Skilled in Kotlin, Android, Core Java, Reactive programming, Architecture patterns, Dependency injection, TDD, instrumentation testing, and have hands-on on various project management tools like BitBucket, JIRA, Pivotal Tracker. Strong engineering professional with a B.E. focused on Electronics and communications from MIET, Gondia, Nagpur University. I am interested in Android application development and Testing. I always look up for more challenging roles and uplift my skills. Live in the country with an extensive coastline and would love to travel all over the globe. Very flexible and moveable long and short term."),
  resumeLink: ""
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/ashitaasati1608",
  linkedin: "https://www.linkedin.com/in/ashita-asati",
  gmail: "ashitasati1608@gmail.com",
  twitter: "https://twitter.com/asatiashita"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "Android Apps Developer",
  skills: [
    emoji("⚡ Develop highly interactive User Interfaces for your mobile applications"),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "kotlin",
      fontAwesomeClassname: "fas fa-vial"
    },
    {
      skillName: "Dependency Injection",
      fontAwesomeClassname: "fas fa-vial"
    },
    {
      skillName: "Design Patterns",
      fontAwesomeClassname: "fas fa-vial"
    },
    {
      skillName: "unit testing",
      fontAwesomeClassname: "fas fa-vial"
    },

    {
      skillName: "Rest API",
      fontAwesomeClassname: "fas fa-vial"
    },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Android Development",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Kotlin",
      progressPercentage: "80%"
    },
    {
      Stack: "Java",
      progressPercentage: "90%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Consultant",  
      company: "Deloitte Digital",
      companylogo: require("./assets/images/deloitte_logo.webp"),
      date: "May 2019 – Present",
      desc: "Google Android Developer",
      descBullets: [
        "Working as Android Developer",
        "I have joined deloitte as a Business Technology Analyst an year back and currently working as consultant.",
        "I have contributed in projects estimations, suggested new features to the client.",
        "I am responsible for understanding the client's requirements and development of the features and deliver them on time, bug-free."
      ]
    },
    {
      role: "System Engineer",   
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/TCS.jpg"),
      date: "April 2016 – April 2019",
      desc: "Google Android Developer",
      descBullets: [
        "Worked as Android Developer",
        "Worked on multiple projects as developer, contributed in project architecture and was a part of project estimation.",
        "In my three years of tenure with TCS, I got the opportunity to work in multiple domains.",
        "I worked as a junior developer in ICICI Prudential and SBI.",
        "For Singapore Airlines, I took the lead from offshore and made sure every feature get delivered on time. I was responsible for helping the team in understanding the client's requirements, developing complex features, and helping the team with their issues."
      ]
    },

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "ashitaasati1608", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "Apps that I built",
  projects: [
    {
      title: "Chipotle Mexican Grill",
      subTitle:"Chipotle Mexican Grill, Inc., often known simply as Chipotle, is an American chain of fast casual restaurants in the United States, United Kingdom, Canada, Germany, and France, specializing in tacos and Mission-style burritos.",
      image: require("./assets/images/chipotle-logo.png"),
      link: ""
    },
    {
      title: "Singapore Airlines",
      image: require("./assets/images/sa-logo.png"),
      link: ""
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Applause Award",
      subtitle: "Chipotle Mexican Grill – 2019",
      image: require("./assets/images/reward_icon.png"),
      footerLink: [
      ]
    },
    {
      title: "On the Spot Award ",
      subtitle: "Singapore Airlines - 2018",
      image: require("./assets/images/reward_icon.png"),
      footerLink: [
    
      ]
    },
    {
      title: "On the Spot Award ",
      subtitle: "ICICI Prudential - 2017",
      image: require("./assets/images/reward_icon.png"),
      footerLink: [
        /* { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" } */
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/swlh/implementing-in-app-updates-in-android-26ea27609bd2",
      title: "Implementing In-App Updates in Android",
      description: "Learn about the new approach to in-app updates that are provided by the play core library."
    },
    {
      url: "https://medium.com/@ashitaasati1608/android-navigation-component-89174d51b690",
      title: "Android Navigation Component",
      description: "Learn about Navigation component and how to implement it."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
 // number: "+92-3243454077",
  email_address: "ashitaasati1608@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
