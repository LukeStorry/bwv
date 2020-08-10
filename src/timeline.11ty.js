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
        .flat(),
    alias: "pageData",
  },

  permalink: ({ pageData }) =>
    `/${pageData.womanifesto.toLowerCase()}/${pageData.sdg.id}/`,
  eleventyComputed: {
    timelineItems: ({ targets, pageData }) =>
      targets.filter((t) => pageData.sdg.linkedTargets.includes(t.id)),
    title: ({ pageData }) =>
      `Timeline of SDG targets for ${pageData.womanifesto} and ${pageData.sdg.title}`,
    debug: ({ timelineItems }) => console.log("timelineItems:", timelineItems),
  },
};

const timelineItem = ({ year, title }) => `
  <div class="
          pt-0
          p-3
          m-2
          my-6
          md:my-1
          w-5/6
          md:w-5/12
          lg:p-4

          md:even:text-right
          md:odd:text-left
          even:bg-blue-300
          odd:bg-blue-400
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
      lg:p-3
      w-fit
      rounded
      bg-blue-700

      border-2
      border-blue-200

      text-bold
      text-lg
      text-white
      tracking-widest

      -mx-20
      lg:-mx-28

  ">${year}</p>
  <p class="text-bold text-xl -mt-8 md:-mt-10 lg:-mt-16">${title}</p>
  </div>
  `;

exports.render = ({ timelineItems, pageData }) => `
  <a href="javascript:history.back()">
    <svg class="w-4 inline pb-1" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z" fill="currentColor"/>
    </svg>
    back
  </a>

  <h1 class="p-12 pb-0 text-4xl text-center">Timeline of SDG Targets</h1>

  <h2 class="p-12 pb-0 text-2xl text-center">For the intersection of the "<a href="${pageData.womanifesto.toLowerCase()}">${
  pageData.womanifesto
}</a>" Womanifesto item and the "${pageData.sdg.title}" SDG goal</h1>

  <div
  class="w-4 mt-8 left-in md:left-1/2 rounded bg-blue-700 sticky top-0
  ${
    timelineItems.length > 6
      ? "h-screen -mb-screen"
      : "h-screen-part -mb-screen-part"
  }
  "
  ></div>

  <section class="flex flex-col p-4 md:p-12 w-full mb-24">
    ${timelineItems
      .sort((a, b) => a.year - b.year)
      .map(timelineItem)
      .join("")}
  </section>
`;
