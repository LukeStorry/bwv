exports.data = {
  layout: "base",
  title: "Wo-Manifesto | BWV Womanifesto SDG Mapping",
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
<div class="h-screen">
  <div class="bg-white text-center p-2">
    <h1 class="text-4xl">BWV Womanifesto SDG Mapping</h1> 
    <a class="underline" href="about/">More Info Here</a>
  </div>
  
  <div class="
      grid
      grid-cols-1
      sm:grid-cols-2
      h-full
      w-full">
    ${womanifesto
      .map(
        ({ title, color }) => `
    <a href="/${title.toLowerCase()}/"
      class="
          flex justify-center items-center
          text-2xl 
          motion-safe:transition-all
          duration-1000
          motion-safe:transform
          motion-safe:hover:text-5xl
          motion-safe:focus:text-5xl
          motion-safe:active:scale-150
          ${color}
          "
    >
      <h2>${title}</h2> </a
    >`
      )
      .join("")}
  </div>
</div>
`;
