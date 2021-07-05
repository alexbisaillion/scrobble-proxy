const axios = require("axios");
const url = "https://music-library-server.herokuapp.com/";
let response;

exports.lambdaHandler = async (event) => {
  try {
    const res = await axios.post(url + "job/refreshPlays", {
      secret: event.secret,
    });
    response = {
      statusCode: 200,
      body: res.data,
    };
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};
