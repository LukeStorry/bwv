exports.data = {
  title: "Home",
  layout: "base",
  info: "hello",
  permalink: "/",
};

exports.render = ({ title, info }) => `
<h1>${title}</h1> 
<div class="fixed bg-red-400 inset-0 flex justify-center items-center">
<div>
  <span class="text-change">Good design</span><br/>
  <span class="change">is<br/>as little design<br/>as possible</span>
</div>
</div>
<p> ${info}<p>`;
