exports.data = {
  layout: "base",
  pagination: {
    data: "sections",
    size: 1,
    alias: "section",
  },
  permalink: ({ section }) => `/${section.title.toLowerCase()}/`,

  eleventyComputed: {
    title: ({ section }) => section.title,
    color: ({ section }) => section.color,
    // colours: ({pagination: { pages } }) => pages.map((p) => p.color),
    // debug: ({ section }) =>console.log("-------------", {d:section.details.split("\\n")}),
  },
};

exports.render = ({ section }) => `
  <a href="/">
    <svg class="w-4 inline pb-1" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z" fill="currentColor"/>
    </svg>
    back
  </a>
  
  <h1 class="p-12 text-4xl text-center">${section.title}</h1>

  ${section.details
    .split("\\n")
    .map((p) => `<p class="text-lg text-center">${p}</p>`)
    .join("")}

  <div
    class="
      p-12
      grid
      grid-cols-1
      sm:grid-cols-2
      "
  >
    ${[1.1, 2.3, 3.4, 2.3, 2.2, 7.8, 5.2, 1.9, 6.4]
      .map(
        (a) => `
    <a href="/timeline"
        class="
          border
          border-white
          flex
          justify-center
          items-center
          text-xl
          hover:bg-gray-300
          p-10
          "
    >${a}</a>
    `
      )
      .join("")}
`;
