import React from "react";
import tw, { css, theme } from "twin.macro";
import { Button } from "./../components";
import "tailwindcss/dist/base.min.css"

// Mix sass/css with values from your tailwind.config
const linearGradientStyle = css`
  background: linear-gradient(
    ${theme`colors.blue.300`},
    ${theme`colors.blue.800`}
  );
`;

const App = () => (
  <div
    css={[
      tw`flex flex-col items-center justify-center h-screen`,
      linearGradientStyle,
    ]}
  >
    Hello
    <Button isSecondary>Cancel</Button>
  </div>
);

export default App;
