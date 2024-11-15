const projects = [
  {
    id: "1",
    title: "Créez la page d'accueil d'une agence de voyage avec HTML & CSS",
    cover: process.env.PUBLIC_URL + "/images/projet_2_page.png",
    pictures: [
      process.env.PUBLIC_URL + "/images/projet_2_code.png",
      process.env.PUBLIC_URL + "/images/projet_2_page.png"
    ],
    description: "Un projet de développement front-end pour créer la page d'accueil d'une agence de voyage en utilisant HTML et CSS.",
    equipments: ["HTML", "CSS"],
    tags: ["HTML", "CSS", "Front-end"],
    githubLink: "https://github.com/Nicojoun/booki_project_1"
  },
  {
    id: "2",
    title: "Créez une application web de location immobilière avec React",
    cover: process.env.PUBLIC_URL + "/images/projet_6_page.png",
    pictures: [
      process.env.PUBLIC_URL + "/images/projet_6_code.png",
      process.env.PUBLIC_URL + "/images/projet_6_page.png"
    ],
    description: "Développement d'une application de location immobilière avec React, incluant la gestion d'annonces et une interface utilisateur réactive.",
    equipments: ["HTML", "CSS", "JavaScript", "React"],
    tags: ["React", "JavaScript", "Front-end"],
    githubLink: "https://github.com/Nicojoun/Kasa_Dev"
  },
  {
    id: "3",
    title: "Développez le back-end d'un site de notation de livres",
    cover: process.env.PUBLIC_URL + "/images/projet_7_page.png",
    pictures: [
      process.env.PUBLIC_URL + "/images/projet_7_code.png",
      process.env.PUBLIC_URL + "/images/projet_7_page.png"
    ],
    description: "Développement du back-end d'un site de notation de livres, avec gestion de l'authentification.",
    equipments: ["Node.js", "Express", "MongoDB"],
    tags: ["Back-end", "Node.js", "MongoDB"],
    githubLink: "https://github.com/Nicojoun/grimoire_project_7"
  }
];

export default projects;
