import React from "react";
import { object, string } from "prop-types";
import { Box, Image, Text, Flex } from "rebass";

const DisplaySpaceXImageOrError = ({ spaceXData, spaceXError }) => {
  if (spaceXData && spaceXData.links) {
    return (
      <Flex
        justifyContent={"flex-start"}
        flexDirection={["column", "column", "row"]}
      >
        <Box>
          <Image src={spaceXData.links.patch.small} />
        </Box>
        <Box>
          <Text mx={3}>{spaceXData.details}</Text>
        </Box>
      </Flex>
    );
  } else if (spaceXError) {
    return <Text>{spaceXError}</Text>;
  }
  return null;
};

DisplaySpaceXImageOrError.defaultProps = {
  spaceXData: {},
  spaceXError: "",
};

DisplaySpaceXImageOrError.propTypes = {
  spaceXData: object,
  spaceXError: string,
};

DisplaySpaceXImageOrError.displayName = "DisplaySpaceXImageOrError";

export default DisplaySpaceXImageOrError;
