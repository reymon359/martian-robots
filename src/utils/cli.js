const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getInput = () => {
    promptWellcome();

    return new Promise((resolve, reject) => {
        const lines = [];

        rl.on('line', line => {
            line = line.trim();
            line ? lines.push(line) : rl.close();
        });

        rl.on('close', () => {
            resolve(lines.join('\n'));
        });
    });
};

const promptWellcome = () => {
    rl.setPrompt('Wellcome to Martian Robots!\nPlease input a new mission:\n');
    rl.prompt();
};

const sendOutput = output => {
    console.log(output);
};

module.exports = {
    getInput,
    promptWellcome,
    sendOutput
};
