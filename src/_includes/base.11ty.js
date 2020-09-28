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

  <body class="
        bg-gray-800
        w-full
        h-full
        min-h-screen
        ">
    <main class="
          max-w-screen-xl
          min-h-screen
          ${padding ? "p-1 lg:p-4" : ""}
          ${color}
          w-full
          h-full
          mx-auto
          ">
      ${content}
    </main>
  </body>
</html>
`;
