exports.data = {
  layout: "base",
  permalink: "/actions/",
  title: "Actions | BWV Womanifesto SDG Mapping",
  eleventyComputed: {
    actions: ({ comments, targets }) =>
      comments
        .filter((c) => c.text && c.text.includes("BWV Action"))
        .map((comment) => {
          const splitText = comment.text.split(":** ");
          return {
            linkedTargets: targets.filter((t) =>
              comment.linkedTarget.includes(t.id)
            ),
            text: splitText[1] ? splitText[1] : splitText[0],
          };
        }),
  },
  // color:
  // debug: ({ timelineItems }) => console.log("item", timelineItems[0]),
};

exports.render = function ({ actions }) {
  return `
  <a href="javascript:history.back()">
    <svg class="w-4 inline pb-1" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z" fill="currentColor"/>
    </svg>
    back
  </a>

  <h1 class="p-8 pb-0 text-2xl md:text-4xl text-center">
    Reccomended Actions
  </h1>


  <div class="p-4 md:p-12 grid grid-cols-1 sm:grid-cols-2"
  >
    ${actions
      .map(
        ({ text, linkedTargets }) => `<div class="
          flex-1 p-4 m-4 rounded
          bg-white bg-opacity-50
          ">
            ${this.markdown(text)}

            <div class="mt-4 grid
                ${linkedTargets.length > 2 ? "md:grid-cols-2" : "grid-cols-1"}">
              ${linkedTargets
                .map(
                  (target) => `
                  <a
                    href="../${this.slug(target.linkedWomanifestoTitle)}/${
                    target.linkedSdgId
                  }/#${target.year}-${this.slug(target.title).substring(0, 20)}"
                    class="truncate rounded bg-blue-300 hover:bg-blue-500 text-xs p-1 m-1">
                      ${target.year}: ${target.title}
                </a>
                `
                )
                .join("")}
            </div>
          </div>`
      )
      .join("")}
      
  </div>
`;
};
