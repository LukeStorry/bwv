exports.data = {
  layout: "base",
  title: "Wo-Manifesto",
  permalink: "/",
};

const sectionBox = ({ heading, color }) =>
  `<a href="/${heading.toLowerCase()}/"
  class="
    flex justify-center items-center
    text-2xl 
    transition-all
    duration-1000
    hover:text-5xl
    focus:text-5xl
    ${color}
  ">
    <h2>${heading}</h2>
  </a>`;

// <h1 class="font-bold text-lg text-center">${title}</h1>
exports.render = ({ title, sections }) => `
  <div class="grid grid-cols-1 sm:grid-cols-2 h-full min-h-screen w-full">
    ${sections.map(sectionBox).join("")}
  </div>`;
