const aws = require('aws-sdk');

exports.handler = async (event) => {
    try {
      let ssm = new aws.SSM()

      const Parameters = await ssm.getParameters({
        Names: ["secretManagerAccess"].map(secretName => process.env[secretName]),
        WithDecryption: true,
      }).promise();

      return {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
          },
          body: JSON.stringify(Parameters),
      };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify('Error fetching secrets from SSM: ' + error.message),
        };
    }
};
