import health from "../assets/health.png"
import todo from "../assets/todo.png"
import Elearning from "../assets/E-Learning.png"
export const HERO_CONTENT="I am a dedicated full-stack developer with a talent for building strong and scalable web applications. I've sharpened my skills in front-end technologies like HTML, CSS, Javascript, and React , as well as back-end technologies like Node.js, and MySQL. My aim is to use my expertise to create innovative solutions that help businesses grow and provide outstanding user experiences."

export const ABOUT_TEXT="I am a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications. I have experience with technologies like React, Node.js, and MySQL. My journey in web development began with a curiosity about how things work. I thrive in team environments and enjoy solving problems to deliver high-quality solutions. Outside of coding, I like staying active, exploring new technologies, and contributing to open-source projects."

export const EXPERIENCES=[
    {
       month:"Jan - Feb 2024",
       role:"Research Intern",
       company:"PICT MODROB Pune Research Lab " ,
       description:"The research paper, Performance Evolution and Comparison of LANMAR and LAR1 Using QualNet, has been accepted for publication by Springer. This project,  delves into the comparative analysis of two prominent mobile ad hoc network (MANET) routing protocols, LANMAR (Landmark Ad Hoc Routing) and LAR1 (Location-Aided Routing), using the QualNet network simulator. Through this study, we evaluated the performance metrics of these protocols, highlighting their efficiency and scalability in various network scenarios.",
       technologies:["Qualnet Software"],
    },
    {
        month:"Feb - Apr 2024",
        role:"Software Intern",
        company:"Bitsolve Technologies PVT. LTD.",
        description:"As a Web Development Intern, I gained hands-on experience in front-end development, working extensively with React, HTML, CSS, and JavaScript. I was responsible for designing and implementing user-friendly web interfaces, enhancing website responsiveness, and ensuring cross-browser compatibility.",
        technologies:["HTML", "CSS", "React js", "mySQL"],
    },
];

export const PROJECTS=[
    {
        title:"Health Management Website",
        image:health,
        description:" Made a device using ESP 8266. Pulse Sensor Temperature Sensor which was divided into two parts first detects the minor health issues and second solves the problem of anxiety by suggesting yoga possess, Good Thoughts of the day and many more. Integrated this hardware part with Website",
        technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
    },
    {
        title:"To do List",
        image:todo,
        description:"Created a user-friendly to-do list web app. The app lets users easily add, view, and delete tasks, with a clean and responsive design thanks to Bootstrap. Firebase Firestore was used to store tasks, allowing for instant updates whenever changes are made. This project showcases skills in both front-end and back-end development, making a functional and interactive tool for managing tasks.",
        technologies: ["HTML", "CSS", "Javascript", "Bootstrap","Firebase"],
    },
    {
        title:"SMART LEARNERS",
        image:Elearning,
        description:"Smart Learners is an online educational platform designed to make education accessible to everyone. The platform features role-based access and authentication to cater to different user needs. Admins have comprehensive control, allowing them to enlist and delete courses, and perform statistical analysis on the number of courses, lectures, and user enrollments. Users can access courses they have enrolled in, with the ability to purchase courses through an integrated payment gateway, ensuring a seamless and secure learning experience.",
        technologies: ["React JS,", "Express Js", "MongoDB", "Node Js"],
    },

   

];
export const CONTACT = {
    address: "Pune,Maharashtra ",
    phoneNo: "8652390575 ",
    email: "siddhiove0407@gmail.com",
  };