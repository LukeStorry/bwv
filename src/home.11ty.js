exports.data = {
  layout: "base",
  title: "Wo-Manifesto",
  permalink: "/",
};

const sectionBox = ({ heading, color }) => `
<a href="/${heading.toLowerCase()}/"
  class="
      flex justify-center items-center
      text-2xl 
      transition-all
      duration-1000
      hover:text-5xl
      focus:text-5xl
      hover:z-50
      focus:z-50
      transform
      active:scale-150
      ${color}
      "
>
  <h2>${heading}</h2> </a
>`;

exports.render = ({ title, sections }) => `
<div class="
      grid
      grid-cols-1
      sm:grid-cols-2
      h-full
      min-h-screen
      w-full">
  ${sections.map(sectionBox).join("")}
</div>
`;
