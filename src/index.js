const { hello } = require('./utils');

const examplePlugin = {
	name: 'example',
	version: '1.0.0',
	description: 'An example plugin for Snap-CLI',

	commands: [
    {
      name: 'hello',
      description: 'Say hello from the example plugin',
      alias: 'h',
      options: [
        {
          flags: '-n, --name <name>',
          description: 'Name to say hello to',
          defaultValue: 'World'
        }
      ],
			action: async (options) => {
				hello(options);
			},
		},
  ]
};

module.exports = examplePlugin;
