const createPlanet = mapDimensions => {
    const planet = [];
    const { width, height } = mapDimensions;

    while (width > planet.length) {
        planet.push(new Array(height).fill(false));
    }

    return planet;
};

module.exports = {
    createPlanet
};
