const axios = require("axios");
const url = "https://alexbisaillion-master-website.herokuapp.com/";
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
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
