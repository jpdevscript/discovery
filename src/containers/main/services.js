export const spaceXService = async (payload) => {
  try {
    const response = await fetch(
      `https://api.spacexdata.com/v4/launches/${payload.version}`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status >= 200 && response.status <= 299) {
      const jsonResponse = await response.json();
      return Promise.resolve(jsonResponse);
    } else {
      const jsonResponse = await response.json();
      const error = jsonResponse.error;
      return Promise.reject(error);
    }
  } catch (error) {
    return Promise.reject("Something went wrong with SpaceX API...");
  }
};
