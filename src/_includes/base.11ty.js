exports.render = function (data) {
  return `
  <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta
      name="description"
      content="A mapping of the Bristol Womens' Voice Womanifesto to the Bristol Sustainable Development Goals"
    />
      <link rel="stylesheet" href="/style.css"/>
      <title>${data.title ? data.title + " | " : ""}BWV-SDGs</title>
      </head>
      <body>
        ${data.content}
      </body>
    </html>
    `;
};
