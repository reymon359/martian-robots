const map = require('./map')

const startMission = missionInfo => {
    const planet = map.createPlanet(missionInfo.map); 
    console.log(planet);
    
    // return missionResults;
};


module.exports = {
    startMission,
};
