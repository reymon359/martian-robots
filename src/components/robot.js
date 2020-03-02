const turnLeft = orien => {
    const oriens = ['N', 'W', 'S', 'E'];
    const orienIndex = oriens.indexOf(orien);
    return orien !== 'E' ? oriens[orienIndex + 1] : 'N';
};

const turnRight = orien => {
    const oriens = ['N', 'E', 'S', 'W'];
    const orienIndex = oriens.indexOf(orien);
    return orien !== 'W' ? oriens[orienIndex + 1] : 'N';
};

const nextPosition = position => {
    switch (position.o) {
        case 'N':
            return { ...position, y: position.y + 1 };
        case 'S':
            return { ...position, y: position.y - 1 };
        case 'E':
            return { ...position, x: position.x + 1 };
        case 'W':
            return { ...position, x: position.x - 1 };
        default:
            return position;
    }
};

const isOutsideOfPlanet = (coords, planet) =>
    coords.x > planet.length ||
    coords.x < 0 ||
    coords.y > planet[0].length ||
    coords.y < 0;

const moveFront = (robot, planet) => {
    const newPosition = nextPosition(robot.position);

    if (isOutsideOfPlanet(newPosition, planet)) {
        if (!planet[robot.position.x][robot.position.y]) {
            planet[robot.position.x][robot.position.y] = true;
            robot.position = newPosition;
            robot.lost = true;
        }
    } else {
        robot.position = newPosition;
    }

    return { robot, planet };
};

module.exports = {
    turnLeft,
    turnRight,
    nextPosition,
    isOutsideOfPlanet,
    moveFront
};
