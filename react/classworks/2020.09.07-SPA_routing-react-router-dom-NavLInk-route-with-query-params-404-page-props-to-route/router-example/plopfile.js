const path = require('path');

module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: `${path.resolve('{{pascalCase name}}')}/{{pascalCase name}}.jsx`,
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/components/Component.jsx.hbs',
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: `${path.resolve(
            '{{pascalCase name}}',
        )}/{{pascalCase name}}.module.scss`,
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/components/Component.module.css.hbs',
      },
      {
        type: 'add',
        path: `${path.resolve('{{pascalCase name}}')}/index.js`,
        templateFile: 'plop-templates/components/index.js.hbs',
      },
    ],
  });

  // services generator

  plop.setGenerator('service', {
    description: 'Create service',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your service name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: `${path.join(__dirname, '..', 'src')}/{{ dashCase name }}.js`,
        templateFile: 'plop-templates/services/Service.js.hbs',
      },
      {
        type: 'add',
        path: 'src/services/index.jsx',
        templateFile: 'plop-templates/injectable-index.jsx.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/services/index.jsx',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{ dashCase name }} from './{{dashCase name}}';`,
      },
      {
        type: 'append',
        path: 'src/services/index.jsx',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{ dashCase name }},`,
      },
    ],
  });
};
