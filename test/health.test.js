import checkHealth from '../src/health';

describe('checkHealth', () => {
  test('should return healthy for health > 50', () => {
    const character = { name: 'Маг', health: 90 };
    expect(checkHealth(character)).toBe('healthy');
  });

  test('should return wounded for health between 15 and 50', () => {
    const character = { name: 'Маг', health: 50 };
    expect(checkHealth(character)).toBe('wounded');

    const character2 = { name: 'Маг', health: 15 };
    expect(checkHealth(character2)).toBe('wounded');
  });

  test('should return critical for health < 15', () => {
    const character = { name: 'Маг', health: 14 };
    expect(checkHealth(character)).toBe('critical');
  });
});
