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

const timelineItem = ({ year, heading, description }) => `
  <div class="
          p-2
          m-2
          mb-12
          md:-mb-12
          md:w-2/5
          lg:p-6
        

          md:even:text-right
          md:odd:text-left
          even:bg-blue-300
          odd:bg-blue-400
          even:self-start
          odd:self-end

          ">
  <p class="
      p-1
      w-fit
      rounded
      -mt-10
      -mx-4
      md:-my-10    
      md:pt-12 
      md:-pb-0
      md:-mx-20
      lg:-mx-24
      text-bold
      text-lg
      tracking-widest
      bg-blue-700
      text-white
  ">${year}<p>
  <h2 class="text-bold text-2xl">${heading}<h2>
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
  <h1 class="p-12 pb-0 text-4xl text-center">Timeline</h1>

  <section id="timeline" class="flex flex-col p-12 w-full">


    <div class="absolute w-2 h-full rotate-90 md:left-1/2 -m-4 bg-blue-700"></div>

    ${timelineItems
      .sort((a, b) => a.year - b.year)
      .map(timelineItem)
      .join("")}
  </section>
`;
