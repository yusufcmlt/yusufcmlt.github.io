import cizimOyunuImg from "../assets/project-images/cizim-oyunu1.png";
import nodemcuImg from "../assets/project-images/nodemcu.png";
import freecodecampImg from "../assets/project-images/freecodecamp-gif.gif";
import ecommerceImg from "../assets/project-images/ecommerce.png";
const projectList = [
  {
    title: "Guess The Drawing / Online Pictionary Clone",
    image: cizimOyunuImg,
    links: {
      github: "https://github.com/yusufcmlt/cizim-oyunu",
      web: "http://cizimoyunu.github.io",
    },
    text: "Multiplayer drawing game with React, Socket.io and p5.js.",
    tags: ["React", "SocketIO", "Firebase", "Hooks", "p5.js"],
  },
  {
    title: "NodeMCU Smart Home System Interface",
    image: nodemcuImg,
    links: {
      github:
        "https://github.com/yusufcmlt/nodemcu-home-project/tree/client-refactor/nodemcu-client",
      web: "https://yusufcmlt.github.io/nodemcu-home-project/",
    },
    text:
      "A smart home prototype with NodeMCU microcontroller, react and firebase as user interface.",
    tags: ["NodeMCU", "Firebase", "React", "Hooks"],
  },
  {
    title: "FreeCodeCamp Front End Projects",
    image: freecodecampImg,
    links: {
      github: "https://github.com/yusufcmlt/freecodecamp-projects",
      web: "https://github.com/yusufcmlt/freecodecamp-projects",
    },
    text:
      "Projects that i've done as a part of FreeCodeCamp front-end developer curriculum. Pomodoro clock, calculator, drum machine, markdown editor and random quote apps.",
    tags: ["React", "FreeCodeCamp", "Hooks"],
  },
  {
    title: "React E-commerce App / WearSomtn",
    image: ecommerceImg,
    links: {
      github:
        "https://github.com/yusufcmlt/react-ecommerce/tree/backend/client",
      web: "https://yusufcmlt.github.io/react-ecommerce/",
    },
    text:
      "E-commerce app with React and Redux. Firebase as database. I've started this project as part of a udemy course but then implemented responsive design, admin dashboard, item searching and individual item pages.",
    tags: ["React", "Redux", "Firebase", "Hooks"],
  },
];

export default projectList;
