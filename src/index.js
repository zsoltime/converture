export const round = (num, precision = 2) =>
  Number(`${Math.round(`${num}e+${precision}`)}e-${precision}`);

export const kelvin = k => ({
  toCelsius() {
    return round(k - 273.15);
  },
  toFahrenheit() {
    return round(k * 1.8 - 459.67);
  },
});

export const celsius = c => ({
  toKelvin() {
    return round(c + 273.15);
  },
  toFahrenheit() {
    return round(c * 1.8 + 32);
  },
});

export const fahrenheit = f => ({
  toKelvin() {
    return round((f + 459.67) * (5 / 9));
  },
  toCelsius() {
    return round((f - 32) * (5 / 9));
  },
});

export default {
  kelvin,
  celsius,
  fahrenheit,
};
