const cli = require('./utils/cli');
const transcriber = require('./utils/transcriber')

let inputAux ='5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL';

const startMission = async () => {
    // const input = await cli.getInput();
    const missionInfo = transcriber.getMissionInfo(inputAux);
    console.log(missionInfo.map, missionInfo.robots);
};

startMission();
