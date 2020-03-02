const cli = require('./utils/cli');
const transcriber = require('./utils/transcriber')
const mission = require('./components/mission')

let inputAux ='5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL';

const martianRobots = async () => {
    // const input = await cli.getInput();
    const missionInfo = transcriber.getMissionInfo(inputAux);
    const missionResults = mission.executeMission(missionInfo);
    const missionOutput = transcriber.adaptMissionResults(missionResults);
    console.log(missionOutput);
    
    // cli.reportResults(missionOutput);
};

martianRobots();
