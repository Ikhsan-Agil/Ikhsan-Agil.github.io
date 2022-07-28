// for responsive navbar
const hamburger = document.getElementById("hamburger");
let navbar = document.querySelector("nav");
let list = document.querySelector("ul");
let container = document.querySelector("container");
let close = document.getElementById("close");

hamburger.addEventListener("click", function (event) {
  navbar.classList.add("nav-click");
  list.setAttribute(
    "style",
    "display: flex; flex-direction: column; margin-left: 0;"
  );
  hamburger.setAttribute("style", "display: none;");
  close.setAttribute("style", "display: block;");
});

close.addEventListener("click", function (event) {
  navbar.classList.remove("nav-click");
  hamburger.setAttribute("style", "display: block;");
  close.setAttribute("style", "display: none;");
});

// for navigation button
let skillNav = document.querySelector("#skillNav");
let projectNav = document.querySelector("#projectNav");
let certificationNav = document.querySelector("#certificationNav");
let activitiesNav = document.querySelector("#activitiesNav");
let h1 = document.querySelector("h1");
let hpMedia = window.matchMedia("(max-width: 480px)");
let littleTabMedia = window.matchMedia("(max-width: 840px)");

skillNav.addEventListener("click", function (event) {
  skillNav.setAttribute("style", "text-shadow: 2px 2px 10px #ffffff;");
  projectNav.setAttribute("style", "text-shadow: none;");
  certificationNav.setAttribute("style", "text-shadow: none;");
  activitiesNav.setAttribute("style", "text-shadow: none;");
  if (hpMedia.matches || littleTabMedia.matches) {
    navbar.classList.remove("nav-click");
    hamburger.setAttribute("style", "display: block;");
    close.setAttribute("style", "display: none;");
  }
});

projectNav.addEventListener("click", function (event) {
  skillNav.setAttribute("style", "text-shadow: none;");
  projectNav.setAttribute("style", "text-shadow: 2px 2px 10px #ffffff;");
  certificationNav.setAttribute("style", "text-shadow: none;");
  activitiesNav.setAttribute("style", "text-shadow: none;");
  if (hpMedia.matches || littleTabMedia.matches) {
    navbar.classList.remove("nav-click");
    hamburger.setAttribute("style", "display: block;");
    close.setAttribute("style", "display: none;");
  }
});

certificationNav.addEventListener("click", function (event) {
  skillNav.setAttribute("style", "text-shadow: none;");
  projectNav.setAttribute("style", "text-shadow: none;");
  certificationNav.setAttribute("style", "text-shadow: 2px 2px 10px #ffffff;");
  activitiesNav.setAttribute("style", "text-shadow: none;");
  if (hpMedia.matches || littleTabMedia.matches) {
    navbar.classList.remove("nav-click");
    hamburger.setAttribute("style", "display: block;");
    close.setAttribute("style", "display: none;");
  }
});

activitiesNav.addEventListener("click", function (event) {
  skillNav.setAttribute("style", "text-shadow: none;");
  projectNav.setAttribute("style", "text-shadow: none;");
  certificationNav.setAttribute("style", "text-shadow: none;");
  activitiesNav.setAttribute("style", "text-shadow: 1px 1px 10px #ffffff;");
  if (hpMedia.matches || littleTabMedia.matches) {
    navbar.classList.remove("nav-click");
    hamburger.setAttribute("style", "display: block;");
    close.setAttribute("style", "display: none;");
  }
});

h1.addEventListener("click", function (event) {
  skillNav.setAttribute("style", "text-shadow: none;");
  projectNav.setAttribute("style", "text-shadow: none;");
  certificationNav.setAttribute("style", "text-shadow: none;");
  activitiesNav.setAttribute("style", "text-shadow: none;");
  if (hpMedia.matches || littleTabMedia.matches) {
    navbar.classList.remove("nav-click");
    hamburger.setAttribute("style", "display: block;");
    close.setAttribute("style", "display: none;");
  }
});

// for skill button

const hardSkillBtn = document.getElementById("hardSkillBtn");
const softSkillBtn = document.getElementById("softSkillBtn");
let hardSkill = document.querySelector(".hardSkillDesc");
let softSkill = document.querySelector(".softSkillDesc");

softSkillBtn.addEventListener("click", function (event) {
  softSkill.setAttribute("style", "display: flex;");
  softSkillBtn.setAttribute(
    "style",
    "border-bottom: 4px solid #eeeeee; color: #eeeeee; font-weight: 600;"
  );
  hardSkill.setAttribute("style", "display: none;");
  hardSkillBtn.setAttribute(
    "style",
    "border-bottom: 2px solid #a6a6a6; color: #a6a6a6;"
  );
});

hardSkillBtn.addEventListener("click", function (event) {
  hardSkill.setAttribute("style", "display: flex;");
  hardSkillBtn.setAttribute(
    "style",
    "border-bottom: 4px solid #eeeeee; color: #eeeeee; font-weight: 600;"
  );
  softSkill.setAttribute("style", "display: none;");
  softSkillBtn.setAttribute(
    "style",
    "border-bottom: 2px solid #a6a6a6; color: #a6a6a6;"
  );
});
