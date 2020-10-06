exports.data = {
  layout: "base",
  pagination: {
    data: "womanifesto",
    size: 1,
    alias: "womanifestoItem",
  },
  permalink: ({ womanifestoItem }) =>
    `/${womanifestoItem.title.toLowerCase()}/`,

  eleventyComputed: {
    title: ({ womanifestoItem }) => womanifestoItem.title,
    color: ({ womanifestoItem }) => womanifestoItem.color,
    linkedSdgs: ({ womanifestoItem }) => womanifestoItem.linkedSdgs,
    // debug: ({ womanifestoItem, targets }) => console.log("womanifestoItem", womanifestoItem),
  },
};

exports.render = ({ womanifestoItem, linkedSdgs, sdgs }) => `
  <a href="/">
    <svg class="inline w-4 pb-1" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z" fill="currentColor"/>
    </svg>
    back
  </a>

  <h1 class="p-12 text-4xl text-center">${womanifestoItem.title}</h1>

  ${womanifestoItem.details
    .split("\\n")
    .map((p) => `<p class="p-4 text-xl text-center">${p}</p>`)
    .join("")}

  <div
    class=" sm:mx-24 lg:mx-48 sm:grid-cols-2 grid grid-cols-1 p-12"
  >
    ${linkedSdgs
      .map(
        (sdg) => `
    <a href="${sdgs.find((s) => s.title === sdg).id}"
        class=" hover:bg-white flex items-center justify-center p-10 text-xl text-center border border-white"
    >${sdg}</a>
    `
      )
      .join("")}
      
  </div>
`;
