const axios = require("axios");

exports.handler = async () => {
  const result = await axios
    .post("https://api.netlify.com/build_hooks/5f31382017794b4b1c66a9d7", {})
    .then((res) => res);
  return {
    statusCode: result.status,
    body: result.statusText,
  };
};
