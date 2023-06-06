const fs = require('fs');
const path = require('path');

const viewName = process.argv[2]; // Retrieve the view name from the command line argument

if (!viewName) {
  console.error('Please provide a view name.');
  process.exit(1);
}

const viewDirectory = path.join(__dirname, '..', 'App', 'views', viewName); // Path to the view directory

// Check if the view directory exists
if (!fs.existsSync(viewDirectory)) {
  console.error(`A directory with the name "${viewName}" does not exist.`);
  process.exit(1);
}

// Remove the view directory
fs.rmdirSync(viewDirectory, { recursive: true });

console.log(`View "${viewName}" removed successfully.`);

// Update the router file
const routerFile = path.join(__dirname, '..', 'App', 'router.tsx'); // Path to the router file

const removeImportStatement = (routerContent, viewName) => {
  const importStatement = `import { ${viewName} } from "./views/${viewName}";`;
  return routerContent.replace(importStatement, '');
};

const removeRouterEntry = (routerContent, viewName) => {
  const routerEntry = `{
    path: "/${viewName}",
    element: <${viewName} />
  },`;
  return routerContent.replace(routerEntry, '');
};

const updateRouterFile = (routerContent, viewName) => {
  let updatedContent = removeImportStatement(routerContent, viewName);
  updatedContent = removeRouterEntry(updatedContent, viewName);

  fs.writeFileSync(routerFile, updatedContent);

  console.log(`Router file updated successfully.`);
};

// Read the router file
const routerContent = fs.readFileSync(routerFile, 'utf8');

// Update the router file
updateRouterFile(routerContent, viewName);
