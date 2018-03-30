import convert, { round } from '.';

describe('Convert Kelvin', () => {
  test('can convert kelvin to celsius', () => {
    const k = 300;
    // const actual = convert.kelvin(k).toCelsius();
    const expected = 26.85;

    expect(convert.kelvin(k).toCelsius()).toBeCloseTo(expected);
  });

  test('can convert kelvin to fahrenheit', () => {
    const k = 273;
    const actual = convert.kelvin(k).toFahrenheit();
    const expected = 31.73;

    expect(actual).toBeCloseTo(expected);
  });
});

describe('Convert Celsius', () => {
  test('can convert celsius to kelvin', () => {
    const c = 12;
    const actual = convert.celsius(c).toKelvin();
    const expected = 285.15;

    expect(actual).toBeCloseTo(expected);
  });

  test('can convert celsius to fahrenheit', () => {
    const c = 75;
    const actual = convert.celsius(c).toFahrenheit();
    const expected = 167;

    expect(actual).toBeCloseTo(expected);
  });
});

describe('Convert Fahrenheit', () => {
  test('can convert fahrenheit to celsius', () => {
    const f = 68;
    const actual = convert.fahrenheit(f).toCelsius();
    const expected = 20;

    expect(actual).toBeCloseTo(expected);
  });

  test('can convert fahrenheit to kelvin', () => {
    const f = 63;
    const actual = convert.fahrenheit(f).toKelvin();
    const expected = 290.37;

    expect(actual).toBeCloseTo(expected);
  });
});

describe('Helper: round', () => {
  test('it rounds number to the specified precision', () => {
    expect(round(23.42184, 3)).toBe(23.422);
    expect(round(50.70084, 4)).toBe(50.7008);
    expect(round(0.5938468061, 8)).toBe(0.59384681);
  });

  test(`it rounds number to two decimal places
  if no precision is provided`, () => {
    expect(round(1.005)).toBe(1.01);
    expect(round(504.1234567)).toBe(504.12);
  });
});
