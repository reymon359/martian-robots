const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getInput = () => {
    const lines = [];

    promptWellcome();

    return new Promise((resolve, reject) => {
        rl.on('line', function(line) {
            line = line.trim();
            if (line) {
                lines.push(line);
            } else {
                rl.close();
            }
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

module.exports = {
    getInput,
    promptWellcome
};
