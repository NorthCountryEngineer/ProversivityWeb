// Import the real AWS Amplify library
const Amplify = require('aws-amplify');

// Configure Amplify for testing
Amplify.configure({
  Auth: {
    // Add mock authentication settings here
    // You can use mock values for testing
  },
  // Add other service configurations as needed
});

// Export the configured Amplify for use in your tests
module.exports = Amplify;