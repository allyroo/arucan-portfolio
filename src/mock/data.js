import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'portprofile.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://docs.google.com/document/d/1wbAVnj1H5lGtI4v5L3NoveBKm9gwj9l83xaI0v0-puo/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'superbloom.png',
    title: 'Superbloom',
    info: 'A self-development React application. Aimed to solve a gap I observed for the user experience in the Noom app as a health coach. Features a dashboard where one is able to track a habit they are building and create journal entries. ',
    info2: '',
    url: '',
    repo: 'https://github.com/allyroo/SuperbloomReactApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'reverseRecipe.png',
    title: 'Reverse Recipes',
    info: 'A recipe-finding Javascript application featuring TheMealDB API. Type in an ingredient and you will receive recipes based on the item. Modal displays directions, dietary category, and link to video of recipe.',
    info2: '',
    url: '',
    repo: 'https://github.com/allyroo/reverseRecipes', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weatherApp.png',
    title: "What's the Weather Like?",
    info: 'A fun and simple Javascript application featuring the OpenWeather API. Input your desired city and city-specific weather information is displayed on the grid.',
    info2: '',
    url: '',
    repo: 'https://github.com/allyroo/WeatherApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'CRM.png',
    title: 'Totally Real CRM',
    info: 'A collaborative HTML and CSS customer relationship management site. Updates were made using Github and Git commands.',
    info2: '',
    url: '',
    repo: 'https://github.com/Raenllanthos/CRMMockup', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'allyse.dev@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/allysedotdev',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/allyse-arucan-422236b7/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/allyroo',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
