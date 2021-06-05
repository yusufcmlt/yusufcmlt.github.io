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
    title: "Guess The Drawing / Multiplayer Pictionary Game",
    video: cizimOyunuVid,
    image: cizimOyunuImg,
    links: {
      github: "https://github.com/yusufcmlt/cizim-oyunu",
      web: "http://cizimoyunu.github.io",
    },
    text: "A web based multiplayer game that players try to guess each other's drawings. Players can create game rooms and others can join randomly on permission or with a key. I've used Socket.io for communication, React for UI, p5.js for drawing and Firebase Realtime Database for config database.",
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
    text: "E-commerce app that is selling nuts. Created with React and Firebase. Users can list products,categories, buy products, use cart and manage addresses. Users can also manage products and categories as an admin. I've used React Context Api and Hooks for managing app state, React Router for routing. On the backend; i've used Firebase Firestore for database management and Firebase Storage for file management.",
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
    text: "A smart home prototype with NodeMCU microcontroller. On finished project with user interface, users can toggle leds,fans and view realtime informations,charts such as temperature, humidity, smoke data . Created with React,and Firebase Realtime Database.",
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
    text: "Projects that i've done as a part of freeCodeCamp front-end libraries curriculum. Pomodoro clock, calculator, drum machine, markdown editor and random quote apps.",
    tags: ["React", "FreeCodeCamp", "Hooks"],
  },
];

export default projectList;
