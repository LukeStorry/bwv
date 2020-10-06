exports.data = {
  layout: "base",
  title: "Wo-Manifesto",
  permalink: "/",
  padding: false,
};

// putting colours here so purgecss is happy
const colors = [
  "bg-pink-500",
  "bg-yellow-500",
  "bg-blue-500",
  "bg-orange-500",
  "bg-green-500",
  "bg-red-500",
];

exports.render = ({ womanifesto }) => `
<div class="flex flex-col h-screen">
  <div class="p-2 text-center bg-white">
    <h1 class="sm:text-3xl text-xl">BWV Womanifesto SDG Mapping</h1> 
    <a class="text-sm underline" href="about/">More Info Here</a>
  </div>
  
  <div class="sm:grid-cols-2 grid flex-1 w-full grid-cols-1">
    ${womanifesto
      .map(
        ({ title, color }) => `
    <a href="/${title.toLowerCase()}/"
      class="flex justify-center items-center text-2xl ${color}
      motion-safe:transition-all duration-1000
      motion-safe:transform
      motion-safe:hover:text-5xl
      motion-safe:focus:text-5xl
      motion-safe:active:scale-150"
    >
      <h2>${title}</h2> </a
    >`
      )
      .join("")}
  </div>
</div>
`;
