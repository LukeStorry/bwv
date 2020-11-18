exports.data = {
  layout: "base",
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
    timelineItems: ({ targets, pageData, color, comments }) =>
      targets
        .filter((t) => pageData.sdg.linkedTargets.includes(t.id))
        .sort((a, b) => a.year - b.year)
        .map((target, i) => ({
          even: i % 2 == 0,
          comment: target.linkedComment
            ? comments.find((c) => target.linkedComment[0] == c.id).text
            : undefined,
          color,
          ...target,
        })),
    title: ({ pageData }) =>
      pageData.womanifesto
        ? `Timeline of SDG targets for ${pageData.womanifesto} and ${pageData.sdg.title}`
        : `Timeline of SDG targets for ${pageData.sdg.title}`,
    color: ({ pageData, womanifesto }) =>
      pageData.womanifesto
        ? womanifesto.find((w) => w.title === pageData.womanifesto).color
        : undefined,
    // debug: ({ timelineItems }) => console.log("item", timelineItems[0]),
  },
};

exports.render = function ({ timelineItems, pageData }) {
  return `
  <a href="javascript:history.back()">
    <svg class="inline w-4 pb-1" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z" fill="currentColor"/>
    </svg>
    back
  </a>

  <h1 class="md:text-4xl p-8 pb-0 text-2xl text-center">Timeline</h1>

  <h2 class="md:text-xl px-12 text-lg text-center">
  ${
    pageData.womanifesto
      ? `of relevant SDG Targets for the intersection of <br> the 
          <a class="underline" href="/${pageData.womanifesto.toLowerCase()}">
            ${pageData.womanifesto}
          </a> Womanifesto item and the
          <a class="underline" href="/${pageData.sdg.id}">
            ${pageData.sdg.title}
          </a> SDG goal.`
      : `of relevant SDG Targets for the <a class="underline" href="/${pageData.sdg.id}">${pageData.sdg.title}</a> SDG goal.`
  }
  </h2>

  <div class="left-in md:left-1/2 sticky top-0 w-4 mt-8 bg-black
  ${
    timelineItems.length < 5
      ? "h-screen-part -mb-screen-part"
      : "h-screen -mb-screen"
  }"></div>

  <section class="sm:p-2 md:p-4 lg:p-16 flex flex-col w-full mb-56">

    ${timelineItems
      .map(
        ({ year, title, color, even, comment = "" }) =>
          `
          <div id="${year}-${this.slug(title).substring(0, 20)}"
          class="
            md:w-1/2 md:mx-6 flex mb-8
            ${comment ? "md:-mb-16" : "md:-mb-0"}
            ${even ? "md:flex-row-reverse" : "md:flex-row"}
            ${even ? "md:mr-auto" : "md:ml-auto"}
          ">

            <p class="z-10 h-8 px-1 mx-auto mt-4 text-lg font-bold tracking-widest bg-white ${color} border-2 border-black rounded">
            ${year}
            </p>

            <div class="
            bg-white
              p-4 mx-2 md:mx-4
              bg-opacity-75
              ${even ? "md:text-right" : "md:text-left"}
            ">

              <p class="text-lg">${title}</p>
              <div class="comment ${color || "bg-blue-200"} p-2 mt-4 space-y-4 bg-opacity-25">
                ${this.markdown(comment)}
              </div>

            </div>

          </div>
    `
      )
      .join("")}
  </section>
  <p class="text-right">(${timelineItems.length} targets)</p>
`;
};
