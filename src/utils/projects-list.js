import cizimOyunuImg from "../assets/project-images/cizim-oyunu1.png";
import nodemcuImg from "../assets/project-images/nodemcu.png";
import freecodecampImg from "../assets/project-images/freecodecamp-gif.gif";
import ecommerceImg from "../assets/project-images/ecommerce.png";

import cizimOyunuVid from "../assets/project-vids/cizimoyunu.mp4";
import nodemcuVid from "../assets/project-vids/nodemcu.mp4";
import ecommerceVid from "../assets/project-vids/ecommerce.mp4";
import freecodecampVid from "../assets/project-vids/freecodecamp.mp4";

const projectList = [
  {
    title: "Guess The Drawing / Online Pictionary Game",
    video: cizimOyunuVid,
    image: cizimOyunuImg,
    links: {
      github: "https://github.com/yusufcmlt/cizim-oyunu",
      web: "http://cizimoyunu.github.io",
    },
    text: "A web based multiplayer drawing game with React, Socket.io and p5.js.",
    tags: ["React", "SocketIO", "Firebase", "Hooks", "p5.js"],
  },
  {
    title: "React E-Commerce App ",
    image: ecommerceImg,
    video: ecommerceVid,
    links: {
      github: "https://github.com/yusufcmlt/react-ecommerce",
      web: "https://react-ecommerce-isyeri.web.app",
    },
    text: "E-commerce app with React and Firebase.",
    tags: ["React", "Context", "Firebase", "Hooks"],
  },
  {
    title: "NodeMCU Smart Home Protoype Web UI",
    image: nodemcuImg,
    video: nodemcuVid,
    links: {
      github: "https://github.com/yusufcmlt/nodemcu-home-project",
      web: "https://yusufcmlt.github.io/nodemcu-home-project/",
    },
    text: "A smart home prototype with NodeMCU microcontroller, react and firebase as user interface.",
    tags: ["NodeMCU", "Firebase", "React", "Hooks"],
  },
  {
    title: "freeCodeCamp Front End Projects",
    image: freecodecampImg,
    video: freecodecampVid,
    links: {
      github: "https://github.com/yusufcmlt/freecodecamp-projects",
      web: "https://github.com/yusufcmlt/freecodecamp-projects",
    },
    text: "Projects that i've done as a part of freeCodeCamp front-end developer curriculum. Pomodoro clock, calculator, drum machine, markdown editor and random quote apps.",
    tags: ["React", "FreeCodeCamp", "Hooks"],
  },
];

export default projectList;
