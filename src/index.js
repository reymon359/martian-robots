const cli = require('./utils/cli');
const transcriber = require('./utils/transcriber')

const startMission = async () => {
    const input = await cli.getInput();
    const missionInfo = transcriber.getMissionInfo(input);
    console.log(missionInfo);
};

startMission();
