exports.handler = async (event, context) => {
  if (event.httpMethod === "GET") {
    try {
      const data = require("./db.json");

      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to process GET request" }),
      };
    }
  }
};

exports.handler = async (event, context) => {
  if (event.httpMethod === "POST") {
    try {
      const requestBody = JSON.parse(event.body);

      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "POST request processed successfully",
        }),
      };
    } catch (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Failed to process POST request" }),
      };
    }
  }
};
