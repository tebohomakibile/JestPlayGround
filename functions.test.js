const functions = require('./functions');

test('test string is defined', () => {
    expect(functions.getAge('Teboho', 30)).toBeDefined();
})

test('2 + 2 = 4', () => {
    expect(functions.add(2, 2)).toBe(4)
})

test('object assignment', () => {
    const data = {one: 1};
    data['two'] =  2;
    expect(data).toEqual({one: 1, two: 2})
})

test('test isNull', () => {
    expect(functions.isNull()).toBeNull()
})

test('test isUndefined', () => {
    expect(functions.isUndefined()).toBeUndefined()
})

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
})

test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(3.5)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4.5)
    expect(value).toBe(4)
    expect(value).toEqual(4)
})

test('add floating point numbers', () => {
    const value = 0.5 + 0.1;
    expect(value).toBeCloseTo(0.6);
    expect(value).toBe(0.6);
})

test('there is no I in team', () => {
    const value = 'team';
    expect(value).not.toMatch(/I/);
    expect(value).not.toContain('I');
})

test('the shopping list has beer on it', () => {
  const shoppingList = [
      'nappies',
      'towels',
      'beer',
      'wine'
  ]  

  expect(shoppingList).toContain('beer')
})

test('compiling angular goes as expected', () => {
    expect(functions.compileAngularCode).toThrow()
    expect(functions.compileAngularCode).toThrow(/version/)
})


