const cli = require('./utils/cli');
const transcriber = require('./utils/transcriber')
const mission = require('./components/mission')

const martianRobots = async () => {
    const input = await cli.getInput();
    const missionInfo = transcriber.getMissionInfo(input);
    const missionResults = mission.executeMission(missionInfo);
    const output = transcriber.adaptMissionResults(missionResults);
    cli.sendOutput(output);
    
};

martianRobots();
