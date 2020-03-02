const map = require('./map');

describe('map', () => {
    it('should create the planet right, when given mapDimensions', () => {
        // Arrange
        const mockMapDimensions = { width: 3, height: 2 };
        const mockPlanetCreated = [
            [false, false],
            [false, false],
            [false, false]
        ];

        // Act
        const planetCreated = map.createPlanet(mockMapDimensions);

        // Assert
        expect(planetCreated).toEqual(mockPlanetCreated);
        expect(planetCreated.length).toEqual(mockMapDimensions.width);
    });
});
