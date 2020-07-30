exports.render = function (data) {
  return `
  <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="A mapping of the Bristol Womens' Voice Womanifesto to the Bristol Sustainable Development Goals"/>
        <title>${data.title ? data.title + " | " : ""}BWV-SDGs</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/icon"/>
        <link rel="stylesheet" href="/style.css"/>
      </head>
      <body class="bg-gray-800 w-full h-full min-h-screen">
        <main class="max-w-screen-xl bg-white w-full h-full mx-auto">
          ${data.content}
        <main>
      </body>
    </html>
    `;
};
