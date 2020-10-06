exports.render = ({
  title,
  content,
  color = "bg-blue-200",
  padding = true,
}) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="A mapping of the Bristol Womens' Voice Womanifesto to the Bristol Sustainable Development Goals"
    />
    <title>${title ? title + " | " : ""}BWV Womanifesto SDG Mapping</title>
    <link rel="shortcut icon" href="/favicon.ico" type="image/icon" />
    <link rel="stylesheet" href="/style.css" />
  </head>

  <body class=" w-full h-full min-h-screen bg-gray-800">
    <main class="
    w-full h-full max-w-screen-xl min-h-screen mx-auto
    ${padding ? "p-1 lg:p-4" : ""}
    ${color}
   ">
      ${content}
    </main>
  </body>
</html>
`;
