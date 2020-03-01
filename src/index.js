const cli = require('./utils/cli');

const getMission = async () => {
    const input = await cli.getInput();
    console.log('input', input);
};

getMission();
