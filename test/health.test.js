import checkHealth from '../src/health';
import { sortHeroesByHealth } from '../src/health';

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

describe('sortHeroesByHealth', () => {
  test('should correctly sort heroes by health in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    // Проверяем, что toBe не работает
    expect(sortHeroesByHealth(heroes)).not.toBe(expected);
    
    // Проверяем, что toEqual работает
    expect(sortHeroesByHealth(heroes)).toEqual(expected);
  });

  test('should handle heroes with equal health', () => {
    const heroes = [
      { name: 'мечник', health: 100 },
      { name: 'маг', health: 100 },
    ];

    const expected = [
      { name: 'мечник', health: 100 },
      { name: 'маг', health: 100 },
    ];

    expect(sortHeroesByHealth(heroes)).toEqual(expected);
  });

  test('should handle empty array', () => {
    const heroes = [];
    expect(sortHeroesByHealth(heroes)).toEqual([]);
  });
});
