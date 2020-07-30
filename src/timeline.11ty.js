exports.data = {
  layout: "base",
  permalink: "/timeline/",
  title: "Timeline",
  timelineItems: [
    {
      year: 2021,
      heading: "Goal Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et ante tincidunt, mattis lectus sit amet, fermentum risus. Nam et elit tempus, blandit ante fringilla, laoreet nisi. Cras malesuada tincidunt purus, sit amet scelerisque est tristique non. Integer imperdiet sed dolor ut laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    },
    {
      year: 2025,
      heading: "Goal Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et ante tincidunt, mattis lectus sit amet, fermentum risus. Nam et elit tempus, blandit ante fringilla, laoreet nisi. Cras malesuada tincidunt purus, sit amet scelerisque est tristique non. Integer imperdiet sed dolor ut laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    },
    {
      year: 2025,
      heading: "Goal Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et ante tincidunt, mattis lectus sit amet, fermentum risus. Nam et elit tempus, blandit ante fringilla, laoreet nisi. Cras malesuada tincidunt purus, sit amet scelerisque est tristique non. Integer imperdiet sed dolor ut laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    },
    {
      year: 2040,
      heading: "Goal Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et ante tincidunt, mattis lectus sit amet, fermentum risus. Nam et elit tempus, blandit ante fringilla, laoreet nisi. Cras malesuada tincidunt purus, sit amet scelerisque est tristique non. Integer imperdiet sed dolor ut laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    },
    {
      year: 2030,
      heading: "Goal Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et ante tincidunt, mattis lectus sit amet, fermentum risus. Nam et elit tempus, blandit ante fringilla, laoreet nisi. Cras malesuada tincidunt purus, sit amet scelerisque est tristique non. Integer imperdiet sed dolor ut laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    },
  ],
};

const line = `
<div class="w-4 h-full mt-5 -ml-2 left-in md:left-1/2 rounded bg-blue-700 absolute"></div>
<div class="w-4 h-full mt-5 -ml-2 left-in md:left-1/2 rounded bg-blue-700 fixed"></div>
`;

const timelineItem = ({ year, heading, description }) => `
  <div class="
          pt-0
          p-3
          m-2
          mb-12
          md:-mb-20
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
      md:-mx-20
      lg:-mx-28
  ">${year}<p>
  <h2 class="text-bold text-2xl -mt-8 lg:-mt-12">${heading}</h2>
  <p class="">${description}<p>
  </div>
  `;

exports.render = ({ timelineItems, timelineColor }) => `
  <a href="javascript:history.back()">
    <svg class="w-4 inline pb-1" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z" fill="currentColor"/>
    </svg>
    back
  </a>
  <h1 class="p-12 pb-0 text-4xl text-center">SDG Goals</h1>

  <section id="timeline" class="flex flex-col p-4 md:p-12 w-full mb-48">

    ${line}

    ${timelineItems
      .sort((a, b) => a.year - b.year)
      .map(timelineItem)
      .join("")}
  </section>
`;