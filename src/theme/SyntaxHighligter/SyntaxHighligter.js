import React from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const Code = ({ code, colorMode, language }) => {
  const style = colorMode === "dark" ? atomDark : oneLight;

  return (
    <SyntaxHighlighter
      language={language}
      style={style}
      customStyle={{
        backgroundColor: "inherit",
        fontFamily: "'Fira Code', monospace",
      }}
      codeTagProps={{ style: { border: "none" } }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default Code;
