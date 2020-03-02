const mission = require('./mission');

describe('mission', () => {
    it('obtain mission results, when executing mission', () => {
        // Arrange
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
        const mockMissionResults = [[1, 1, 'E', false]];

        // Act
        const missionRessults = mission.executeMission(mockMissionInfo);

        // Assert
        expect(missionRessults).toEqual(mockMissionResults);
    });

    it('should transform robots to mission results, when obtaining mission results', () => {
        // Arrange
        const mockRobots = [
            {
                position: { x: 1, y: 1, o: 'E' },
                lost: false,
                instructions: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F']
            }
        ];
        const mockMissionResults = [[1, 1, 'E', false]];

        // Act
        const missionRessults = mission.obtainMissionResults(mockRobots);

        // Assert
        expect(missionRessults).toEqual(mockMissionResults);
    });

});
