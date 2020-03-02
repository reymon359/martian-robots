const robot = require('./robot');

describe('robot', () => {
    const mockPlanet = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    it('should change the orientation correct, when turning left', () => {
        // Arrange
        const mockOrientation = 'W';
        const mockOrientationResult = 'S';

        // Act
        const orientationResult = robot.turnLeft(mockOrientation);

        // Assert
        expect(orientationResult).toEqual(mockOrientationResult);
    });

    it('should change the orientation correct, when turning right', () => {
        const mockOrientation = 'W';
        const mockOrientationResult = 'N';

        const orientationResult = robot.turnRight(mockOrientation);

        expect(orientationResult).toEqual(mockOrientationResult);
    });

    it('should get next position correct, when moving front', () => {
        const mockPosition = { x: 3, y: 2, o: 'N' };
        const mockPositionResult = { x: 3, y: 3, o: 'N' };

        const PositionResult = robot.nextPosition(mockPosition);

        expect(PositionResult).toEqual(mockPositionResult);
    });

    it('should check right if is outside of the planet, when moving front', () => {
        const mockPosition = { x: 3, y: -1, o: 'S' };

        const isOutside = robot.isOutsideOfPlanet(mockPosition, mockPlanet);

        expect(isOutside).toBeTruthy();
    });

    it('should update the robot and planet, when moving front', () => {
        const mockRobot = {
            position: { x: 1, y: 1, o: 'S' },
            lost: false,
            instructions: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F']
        };
        const mockRobotResult = {
            position: { x: 1, y: 0, o: 'S' },
            lost: false,
            instructions: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F']
        };

        const updatedRobotAndPlanet = robot.moveFront(mockRobot, mockPlanet);

        expect(mockRobotResult).toEqual(updatedRobotAndPlanet.robot);
        expect(mockPlanet).toEqual(updatedRobotAndPlanet.planet);
    });
});
