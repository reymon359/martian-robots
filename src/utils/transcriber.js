const getMissionInfo = input => {
    const lines = input.split('\n');
    const map = getMapDimensions(lines[0]);
};

const getMapDimensions = line => {
    return {
        width: Number(line.split(' ')[0]),
        height: Number(line.split(' ')[1])
    };
};

module.exports = {
    getMissionInfo
};
