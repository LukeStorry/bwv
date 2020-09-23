exports.data = {
  layout: "base",
  title: "About | BWV Womanifesto SDG Mapping",
  permalink: "/about/",
  color: "bg-white",
};

exports.render = function ({ info }) {
  return `
<a href="/">
<svg class="w-4 inline pb-1" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z" fill="currentColor"/>
</svg>
back
</a>

<h1 class="p-12 text-4xl text-center">BWV Womanifesto SDG Mapping - About</h1>
<div class="p-12 text-lg space-y-4">
  ${this.markdown(info.find((i) => i.key === "about").text)}
</div>
`;
};
