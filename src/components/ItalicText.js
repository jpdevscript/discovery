import React from "react";
import { Text } from "rebass";
import { node } from "prop-types";

const ItalicText = ({ children }) => (
  <Text fontSize={1} fontStyle="italic" color="primary">
    {children}
  </Text>
);

ItalicText.propTypes = {
  children: node.isRequired,
};

ItalicText.displayName = "ItalicText";

export default ItalicText;
