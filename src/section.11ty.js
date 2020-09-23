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
    title: ({ womanifestoItem }) =>
      womanifestoItem.title + " | BWV Womanifesto SDG Mapping",
    color: ({ womanifestoItem }) => womanifestoItem.color,
    linkedSdgs: ({ womanifestoItem }) => womanifestoItem.linkedSdgs,
    // debug: ({ womanifestoItem, targets }) => console.log("womanifestoItem", womanifestoItem),
  },
};

exports.render = ({ womanifestoItem, linkedSdgs, sdgs }) => `
  <a href="/">
    <svg class="w-4 inline pb-1" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    class="
      p-12
      grid
      grid-cols-1
      sm:grid-cols-2
      sm:mx-24
      lg:mx-48
      "
  >
    ${linkedSdgs
      .map(
        (sdg) => `
    <a href="${sdgs.find((s) => s.title === sdg).id}"
        class="
          border
          border-white
          flex
          justify-center
          items-center
          text-xl
          hover:bg-gray-300
          p-10
          text-center
          "
    >${sdg}</a>
    `
      )
      .join("")}
`;
