const fs = require('fs');
const path = require('path');

const viewName = process.argv[2]; // Retrieve the view name from the command line argument

if (!viewName) {
  console.error('Please provide a view name.');
  process.exit(1);
}

const viewDirectory = path.join(__dirname, '..', 'App', 'views', viewName); // Path to the view directory

// Check if the view directory already exists
if (fs.existsSync(viewDirectory)) {
  console.error(`A directory with the name "${viewName}" already exists.`);
  process.exit(1);
}

const filesToCreate = [
  {
    name: `${viewName}.tsx`,
    content: `export const ${viewName} = () => {
  return (
    <div></div>
  )
}`,
  },
  { name: 'components.tsx', content: 'export {}' },
  { name: 'hooks.tsx', content: 'export {}' },
  { name: 'model.tsx', content: 'export {}' },
  {
    name: 'index.tsx',
    content: `export * from './${viewName}'
export * from './components'
export * from './hooks'
export * from './model'`,
  },
];

// Create the view directory
fs.mkdirSync(viewDirectory, { recursive: true });

// Create the individual files inside the view directory
filesToCreate.forEach((file) => {
  const filePath = path.join(viewDirectory, file.name);
  fs.writeFileSync(filePath, file.content);
});

console.log(`View "${viewName}" created successfully.`);

// Update the router file
const routerFile = path.join(__dirname, '..', 'App', 'router.tsx'); // Path to the router file

const addImportStatement = (routerContent, viewName) => {
  const importStatement = `import { ${viewName} } from "./views/${viewName}";`;
  return importStatement + '\n' + routerContent;
};

const addRouterEntry = (routerContent, viewName) => {
  const routerEntry = `  {
    path: "/${viewName}",
    element: <${viewName} />
  },`;
  const routerArrayEndIndex = routerContent.indexOf(']');
  return (
    routerContent.slice(0, routerArrayEndIndex) +
    '\n' +
    routerEntry +
    routerContent.slice(routerArrayEndIndex)
  );
};

const updateRouterFile = (routerContent, viewName) => {
  const updatedContent = addImportStatement(routerContent, viewName);
  const finalContent = addRouterEntry(updatedContent, viewName);

  fs.writeFileSync(routerFile, finalContent);

  console.log(`Router file updated successfully.`);
};

// Read the router file
const routerContent = fs.readFileSync(routerFile, 'utf8');

// Update the router file
updateRouterFile(routerContent, viewName);