exports.data = {
  layout: "base",
  title: "Timeline",
  pagination: {
    data: "sdgs",
    size: 1,
    before: (sdgs) =>
      sdgs
        .map((sdg) =>
          sdg.linkedWomanifesto.map((womanifesto) => ({ sdg, womanifesto }))
        )
        .flat()
        .concat(
          sdgs.filter((sdg) => sdg.linkedTargets).map((sdg) => ({ sdg }))
        ),
    alias: "pageData",
  },

  permalink: ({ pageData }) =>
    pageData.womanifesto
      ? `/${pageData.womanifesto.toLowerCase()}/${pageData.sdg.id}/`
      : `/${pageData.sdg.id}/`,
  eleventyComputed: {
    timelineItems: ({ targets, pageData, color }) =>
      targets
        .filter((t) => pageData.sdg.linkedTargets.includes(t.id))
        .map((i) => ({ color, ...i })),
    title: ({ pageData }) =>
      pageData.womanifesto
        ? `Timeline of SDG targets for ${pageData.womanifesto} and ${pageData.sdg.title}`
        : `Timeline of SDG targets for ${pageData.sdg.title}`,
    color: ({ pageData, womanifesto }) =>
      pageData.womanifesto
        ? womanifesto.find((w) => w.title === pageData.womanifesto).color
        : undefined,
    // debug: ({ color }) => console.log("color:", color),
  },
};

const timelineItem = ({ year, title, color }) => `
  <div class="
          p-2
          lg:p-4
          m-2
          my-6
          w-5/6
          md:w-5/12
          rounded
          
          bg-white
          odd:bg-opacity-50
          even:bg-opacity-75
          md:even:text-right
          md:odd:text-left
          md:even:self-start
          md:odd:self-end

          flex flex-col
          self-end
          md:even:items-end
          md:odd:items-start
          z-20

          ">
  <p class="
      z-10
      p-1
      md:p-2
      w-fit
      rounded
      bg-white
      ${color}

      border-2
      border-black

      font-bold
      text-lg
      tracking-widest
      
      -mx-20
      lg:-mx-28
      lg:-mt-4
  ">${year}</p>

  <p class="text-lg -mt-10 md:-mt-12 lg:-mt-8 ">${title}</p>

  </div>
  `;

exports.render = ({ timelineItems, pageData }) => `
  <a href="javascript:history.back()">
    <svg class="w-4 inline pb-1" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z" fill="currentColor"/>
    </svg>
    back
  </a>

  <h1 class="p-12 pb-0 text-2xl md:text-4xl text-center">Timeline of relevant SDG Targets</h1>

  <h2 class="p-12 pb-0 text-lg md:text-2xl text-center">
  ${
    pageData.womanifesto
      ? `For the intersection of the 
    <a class="underline" href="/${pageData.womanifesto.toLowerCase()}">${
          pageData.womanifesto
        }</a>
    Womanifesto item and the 
    <a class="underline" href="/${pageData.sdg.id}">${pageData.sdg.title}</a>
    SDG goal.`
      : `For the <a class="underline" href="/${pageData.sdg.id}">${pageData.sdg.title}</a> SDG goal.`
  }
  </h2>

  <div class="w-4 mt-8 left-in md:left-1/2 bg-black sticky top-0
  ${
    timelineItems.length < 5
      ? "h-screen-part -mb-screen-part"
      : "h-screen -mb-screen"
  }
  "
  ></div>

  <section class="flex flex-col p-4 md:p-12 w-full mb-56">
    ${timelineItems
      .sort((a, b) => a.year - b.year)
      .map(timelineItem)
      .join("")}
  </section>
  <p class="text-right">(${timelineItems.length} targets)</p>
`;
