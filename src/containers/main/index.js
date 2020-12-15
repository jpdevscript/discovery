import React from "react";
import { Box, Button, Heading } from "rebass";
import { Form } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";

import FormField from "../../components/FormField";
import { getSpaceXData } from "./actions";
import { LATEST } from "../../constants";
import DisplaySpaceXImageOrError from "../../components/DisplaySpaceXImageOrError";
import Loader from "../../components/Loader";
import Information from "../../components/Information";

const Main = () => {
  const dispatch = useDispatch();

  const spaceXData = useSelector((state) => state.main.spaceXData);
  const spaceXError = useSelector((state) => state.main.spaceXError);
  const loader = useSelector((state) => state.main.loader);

  const onSubmit = (values) => {
    console.log(JSON.stringify(values, 0, 2));
    dispatch(getSpaceXData({ version: LATEST }));
  };

  return (
    <Box width={[1, 1, 1 / 2]} sx={{ margin: "auto" }}>
      <Box m={[2, 3, 5]}>
        <Heading marginBottom={2} fontSize={[2, 2, 4]} color="primary">
          User Input Form
        </Heading>
        <Information />
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <FormField
                validateFor="require"
                label="First Name"
                name="firstName"
              />
              <FormField
                validateFor="require"
                label="Last Name"
                name="lastName"
              />
              <FormField validateFor="all" label="Age" name="age" />
              <Button
                my={[2, 2, 4]}
                sx={{ backgroundColor: "#344966" }}
                type="submit"
              >
                Call SpaceX API
              </Button>
            </form>
          )}
        />
        {loader ? (
          <Loader />
        ) : (
          <DisplaySpaceXImageOrError
            spaceXData={spaceXData}
            spaceXError={spaceXError}
          />
        )}
      </Box>
    </Box>
  );
};

Main.displayName = "Main";

export default Main;
