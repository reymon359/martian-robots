const transcriber = require('./transcriber');

describe('transcriber', () => {
    it('should get Mission info right, when user submits input', () => {
        // Arrange
        const mockUserInput = '5 3\n1 1 E\nRFRFRFRF';
        const mockMissionInfo = {
            map: { width: 5, height: 3 },
            robots: [
                {
                    position: { x: 1, y: 1, o: 'E' },
                    lost: false,
                    instructions: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F']
                }
            ]
        };

        // Act
        const missionInfo = transcriber.getMissionInfo(mockUserInput);

        // Assert
        expect(missionInfo).toEqual(mockMissionInfo);
    });

    it('should get map dimensions right, when transcriber transcribes line', () => {
        const mockMapLine = '5 3';
        const mockMapDimensions = { width: 5, height: 3 };

        const mapDimensions = transcriber.getMapDimensions(mockMapLine);

        expect(mapDimensions).toEqual(mockMapDimensions);
    });

    it('should format robots right, when transcriber transcribes robots info lines', () => {
        const mockRobotsLines = ['1 1 E', 'RFRFRFRF'];
        const mockRobotsFormated = [
            {
                position: { x: 1, y: 1, o: 'E' },
                lost: false,
                instructions: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F']
            }
        ];

        const robotsFormated = transcriber.getRobots(mockRobotsLines);

        expect(robotsFormated).toEqual(mockRobotsFormated);
        expect(robotsFormated.length).toEqual(mockRobotsFormated.length);
    });

    it('should adapt mission results for output, when adapting mission results', () => {
        const mockMissionResults = [[1, 1, 'E', false]];
        const mockOutput = '1 1 E';

        const output = transcriber.adaptMissionResults(mockMissionResults);

        expect(output).toEqual(mockOutput);
    });
});
