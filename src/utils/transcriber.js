const getMissionInfo = input => {
    const lines = input.split('\n');
    return {
        map:getMapDimensions(lines.shift()),
        robots:getRobots(lines)
    };
};

const getMapDimensions = line => {
    return {
        width: Number(line.split(' ')[0]),
        height: Number(line.split(' ')[1])
    };
};

const getRobots = lines => {
    const robots = [];
    for (let i = 0; i < lines.length - 1; i += 2) {
        robots.push({
            coords: {
                x: Number(lines[i].split(' ')[0]),
                y: Number(lines[i].split(' ')[1])
            },
            orientation: lines[i].split(' ')[2],
            instructions: lines[i + 1].split('')
        });
    }
    return robots;
};

module.exports = {
    getMissionInfo,
    getMapDimensions,
    getRobots
};
