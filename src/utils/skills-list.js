const skillsList = [
  {
    title: "Languages",
    list: ["CSS", "HTML", "Javascript"],
  },
  {
    title: "Libraries,Frameworks",
    list: ["React", "React-Router", "Bootstrap"],
  },
  {
    title: "Tools & Other",
    list: ["Figma", "Firebase", "VsCode", "GIT", "NPM"],
  },
  {
    title: "Work in Progress",
    list: ["React-Redux", "SCSS", "Next.js", "Tailwind"],
  },
];

function randomNumber() {
  return Math.ceil(Math.random() * 10000);
}

export { skillsList, randomNumber };
