exports.data = {
  layout: "base",
  title: "Wo-Manifesto",
  permalink: "/",
  padding: false,
};

const sectionBox = ({ heading, color }) => `
<a href="/${heading.toLowerCase()}/"
  class="
      flex justify-center items-center
      text-2xl 
      motion-safe:transition-all
      duration-1000
      motion-safe:transform
      motion-safe:hover:text-5xl
      motion-safe:focus:text-5xl
      motion-safe:hover:z-50
      motion-safe:focus:z-50
      motion-safe:active:scale-150
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
