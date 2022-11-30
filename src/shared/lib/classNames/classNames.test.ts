import cn from './classNames';

describe('classNames', () => {
  test('test cn with only first param', () => {
    expect(cn('class')).toBe('class');
  });
  test('test cn with 1 mods true', () => {
    expect(cn('class', { red: true }, [])).toBe('class red');
  });
  test('test cn with 1 mods false', () => {
    expect(cn('class', { red: false }, [])).toBe('class');
  });
  test('test cn with 3 mods true/false/undefined', () => {
    expect(cn('class', { red: true, green: false, yellow: undefined }, [])).toBe('class red');
  });
  test('test cn with 1 mods true and additional', () => {
    expect(cn('class', { red: true }, ['someClass'])).toBe('class red someClass');
  });
  test('test cn with 1 mods false and additional', () => {
    expect(cn('class', { green: false }, ['someClass'])).toBe('class someClass');
  });
});
