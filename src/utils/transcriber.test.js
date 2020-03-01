const transcriber = require('./transcriber');

describe('transcriber', () => {
    it('should get Mission info right', () => {
        const mockUserInput = '5 3\n1 1 E\nRFRFRFRF';
        const mockUserOutput = {
            map: { width: 5, height: 3 },
            robots: [
                {
                    coords: { x: 1, y: 1 },
                    orientation: 'E',
                    instructions: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F']
                }
            ]
        };
        expect(transcriber.getMissionInfo(mockUserInput)).toEqual(
            mockUserOutput
        );
    });

    it('should get map dimensions right', () => {
        const mockMapLine = '5 3';
        const mockMapOutput = { width: 5, height: 3 };
        expect(transcriber.getMapDimensions(mockMapLine)).toEqual(
            mockMapOutput
        );
    });

    it('should get robots right', () => {
        const mockRobotsLines = ['1 1 E', 'RFRFRFRF'];
        const mockRobotsOutput = [
            {
                coords: { x: 1, y: 1 },
                orientation: 'E',
                instructions: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F']
            }
        ];
        expect(transcriber.getRobots(mockRobotsLines)).toEqual(
            mockRobotsOutput
        );
    });
});
