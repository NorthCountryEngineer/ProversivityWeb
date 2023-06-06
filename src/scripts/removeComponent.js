const fs = require('fs');
const path = require('path');

const componentName = process.argv[2]; // Retrieve the component name from the command line argument

if (!componentName) {
  console.error('Please provide a component name.');
  process.exit(1);
}

const componentDirectory = path.join(__dirname, '..', 'App', 'components', componentName); // Path to the component directory

// Check if the component directory exists
if (!fs.existsSync(componentDirectory)) {
  console.error(`The directory "${componentName}" does not exist.`);
  process.exit(1);
}

// Remove the component directory
fs.rmdirSync(componentDirectory, { recursive: true });

console.log(`Component "${componentName}" removed successfully.`);
