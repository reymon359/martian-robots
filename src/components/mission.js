const robotCommands = require('./robot');
const map = require('./map');

const executeMission = missionInfo => {
    let planet = map.createPlanet(missionInfo.map);

    missionInfo.robots.forEach(robot => {
        robot.instructions.forEach(command => {
            if (command === 'R') {
                robot.position.o = robotCommands.turnRight(robot.position.o);
            } else if (command === 'L') {
                robot.position.o = robotCommands.turnLeft(robot.position.o);
            } else if (command === 'F') {
                let updatedRobotAndPlanet = robotCommands.moveFront(
                    robot,
                    planet
                );
                robot = updatedRobotAndPlanet.robot;
                planet = updatedRobotAndPlanet.planet;
            }
        });
    });

    return obtainMissionResults(missionInfo.robots);
};

const obtainMissionResults = robots => {};
module.exports = {
    executeMission
};
