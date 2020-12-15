import React from "react";
import { Box } from "rebass";

const Loader = () => {
  return (
    <Box
      sx={{
        pointerEvents: "none",
        width: "3em",
        height: "3em",
        border: "0.2em solid transparent",
        borderColor: "#eee",
        borderTopColor: "#3E67EC",
        borderRadius: "50%",
        animation: "loadingspin 1s linear infinite",
        "@keyframes loadingspin": {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      }}
    />
  );
};

Loader.displayName = "Loader";

export default Loader;
