const fs = require('fs');
const path = require('path');

const componentName = process.argv[2]; // Retrieve the component name from the command line argument

if (!componentName) {
  console.error('Please provide a component name.');
  process.exit(1);
}

const componentDirectory = path.join(__dirname, '..', 'App', 'components', componentName); // Path to the component directory

// Check if the component directory already exists
if (fs.existsSync(componentDirectory)) {
  console.error(`A directory with the name "${componentName}" already exists.`);
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
    { name: 'model.d.ts', content: 'export type model = {}' },
    {
      name: 'index.tsx',
      content: `export * from './${viewName}'
  export * from './components'
  export * from './hooks'
  export * from './model'`,
    },
  ];
  

// Create the component directory
fs.mkdirSync(componentDirectory, { recursive: true });

// Create the individual files inside the component directory
filesToCreate.forEach((file) => {
  const filePath = path.join(componentDirectory, file.name);
  fs.writeFileSync(filePath, file.content);
});

console.log(`Component "${componentName}" created successfully.`);
