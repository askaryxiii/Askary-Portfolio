import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock6 from "../img/mock6.png";
import mock7 from "../img/mock7.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(157, 140, 144)", "rgb(88, 50, 50)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Ahmed",
  lastName: "Al-Askary",
  initials: "AA", // the example uses first and last, but feel free to use three or more if you like.
  position: "a ReactJS Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "🧑‍💻",
      text: "fueled by ambition",
    },
    {
      emoji: "🌎",
      text: "based in Egypt",
    },
    {
      emoji: "💼",
      text: "Looking for an opportunity",
    },
    {
      emoji: "📧",
      text: "ahm.alaskaryh@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://www.facebook.com/askary13/",
      icon: "fa fa-facebook",
      label: "facebook",
    },

    {
      link: "https://github.com/askaryxiii",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/ahm-alaskary",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },

    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Ahmed. I'm a Front End Developer specializing in ReactJS. I studied Computer Science at Misr University for Science & Technology, I enjoy a good football game, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "contextAPI",
      "JSON server",
      "redux toolkit",
      "git",
      "github",
      "bootstrap",
      "tailwind",
      "html5",
      "css3",
      "figma",
    ],
    exposedTo: ["nodejs", "C++", "Dart", "Java"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "football",
      emoji: "⚽️",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "video games",
      emoji: "🎮",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "MovieMaze",
      description: `MovieMaze is a collaborate Movies details website made with ReactJS with TailwindCSS, Redux Toolkit and RESTfull APIs with GET and POST methods, 
      To view movies details, reviews, cast, recommendations, search and cast information. with login/signup, writing reviews and adding to favorite `,
      live: "https://aflam-psi.vercel.app/",
      source: "https://github.com/engmo159/aflam",
      image: mock7,
    },
    {
      title: "DressAura",
      description: `DressAura is a E-Commerce website made with ReactJS with TailwindCSS, ContextAPI and RESTfull APIs with GET and POST methods, 
      with a Dashboard to edit products and users, Authentication and Shooping Cart, Dark & Light mode `,
      live: "https://dress-aura.vercel.app/",
      source: "https://github.com/askaryxiii/DressAura",
      image: mock6,
    },
    {
      title: "MEMEs",
      description:
        "memes project is the first project ever to work with APIs, it's a simple App to show you a random MEME from a number you type, Created as DEPI project",
      live: "https://memes-teal-three.vercel.app/",
      source: "https://github.com/askaryxiii/Memes.git",
      image: mock4,
    },
    {
      title: "lingulas",
      description: `lingulas is a translate app made with HTML, CSS, JS, with RESTfull APIs with GET and POST methods, 
      It's second time to work with APIs and first with POST method. Created as DEPI project`,
      live: "https://lingulas.vercel.app/",
      source: "https://github.com/askaryxiii/lingulas.git",
      image: mock3,
    },
    {
      title: "CALCX",
      description: `This calculator app had been created with HTML, CSS, and pure JS.
      this the first ever Web project to work on, It was an assignment from 
      Digital Egypt Pioneers Initiative - DEPI`,
      live: "https://calcx.vercel.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/askaryxiii/CALCX.git", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "Login / Signup",
      description: `This login and signup form had been created with HTML, CSS, and pure JS.
      this the second Web project to work on and the first with validation, Created as DEPI project`,
      live: "https://facebook-login-omega.vercel.app/",
      source: "https://github.com/askaryxiii/Facebook-login.git",
      image: mock2,
    },
  ],
};
